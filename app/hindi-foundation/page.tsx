"use client";

import { useState } from "react";

const lectures = [
  { title: "Lecture 01", videoId: "GpZ4lcEBABw" },
  { title: "Lecture 02", videoId: "UMDGGN1iDSQ" },
  { title: "Lecture 03", videoId: "xUWYklqfv_U" },
  { title: "Lecture 04", videoId: "DtCgRVZ12BQ" },
  { title: "Lecture 05", videoId: "_5SIAO0sTAU" },
  { title: "Lecture 06", videoId: "6pFvKXKa_tk" },
  { title: "Lecture 07", videoId: "qONCc3zVcQQ" },
  { title: "Lecture 08", videoId: "ppN6Gr9ezWs" },
  { title: "Lecture 09", videoId: "AmBDb_4_xog" },
  { title: "Lecture 10", videoId: "a0zYtw0B1oY" },
  { title: "Lecture 11", videoId: "Qp5cHL3PtwA" },
  { title: "Lecture 12", videoId: "CzoUMHPjiXA" },
  { title: "Lecture 13", videoId: "ZTV2iwlqhIE" },
  { title: "Lecture 14", videoId: "0gX6OKifgLg" },
  { title: "Lecture 15", videoId: "ugihkfcj_TM" },
  { title: "Lecture 16", videoId: "QCt-yC9ECbA" },
  { title: "Lecture 17", videoId: "2dMnUpC6H-M" },
  { title: "Lecture 18", videoId: "pvQGYEhSGxM" },
  { title: "Lecture 19", videoId: "OqZhrOI7Pyg" },
  { title: "Lecture 20", videoId: "Mv2PT9et-6w" },
];

export default function HindiFoundationPage() {
  const [active, setActive] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <main className="min-h-screen bg-[#050b1b] text-white">
      <header className="border-b border-cyan-400/20 bg-[#08142b] px-4 py-6 sm:px-8">
        <a href="/" className="text-sm font-bold text-cyan-300">
          ← LOYAL GLOBAL STUDIES
        </a>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          Hindi Medium • Foundation Course
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-5xl">
          HINDI <span className="text-cyan-300">FOUNDATION</span>
        </h1>
        <p className="mt-3 text-lg text-slate-300">By Jitendra Soni Sir</p>
        <p className="mt-2 text-sm text-slate-400">
          सभी lectures क्रम से देखें और अपनी पढ़ाई जारी रखें।
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <section className="overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-950/30">
          <div className="border-b border-white/10 p-4">
            <h2 className="text-xl font-black">Course Lectures</h2>
            <p className="mt-1 text-sm text-slate-400">
              कुल {lectures.length} lectures • अभी चल रहा है: {lectures[active].title}
            </p>
          </div>

          <div className="grid gap-4 p-3 md:grid-cols-[1fr_240px] sm:p-5">
            <div className="min-w-0">
              <div className="aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  key={lectures[active].videoId}
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${lectures[active].videoId}`}
                  title={lectures[active].title + " - Hindi Foundation"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                {lectures[active].title} — Hindi Foundation
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Instructor: Jitendra Soni Sir
              </p>

              <div className="mt-5 flex gap-3">
                <button
                  disabled={active === 0}
                  onClick={() => setActive((n) => n - 1)}
                  className="rounded-lg border border-white/15 px-4 py-2 font-semibold disabled:opacity-40"
                >
                  ← Previous
                </button>
                <button
                  disabled={active === lectures.length - 1}
                  onClick={() => setActive((n) => n + 1)}
                  className="rounded-lg bg-cyan-400 px-4 py-2 font-bold text-slate-950 disabled:opacity-40"
                >
                  Next Lecture →
                </button>
              </div>
            </div>

            <aside>
              <h3 className="mb-3 font-bold">Lecture List (01–20)</h3>
              <div className="max-h-[430px] space-y-2 overflow-y-auto pr-1">
                {lectures.map((lecture, index) => (
                  <button
                    key={lecture.videoId}
                    onClick={() => setActive(index)}
                    className={`w-full rounded-lg border p-3 text-left text-sm font-semibold transition ${
                      active === index
                        ? "border-cyan-300 bg-cyan-400 text-slate-950"
                        : "border-white/10 bg-white/[0.04] hover:border-cyan-400/50"
                    }`}
                  >
                    {active === index ? "▶ " : ""}
                    {lecture.title}
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          <h2 className="text-2xl font-black">💬 Class Discussion</h2>
          <p className="mt-2 text-sm text-slate-400">
            Lecture से जुड़ा सवाल या सुझाव लिखें।
          </p>
          <form
            className="mt-5"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Comments सेव करने के लिए database और backend जोड़ना बाकी है।");
            }}
          >
            <label htmlFor="comment" className="mb-2 block text-sm font-semibold">
              आपका सवाल या कमेंट
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="अपना सवाल यहाँ लिखें..."
              rows={4}
              required
              maxLength={1000}
              className="w-full rounded-xl border border-white/15 bg-slate-950 p-4 text-white outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="mt-3 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
            >
              Comment भेजें
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            Comments अभी स्थायी रूप से सेव नहीं होते।
          </p>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          © 2026 LOYAL Global Studies
          <p className="mt-2 font-bold">
            <span className="loyal-rainbow">DEVELOPER BY ❤️ LOYAL JI ❤️</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
