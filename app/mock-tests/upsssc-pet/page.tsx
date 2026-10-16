"use client";

import Link from "next/link";

const petTests = [
  { id: "2024-paper-1", title: "UPSSSC PET 2024 — Official Paper (Shift 1)", year: "2024", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2023-paper-1", title: "UPSSSC PET 2023 — Official Paper (Shift 1)", year: "2023", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2022-paper-1", title: "UPSSSC PET 2022 — Official Paper (Shift 1)", year: "2022", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2021-paper-1", title: "UPSSSC PET 2021 — Official Paper (Shift 1)", year: "2021", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2020-model-1", title: "UPSSSC PET Model Paper 2020 (Previous Pattern)", year: "2020", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2019-model-1", title: "UPSSSC PET Special Model Test 2019", year: "2019", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2018-model-1", title: "UPSSSC PET Practice Series 2018", year: "2018", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2017-model-1", title: "UPSSSC PET Practice Series 2017", year: "2017", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2016-model-1", title: "UPSSSC PET Practice Series 2016", year: "2016", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
  { id: "2015-model-1", title: "UPSSSC PET Practice Series 2015", year: "2015", qCount: 100, duration: "120 Mins", mark: "100 Marks", neg: "-0.25", status: "AVAILABLE" },
];

export default function UpssscPetPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30">
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/mock-tests" className="font-black tracking-wider text-cyan-300 hover:text-white transition">
            ← BACK TO MOCK TESTS
          </Link>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-black text-amber-300">
            HINDI MEDIUM EXAM ENGINE
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> UPSSSC PET 10-YEAR MOCK SERIES
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              UPSSSC PET <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-amber-300 bg-clip-text text-transparent">10-Year Test Series</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) PET परीक्षा के पिछले 10 वर्षों के हल प्रश्न-पत्र और मॉडल टेस्ट। परीक्षा समाप्ति के बाद खान ग्लोबल स्टडीज़ पैटर्न पर विस्तृत उत्तर व्याख्या (Detailed Explanations)।
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {petTests.map((test, idx) => (
            <article key={test.id} className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b2d] to-[#080e1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-300">
                    SET {idx + 1} · {test.year}
                  </span>
                  <span className="text-xs font-bold text-amber-300">
                    Negative Marking: {test.neg}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black group-hover:text-cyan-200">{test.title}</h3>
                
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2.5">
                    <p className="text-[10px] text-slate-400">Questions</p>
                    <p className="text-sm font-black text-white">{test.qCount}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2.5">
                    <p className="text-[10px] text-slate-400">Duration</p>
                    <p className="text-sm font-black text-white">{test.duration}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2.5">
                    <p className="text-[10px] text-slate-400">Total Marks</p>
                    <p className="text-sm font-black text-white">{test.mark}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4">
                <Link
                  href={`/mock-tests/upsssc-pet/${test.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-xs font-black text-slate-950 transition hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-950/40"
                >
                  <span>Start PET Test ({test.year})</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
