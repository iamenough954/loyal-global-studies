"use client";

import { useState } from "react";

const lectures = [
  {
    title: "Lecture 01",
    description: "Hindi Foundation — कक्षा 01",
    videoId: "GpZ4lcEBABw",
  },
  {
    title: "Lecture 02",
    description: "Hindi Foundation — कक्षा 02",
    videoId: "UMDGGN1iDSQ",
  },
];

export default function HindiFoundationPage() {
  const [active, setActive] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <main className="min-h-screen bg-[#050b1b] text-white">
      <header className="border-b border-cyan-400/20 bg-[#08142b] px-4 py-5 sm:px-8">
        <a href="/" className="text-sm font-bold text-cyan-300">
          ← LOYAL GLOBAL STUDIES
        </a>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          Hindi Medium • Foundation Course
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-5xl">
          HINDI <span className="text-cyan-300">FOUNDATION</span>
        </h1>
        <p className="mt-3 text-lg text-slate-300">By Jitendra Soni Sir</p>
        <p className="mt-2 text-sm text-slate-400">
          हिंदी की बुनियाद मजबूत करें और आगे बढ़ें।
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <section className="overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-950/30">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-3">
            {lectures.map((lecture, index) => (
              <button
                key={lecture.videoId}
                onClick={() => setActive(index)}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                  active === index
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                ▶ {lecture.title}
              </button>
            ))}
          </div>

          <div className="p-3 sm:p-5">
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                key={lectures[active].videoId}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${lectures[active].videoId}`}
                title={lectures[active].description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h2 className="mt-4 text-xl font-bold">
              {lectures[active].description}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Instructor: Jitendra Soni Sir
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${lectures[active].videoId}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-cyan-300 underline"
            >
              YouTube पर भी देखें ↗
            </a>
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
              alert("Comment form तैयार है। Comments सेव करने के लिए सुरक्षित backend जोड़ना बाकी है।");
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
              className="mt-3 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Comment भेजें
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            अभी comments सेव नहीं होते। सभी विद्यार्थियों के comments दिखाने के लिए database और moderation जोड़ना होगा।
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
