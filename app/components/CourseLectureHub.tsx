"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Lecture = {
  id: string;
  title: string;
  subject: string | null;
  video_source: string;
  youtube_url: string | null;
};

type Comment = {
  id: string;
  lecture_id: string;
  display_name: string;
  body: string;
  created_at: string;
};

function getVideoId(url: string | null) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (host.endsWith("youtube.com")) {
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }

      const parts = parsed.pathname.split("/").filter(Boolean);

      if (["live", "embed", "shorts"].includes(parts[0])) {
        return parts[1] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export default function CourseLectureHub({
  courseSlug,
}: {
  courseSlug: string;
}) {
  const [courseTitle, setCourseTitle] = useState("");
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [names, setNames] = useState<Record<string, string>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState("");
  const [message, setMessage] = useState("");

  async function loadComments(ids: string[]) {
    if (!ids.length) {
      setComments([]);
      return;
    }

    const { data, error } = await supabase
      .from("lecture_comments")
      .select("id,lecture_id,display_name,body,created_at")
      .in("lecture_id", ids)
      .order("created_at", { ascending: true });

    if (error) {
      setMessage("Comments load nahi hue: " + error.message);
      return;
    }

    setComments((data ?? []) as Comment[]);
  }

  useEffect(() => {
    let active = true;

    async function loadCourse() {
      setLoading(true);
      setMessage("");

      const { data: course, error: courseError } = await supabase
        .from("courses")
        .select("id,title")
        .eq("slug", courseSlug)
        .single();

      if (!active) return;

      if (courseError || !course) {
        setMessage("Course nahi mila. Supabase mein course slug check karein.");
        setLoading(false);
        return;
      }

      setCourseTitle(course.title);

      const { data, error } = await supabase
        .from("lectures")
        .select("id,title,subject,video_source,youtube_url")
        .eq("course_id", course.id)
        .eq("published", true);

      if (!active) return;

      if (error) {
        setMessage("Lectures load nahi hue: " + error.message);
        setLoading(false);
        return;
      }

      const items = (data ?? []) as Lecture[];

      items.sort((a, b) => {
        const order = (title: string) => {
          if (/orientation/i.test(title)) return 0;
          const match = title.match(/lecture\s*0*(\d+)/i);
          return match ? Number(match[1]) : 9999;
        };

        return order(a.title) - order(b.title);
      });

      setLectures(items);
      await loadComments(items.map((item) => item.id));

      if (active) setLoading(false);
    }

    void loadCourse();

    return () => {
      active = false;
    };
  }, [courseSlug]);

  async function submitComment(
    event: FormEvent<HTMLFormElement>,
    lectureId: string,
  ) {
    event.preventDefault();

    const displayName = (names[lectureId] ?? "").trim();
    const body = (drafts[lectureId] ?? "").trim();

    if (!displayName || !body) {
      setMessage("Naam aur comment dono likhein.");
      return;
    }

    if (displayName.length > 60 || body.length > 1000) {
      setMessage("Naam maximum 60 aur comment maximum 1000 characters ka ho.");
      return;
    }

    setSending(lectureId);
    setMessage("");

    const { error } = await supabase
      .from("lecture_comments")
      .insert({
        lecture_id: lectureId,
        display_name: displayName,
        body,
      });

    if (error) {
      setMessage("Comment save nahi hua: " + error.message);
    } else {
      setDrafts((old) => ({ ...old, [lectureId]: "" }));
      await loadComments(lectures.map((item) => item.id));
      setMessage("Comment publish ho gaya.");
    }

    setSending("");
  }

  const groups = lectures.reduce<Record<string, Lecture[]>>(
    (result, lecture) => {
      const subject = lecture.subject?.trim() || "General";
      if (!result[subject]) result[subject] = [];
      result[subject].push(lecture);
      return result;
    },
    {},
  );

  return (
    <main className="min-h-screen bg-[#030b19] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/courses"
          className="font-bold text-cyan-300 hover:text-white"
        >
          ← All Courses
        </a>

        <header className="mt-6 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#102849] to-[#030b19] p-6 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            LOYAL GLOBAL STUDIES
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            {courseTitle || "Course Lectures"}
          </h1>
          <p className="mt-3 text-slate-300">
            Learn at your pace. Watch lectures and discuss your doubts below.
          </p>
          <p className="mt-4 text-sm text-cyan-200">
            {lectures.length} published lecture(s)
          </p>
        </header>

        {message && (
          <p
            role="status"
            className="mt-5 rounded-xl border border-cyan-400/30 bg-cyan-950/40 p-3 text-sm text-cyan-100"
          >
            {message}
          </p>
        )}

        {loading ? (
          <p className="py-12 text-center text-slate-300">
            Lectures load ho rahe hain...
          </p>
        ) : lectures.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-white/10 p-6 text-slate-300">
            Abhi koi published lecture nahi hai.
          </p>
        ) : (
          <div className="mt-8 space-y-10">
            {Object.entries(groups).map(([subject, subjectLectures]) => (
              <section key={subject}>
                <h2 className="mb-5 text-2xl font-bold text-cyan-300">
                  {subject}
                </h2>

                <div className="space-y-7">
                  {subjectLectures.map((lecture) => {
                    const videoId = getVideoId(lecture.youtube_url);
                    const lectureComments = comments.filter(
                      (comment) => comment.lecture_id === lecture.id,
                    );

                    return (
                      <article
                        key={lecture.id}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-[#091528] shadow-lg"
                      >
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg font-bold sm:text-xl">
                            {lecture.title}
                          </h3>

                          {lecture.video_source === "youtube" && videoId ? (
                            <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-black">
                              <iframe
                                className="h-full w-full"
                                src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`}
                                title={lecture.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <p className="mt-4 rounded-xl bg-slate-900 p-4 text-sm text-amber-200">
                              Is video ka supported playback source abhi set
                              nahi hai. Admin panel mein video details check
                              karein.
                            </p>
                          )}

                          <p className="mt-3 text-xs text-slate-400">
                            YouTube playback speed YouTube ke supported
                            controls par depend karti hai. 4x speed har
                            embedded video mein available nahi hoti.
                          </p>

                          <div className="mt-7 border-t border-white/10 pt-5">
                            <h4 className="text-lg font-bold">
                              Discussion & Comments ({lectureComments.length})
                            </h4>

                            <form
                              className="mt-4 space-y-3"
                              onSubmit={(event) =>
                                submitComment(event, lecture.id)
                              }
                            >
                              <input
                                className="w-full rounded-xl border border-white/15 bg-[#030b19] px-4 py-3 text-white outline-none focus:border-cyan-400"
                                placeholder="Aapka naam"
                                value={names[lecture.id] ?? ""}
                                maxLength={60}
                                onChange={(event) =>
                                  setNames((old) => ({
                                    ...old,
                                    [lecture.id]: event.target.value,
                                  }))
                                }
                                required
                              />

                              <textarea
                                className="min-h-24 w-full rounded-xl border border-white/15 bg-[#030b19] px-4 py-3 text-white outline-none focus:border-cyan-400"
                                placeholder="Apna doubt ya comment likhein..."
                                value={drafts[lecture.id] ?? ""}
                                maxLength={1000}
                                onChange={(event) =>
                                  setDrafts((old) => ({
                                    ...old,
                                    [lecture.id]: event.target.value,
                                  }))
                                }
                                required
                              />

                              <button
                                type="submit"
                                disabled={sending === lecture.id}
                                className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                              >
                                {sending === lecture.id
                                  ? "Posting..."
                                  : "Post Comment"}
                              </button>
                            </form>

                            <div className="mt-5 space-y-3">
                              {lectureComments.length === 0 ? (
                                <p className="text-sm text-slate-400">
                                  Abhi koi comment nahi hai. Pehla comment
                                  karein!
                                </p>
                              ) : (
                                lectureComments.map((comment) => (
                                  <div
                                    key={comment.id}
                                    className="rounded-xl border border-white/10 bg-[#030b19] p-4"
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <span className="font-semibold text-cyan-200">
                                        {comment.display_name}
                                      </span>
                                      <time className="text-xs text-slate-500">
                                        {new Date(
                                          comment.created_at,
                                        ).toLocaleDateString("en-IN")}
                                      </time>
                                    </div>
                                    <p className="mt-2 whitespace-pre-wrap break-words text-sm text-slate-200">
                                      {comment.body}
                                    </p>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
