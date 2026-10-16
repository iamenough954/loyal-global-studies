"use client";

import { useState } from "react";
import Link from "next/link";

export default function MockTestsPage() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30">
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-black tracking-wider text-cyan-300 hover:text-white transition">
            LOYAL GLOBAL STUDIES
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            ← Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" /> EXAM PRACTICE ZONE
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Mock Test <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Series</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              परीक्षा जैसे वास्तविक माहौल में अभ्यास करें। समय प्रबंधन, सटीक उत्तर चयन और अपनी ऑल-इंडिया तैयारी का मूल्यांकन करने के लिए यह आपका डिजिटल प्लेटफॉर्म है।
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "UPPCS Standard Pattern", "Strict exam simulation"],
                ["02", "Live Timer & Palette", "Advanced question tracking"],
                ["03", "Instant Analytics", "Detailed solutions & score"],
              ].map(([number, title, desc]) => (
                <div key={number} className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <p className="text-2xl font-black text-cyan-300">{number}</p>
                  <p className="mt-2 font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black tracking-widest text-cyan-300">AVAILABLE EXAMS</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">अपना Mock Test चुनें</h2>
          </div>
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            हिंदी माध्यम (Bilingual Ready)
          </span>
        </div>

        <article className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#10192d] to-[#070d18] shadow-2xl transition hover:border-cyan-300/40">
          <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-xl bg-cyan-400/20 px-3.5 py-1.5 text-xs font-black tracking-wider text-cyan-300 border border-cyan-400/30">
                UPPCS PRELIMS
              </span>
              <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-black tracking-wider text-amber-300">
                PAPER SETUP IN PROGRESS
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-black tracking-tight sm:text-4xl">
              UPPCS Prelims — Test 1
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300 text-sm sm:text-base">
              उत्तर प्रदेश सम्मिलित राज्य/प्रवर अधीनस्थ सेवा परीक्षा (UPPCS) के नवीनतम पैटर्न पर आधारित अभ्यास प्रश्न-पत्र।
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8 border-b border-white/10 bg-black/20">
            {[
              ["कुल प्रश्न", "150 Questions"],
              ["समय सीमा", "120 Minutes"],
              ["माध्यम", "Hindi & English"],
              ["उत्तर कुंजी", "150 Verified Answers"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold text-slate-400">{label}</p>
                <p className="mt-2 text-xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/40 bg-cyan-300/10 px-6 py-4 font-black text-cyan-200 transition hover:bg-cyan-300/20 hover:border-cyan-300"
              >
                <span>{showInstructions ? "निर्देश बंद करें (Hide Instructions)" : "परीक्षा के निर्देश देखें (View Guidelines)"}</span>
                <span className="text-lg">{showInstructions ? "↑" : "↓"}</span>
              </button>

              <Link
                href="/mock-tests/uppcs-prelims-test-1"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-black text-[#03101f] shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-blue-400"
              >
                <span>Attempt UPPCS Test 1</span>
                <span>→</span>
              </Link>
            </div>

            {showInstructions && (
              <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-black/40 p-6 backdrop-blur-md animate-fadeIn">
                <h4 className="text-lg font-black text-cyan-300 tracking-wide">
                  📋 परीक्षा के महत्वपूर्ण निर्देश (Exam Instructions)
                </h4>
                <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-300 text-sm sm:text-base">
                  <li>कुल <strong className="text-white">150 बहुविकल्पीय प्रश्न</strong> होंगे, जिनके लिए कुल समय <strong className="text-white">120 मिनट</strong> निर्धारित है।</li>
                  <li>प्रत्येक प्रश्न के चार संभावित विकल्प (A, B, C, D) दिए जाएंगे, जिनमें से केवल एक सही होगा।</li>
                  <li>परीक्षा के दौरान प्रश्नों के बीच आगे-पीछे जाने (Navigation) की पूरी सुविधा उपलब्ध है।</li>
                  <li>'Marked for Review' विकल्प से आप किसी प्रश्न को बाद में दोबारा देखने के लिए चिह्नित कर सकते हैं।</li>
                  <li>फाइनल सबमिट करने से पहले आप अपने सभी उत्तरों की समीक्षा (Review) कर सकते हैं।</li>
                  <li>परीक्षा समाप्त होने पर आपको तुरंत स्कोर, नेगेटिव मार्किंग गणना और सटीक उत्तर कुंजी (Answer Key) दिखाई जाएगी।</li>
                </ol>
                <div className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-amber-200">
                  ⚡ <strong>Note:</strong> वास्तविक प्रश्न-पत्र और उसके विकल्प सुरक्षित रूप से जोड़े जा रहे हैं। timer, question palette, और answer selection आपके द्वारा सेट की गई original answer key के अनुसार पूरी तरह सक्रिय रहेंगे।
                </div>
              </div>
            )}

            <p className="mt-6 text-sm leading-6 text-slate-400 border-t border-white/10 pt-6">
              🔒 आपकी दी हुई answer key और UPPCS test logic पूरी तरह सुरक्षित हैं। Test interface में timer, negative marking और result calculation सभी मानकों के अनुरूप काम करेंगे।
            </p>
          </div>
        </article>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          LOYAL Global Studies · Learn · Practice · Grow
          <p className="mt-2 font-black tracking-widest text-cyan-300">
            DESIGNED WITH ❤️ BY LOYAL JI
          </p>
        </footer>
      </section>
    </main>
  );
}
