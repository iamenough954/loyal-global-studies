"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Course = {
  id: string;
  title: string;
  slug: string;
};

type Lecture = {
  id: string;
  title: string;
  youtube_url: string | null;
  created_at: string;
  courses: { title: string } | null;
};

export default function AdminLecturesPage() {
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const loadLectures = useCallback(async () => {
    const { data, error } = await supabase
      .from("lectures")
      .select("id,title,youtube_url,created_at,courses(title)")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error) setLectures((data ?? []) as unknown as Lecture[]);
  }, []);

  useEffect(() => {
    let active = true;

    async function init() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        if (active) {
          setReady(true);
          window.location.replace("/admin/login");
        }
        return;
      }

      const { data: admin, error } =
        await supabase.rpc("is_loyal_admin");

      if (!active) return;

      if (error || admin !== true) {
        await supabase.auth.signOut();
        window.location.replace("/admin/login");
        return;
      }

      const { data: courseData, error: courseError } =
        await supabase.from("courses")
          .select("id,title,slug")
          .order("title");

      if (!active) return;

      if (courseError) {
        setMessage("Courses load nahi hue: " + courseError.message);
      } else {
        const items = (courseData ?? []) as Course[];
        setCourses(items);
        if (items.length) setCourseId(items[0].id);
      }

      await loadLectures();
      if (active) {
        setAllowed(true);
        setReady(true);
      }
    }

    void init();
    return () => { active = false; };
  }, [loadLectures]);

  async function publish(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMessage("");

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setMessage("Pehle admin login karein.");
      setBusy(false);
      return;
    }

    const { data: admin, error: adminError } =
      await supabase.rpc("is_loyal_admin");

    if (adminError || admin !== true) {
      setMessage("Admin permission verify nahi hui.");
      setBusy(false);
      return;
    }

    let parsed: URL;
    try {
      parsed = new URL(url.trim());
    } catch {
      setMessage("Valid YouTube URL paste karein.");
      setBusy(false);
      return;
    }

    const host = parsed.hostname.toLowerCase();
    if (
      !["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtube-nocookie.com"].includes(host)
      || !["https:", "http:"].includes(parsed.protocol)
    ) {
      setMessage("Sirf YouTube lecture links supported hain.");
      setBusy(false);
      return;
    }

    if (!courseId) {
      setMessage("Pehle courses database mein add karein.");
      setBusy(false);
      return;
    }

    const { error } = await supabase.from("lectures").insert({
      course_id: courseId,
      title: title.trim(),
      video_source: "youtube",
      youtube_url: url.trim(),
      published: true,
    });

    if (error) {
      setMessage("Publish failed: " + error.message);
    } else {
      setMessage("Lecture course mein publish ho gaya!");
      setTitle("");
      setUrl("");
      await loadLectures();
    }

    setBusy(false);
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.replace("/admin/login");
  }

  if (!ready || !allowed) {
    return <main className="min-h-screen bg-[#030b19] p-10 text-white">Admin access check ho raha hai...</main>;
  }

  return (
    <main className="min-h-screen bg-[#030b19] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="font-bold text-cyan-300">LOYAL GLOBAL STUDIES</a>
          <button onClick={logout} className="rounded-lg border border-white/20 px-3 py-2 text-sm">Logout</button>
        </div>

        <p className="mt-8 text-sm font-bold tracking-widest text-cyan-300">ADMIN STUDIO</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Lecture Management</h1>
        <p className="mt-2 text-slate-400">YouTube link submit karte hi lecture publish hoga.</p>

        <form onSubmit={publish} className="mt-7 space-y-4 rounded-2xl border border-cyan-400/25 bg-[#0a1729] p-5">
          <label className="block text-sm font-bold">
            Course
            <select required value={courseId} onChange={e => setCourseId(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#030b19] p-3">
              {courses.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
            </select>
          </label>

          <label className="block text-sm font-bold">
            Lecture title
            <input required maxLength={160} value={title} onChange={e => setTitle(e.target.value)}
              placeholder="Lecture 01 — Introduction"
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#030b19] p-3" />
          </label>

          <label className="block text-sm font-bold">
            YouTube link
            <input required type="url" value={url} onChange={e => setUrl(e.target.value)}
              placeholder="https://youtu.be/..."
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#030b19] p-3" />
          </label>

          <button disabled={busy || !courses.length}
            className="w-full rounded-xl bg-cyan-300 p-3 font-black text-slate-950 disabled:opacity-50">
            {busy ? "Publishing..." : "Publish Lecture"}
          </button>
          {message && <p role="status" className="text-sm text-cyan-200">{message}</p>}
        </form>

        <h2 className="mt-10 text-2xl font-black">Published Lectures</h2>
        <div className="mt-4 space-y-3">
          {lectures.map(lecture => (
            <article key={lecture.id} className="rounded-xl border border-white/10 bg-[#0a1729] p-4">
              <p className="font-bold">{lecture.title}</p>
              <p className="mt-1 text-sm text-cyan-300">{lecture.courses?.title ?? "Course"}</p>
              {lecture.youtube_url && (
                <a href={lecture.youtube_url} target="_blank" rel="noreferrer"
                  className="mt-2 inline-block break-all text-sm text-slate-400 underline">
                  Open video link
                </a>
              )}
            </article>
          ))}
          {!lectures.length && <p className="text-slate-400">Abhi published lectures nahi hain.</p>}
        </div>
      </div>
    </main>
  );
}
