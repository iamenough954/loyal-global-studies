"use client";

import Link from "next/link";

const petPyqSections = [
  { id: "pet-2024", year: "2024", title: "UPSSSC PET Official Paper 2024", subtitle: "Shift 1 & Shift 2 Combined PYQ", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2023", year: "2023", title: "UPSSSC PET Official Paper 2023", subtitle: "Shift 1 & Shift 2 Combined PYQ", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2022", year: "2022", title: "UPSSSC PET Official Paper 2022", subtitle: "Shift 1 & Shift 2 Combined PYQ", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2021", year: "2021", title: "UPSSSC PET Official Paper 2021", subtitle: "First Ever Official PET PYQ", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2020", year: "2020", title: "UPSSSC PET Model Paper 2020", subtitle: "Aayog Pattern Practice Set", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2019", year: "2019", title: "UPSSSC PET Practice Set 2019", subtitle: "Previous Year Based Series", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2018", year: "2018", title: "UPSSSC PET Practice Set 2018", subtitle: "Previous Year Based Series", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2017", year: "2017", title: "UPSSSC PET Practice Set 2017", subtitle: "Previous Year Based Series", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2016", year: "2016", title: "UPSSSC PET Practice Set 2016", subtitle: "Previous Year Based Series", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
  { id: "pet-2015", year: "2015", title: "UPSSSC PET Practice Set 2015", subtitle: "Foundation PYQ Series", qCount: 100, duration: "120 Mins", status: "AVAILABLE" },
];

export default function UpssscPetPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-16">
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/mock-tests" className="font-black tracking-wider text-cyan-300 hover:text-white transition text-xs sm:text-sm">
            ← BACK TO MOCK TESTS
          </Link>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-black text-cyan-200">
            10-YEARS PYQ SECTION (HINDI)
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> UPSSSC PET ARCHIVES (2015 - 2024)
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              10-Year UPSSSC PET <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-amber-300 bg-clip-text text-transparent">PYQ Sections</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              हर वर्ष के प्रश्न-पत्रों को अलग-अलग खंडों (Sections) में बांटा गया है। अपनी पसंद का वर्ष चुनें, परीक्षा जैसे माहौल में हल करें और उत्तर व्याख्या देखें।
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {petPyqSections.map((item) => (
            <article key={item.id} className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b2d] to-[#080e1b] p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-black text-cyan-300">
                    YEAR {item.year}
                  </span>
                  <span className="text-xs font-bold text-amber-300 tracking-wider">
                    Negative Marking: -0.25
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black group-hover:text-cyan-200">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-400">{item.subtitle}</p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Total Questions</p>
                    <p className="mt-1 text-base font-black text-white">{item.qCount} Qs</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Time Duration</p>
                    <p className="mt-1 text-base font-black text-white">{item.duration}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <Link
                  href={`/mock-tests/upsssc-pet/${item.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-xs font-black text-slate-950 transition hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-950/40"
                >
                  <span>Start {item.year} PYQ Exam</span>
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
