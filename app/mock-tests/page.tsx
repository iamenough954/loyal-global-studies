"use client";

import Link from "next/link";

export default function MockTestsPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-16">
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-black tracking-wider text-cyan-300 hover:text-white transition text-xs sm:text-sm">
            ← HOME
          </Link>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-black text-cyan-200">
            LOYAL GLOBAL STUDIES — EXAM PORTAL
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-cyan-200">
              EXAM PRACTICE ZONE
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Mock Test Series
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              परीक्षा जैसे माहौल में अभ्यास करें। समय प्रबंधन, प्रश्नों का अभ्यास और अपनी तैयारी का मूल्यांकन करने के लिए यह आपका practice zone है।
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-black text-slate-200 tracking-wider uppercase mb-6">
            अपना Mock Test चुनें
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* UPSSSC PET Card */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2e] to-[#080d19] p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-black text-cyan-300">
                    UPSSSC PET
                  </span>
                  <span className="text-xs font-bold text-emerald-400 tracking-wider">
                    10-YEAR PYQ SERIES
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black group-hover:text-cyan-200">
                  UPSSSC PET (2015 – 2024)
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-400">
                  उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (PET) के 10 वर्षों के हल प्रश्न-पत्र और प्रैक्टिस सेट्स।
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">अंकन प्रणाली</p>
                    <p className="mt-1 text-xs font-black text-amber-300">-0.25 Negative</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">कुल सेट्स</p>
                    <p className="mt-1 text-xs font-black text-cyan-300">10 Year Archives</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <Link
                  href="/mock-tests/upsssc-pet"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-xs font-black text-slate-950 transition hover:from-cyan-300 hover:to-blue-400 shadow-lg"
                >
                  <span>UPSSSC PET Series खोलें</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* UPPCS Prelims Card */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1424] to-[#070b16] p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-black text-cyan-300">
                    UPPCS PRELIMS
                  </span>
                  <span className="text-xs font-bold text-amber-300 tracking-wider">
                    1 TEST ACTIVE
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black group-hover:text-cyan-200">
                  UPPCS Prelims — Test 1
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-400">
                  उत्तर प्रदेश सम्मिलित राज्य/प्रवर अधीनस्थ सेवा परीक्षा की तैयारी के लिए full length practice test।
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">कुल प्रश्न</p>
                    <p className="mt-1 text-xs font-black text-white">150 Qs</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">समय सीमा</p>
                    <p className="mt-1 text-xs font-black text-white">120 मिनट</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <Link
                  href="/mock-tests/uppsc-prelims-test-1"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 py-4 text-xs font-black text-white transition hover:bg-cyan-400 hover:text-slate-950 border border-white/15"
                >
                  <span>UPPCS Test 1 स्टार्ट करें</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
