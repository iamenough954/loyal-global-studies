"use client";

import { useState } from "react";

export default function MockTestsPage() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
          <a href="/" className="font-black tracking-wide text-cyan-300">
            LOYAL GLOBAL STUDIES
          </a>
          <a
            href="/"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-cyan-300"
          >
            ← Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10 p-6 sm:p-10">
          <p className="text-sm font-bold tracking-[0.2em] text-cyan-300">
            EXAM PRACTICE ZONE
          </p>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">
            Mock Test Series
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            परीक्षा जैसे माहौल में अभ्यास करें। समय प्रबंधन, प्रश्नों का
            अभ्यास और अपनी तैयारी का मूल्यांकन करने के लिए यह आपका practice
            zone है।
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "UPPCS Practice"],
              ["02", "Exam-style Interface"],
              ["03", "Result Analysis"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">{number}</p>
                <p className="mt-2 font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              AVAILABLE TESTS
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              अपना Mock Test चुनें
            </h2>
          </div>
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">
            Hindi Medium
          </span>
        </div>

        <article className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/10 to-transparent p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300">
                UPPCS PRELIMS
              </span>
              <span className="rounded-lg border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">
                PAPER SETUP IN PROGRESS
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-black sm:text-3xl">
              UPPCS Prelims — Test 1
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              उत्तर प्रदेश सम्मिलित राज्य/प्रवर अधीनस्थ सेवा परीक्षा की
              तैयारी के लिए practice test।
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
            {[
              ["कुल प्रश्न", "150"],
              ["समय सीमा", "120 मिनट"],
              ["माध्यम", "हिंदी"],
              ["उत्तर कुंजी", "150 उत्तर उपलब्ध"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full rounded-xl border border-cyan-300/40 px-5 py-3 font-bold text-cyan-200 transition hover:bg-cyan-300/10 sm:w-auto"
            >
              {showInstructions ? "निर्देश बंद करें" : "परीक्षा के निर्देश देखें"}
            </button>

            {showInstructions && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                <h4 className="text-lg font-black text-cyan-300">
                  परीक्षा के निर्देश
                </h4>
                <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-300">
                  <li>कुल 150 प्रश्नों के लिए प्रस्तावित समय 120 मिनट है।</li>
                  <li>हर प्रश्न में चार विकल्प A, B, C और D होंगे।</li>
                  <li>प्रश्नों के बीच आगे-पीछे जाने की सुविधा होगी।</li>
                  <li>Marked for Review से प्रश्न बाद में देखने के लिए चिह्नित होगा।</li>
                  <li>Submit करने से पहले उत्तरों की समीक्षा की जा सकेगी।</li>
                  <li>परीक्षा के बाद score और उत्तर कुंजी से मिलान दिखाया जाएगा।</li>
                </ol>
                <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100">
                  वास्तविक प्रश्न-पत्र और उसके विकल्प जोड़ना अभी बाकी है।
                  प्रश्न-पत्र जुड़ने तक परीक्षा शुरू नहीं होगी। Negative
                  marking और scoring rules को अंतिम रूप देने से पहले verify
                  किया जाएगा।
                </p>
              </div>
            )}

            <p className="mt-5 text-sm leading-6 text-slate-400">
              आपकी दी हुई answer key सुरक्षित रूप से इस test में जोड़ी जाएगी।
              वास्तविक प्रश्न-पत्र मिलने के बाद timer, question palette,
              answer selection और result calculation सक्रिय किए जाएँगे।
            </p>
          </div>
        </article>

        <p className="mt-8 text-center text-sm text-slate-500">
          LOYAL Global Studies · Learn · Practice · Grow
        </p>
      </section>
    </main>
  );
}
