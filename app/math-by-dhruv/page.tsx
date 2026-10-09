"use client";

import { useState } from "react";

const lectures = [
  { id: "snAhjCtLLJw", title: "Lecture 1" },
  { id: "ba58j-NETmo", title: "Lecture 2" },
  { id: "fwC4ga8oPao", title: "Lecture 3" },
  { id: "kMATTIw6fTk", title: "Lecture 4" },
  { id: "huMnHocYm9M", title: "Lecture 5" },
];

export default function MathByDhruvPage() {
  const [selected, setSelected] = useState(0);
  const lecture = lectures[selected];

  return (
    <main className="min-h-screen bg-[#030b19] px-4 py-6 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm font-black tracking-wide text-cyan-300">
          LOYAL GLOBAL STUDIES
        </a>

        <section className="mt-6 overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-[#071d36] via-[#08294a] to-[#03101f] p-6 sm:p-10">
          <span className="rounded-full border border-cyan-400 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300">
            UPSC / STATE PCS
          </span>
          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            Math by <span className="text-cyan-300">Dhruv Sir</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            UPSC और अन्य प्रतियोगी परीक्षाओं के लिए गणित की तैयारी।
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3">▶ 5 Lectures</span>
            <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3">📘 Maths Classes</span>
            <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3">🎯 Concept Learning</span>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-2xl border border-cyan-400/25 bg-[#061327] p-4 sm:p-5">
            <h2 className="mb-5 text-2xl font-black">
              Lectures <span className="text-cyan-300">({lectures.length})</span>
            </h2>
            <div className="space-y-3">
              {lectures.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(index)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                    selected === index
                      ? "border-cyan-300 bg-cyan-400/15 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                      : "border-slate-700 bg-slate-900/50 hover:border-cyan-400/60"
                  }`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-black ${
                    selected === index ? "bg-cyan-400 text-slate-950" : "bg-sky-950 text-cyan-200"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold">{item.title}</span>
                    <span className="mt-1 block text-sm text-slate-400">Math by Dhruv Sir</span>
                  </span>
                  <span className="text-xl text-cyan-300">▶</span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-cyan-400/25 bg-[#061327] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black">{lecture.title}</h2>
                <p className="mt-1 text-slate-300">Math by Dhruv Sir</p>
              </div>
              <span className="rounded-lg border border-cyan-400/30 px-3 py-2 text-sm text-cyan-200">
                Lecture {selected + 1} / {lectures.length}
              </span>
            </div>

            <div className="aspect-video overflow-hidden rounded-xl border border-slate-700 bg-black">
              <iframe
                key={lecture.id}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${lecture.id}`}
                title={`${lecture.title} - Math by Dhruv Sir`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <h3 className="mt-5 text-lg font-bold">Lecture Description</h3>
            <p className="mt-2 leading-7 text-slate-300">
              इस lecture में Dhruv Sir के साथ गणित की तैयारी करें। बेहतर अनुभव के लिए
              lecture को ध्यान से देखें और महत्वपूर्ण concepts के notes बनाएं।
            </p>

            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <button
                onClick={() => setSelected((selected + lectures.length - 1) % lectures.length)}
                className="rounded-xl border border-slate-600 px-5 py-3 font-bold hover:border-cyan-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => setSelected((selected + 1) % lectures.length)}
                className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 hover:bg-cyan-300"
              >
                Next Lecture →
              </button>
            </div>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-sm text-slate-400">
          <p className="font-black text-white">LOYAL GLOBAL STUDIES</p>
          <p className="mt-1">India's Global Learning Platform</p>
          <p className="mt-3">
            © 2026 LOYAL Global Studies ·{" "}
            <span className="loyal-rainbow font-bold">DEVELOPER BY ❤️ LOYAL JI ❤️</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
