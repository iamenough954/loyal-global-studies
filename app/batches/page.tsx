import Link from "next/link";

const batches = [
  {
    title: "UPSC Foundation",
    teacher: "LOYAL Faculty",
    icon: "🏛️",
    category: "CIVIL SERVICES",
    description: "UPSC Prelims और Mains की व्यवस्थित तैयारी — देश के शीर्ष शिक्षकों के मार्गदर्शन में।",
    subjects: ["General Studies", "Prelims", "Mains", "Answer Writing"],
    href: "/login",
    status: "LOCKED",
    badgeColor: "from-amber-500/20 to-orange-500/5",
  },
  {
    title: "UP TGT Science",
    teacher: "UDAAN Batch",
    icon: "🔬",
    category: "COMPLETE BATCH",
    description: "Science subjects की comprehensive classes, lecture series aur practice sets।",
    subjects: ["Physics", "Biology", "Computer", "Geography", "Chemistry"],
    href: "/up-tgt-science",
    status: "OPEN",
    badgeColor: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Math by Dhruv Sir",
    teacher: "Dhruv Sir",
    icon: "∑",
    category: "MATHEMATICS",
    description: "गणित के हर कॉन्सेप्ट को आसान बनाने वाली video lectures और short tricks।",
    subjects: ["Mathematics", "Video Lectures", "Shortcut Methods"],
    href: "/math-by-dhruv",
    status: "OPEN",
    badgeColor: "from-violet-500/20 to-indigo-500/5",
  },
  {
    title: "Hindi Foundation",
    teacher: "Jitendra Soni Sir",
    icon: "📚",
    category: "FREE COURSE",
    description: "Hindi Foundation की free classes और vyakaran lecture series — परीक्षा के लिए अचूक।",
    subjects: ["Hindi Grammar", "Lecture Series", "Practice Tests"],
    href: "/hindi-foundation",
    status: "FREE",
    badgeColor: "from-emerald-500/20 to-teal-500/5",
  },
];

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-2 text-sm font-black tracking-wider text-cyan-300 transition hover:text-white">
            <span className="transition group-hover:-translate-x-1">←</span> LOYAL GLOBAL STUDIES
          </Link>
          <Link
            href="/courses"
            className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-bold text-slate-300 backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            All Courses →
          </Link>
        </header>

        <section className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-[#0f233c] via-[#091528] to-[#060a14] p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> LIVE & RECORDED CLASSES
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Explore Our <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Batches</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              अपना लक्ष्य चुनें, batch खोलें और भारत के बेहतरीन मार्गदर्शन के साथ अपनी तैयारी को नई ऊँचाइयाँ दें।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Subject-wise Classes", "Recorded Lectures", "Expert Faculty", "24/7 Learning Support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-200 backdrop-blur-sm">
                  <span className="text-cyan-400">✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black tracking-[0.25em] text-cyan-300">SELECT YOUR PROGRAM</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Available Batches</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-bold text-slate-400">
              {batches.length} Active Programs
            </span>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
            {batches.map((batch) => (
              <article
                key={batch.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b2d] to-[#080e1b] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-950/50"
              >
                <div className={`flex items-center justify-between border-b border-white/10 bg-gradient-to-br ${batch.badgeColor} p-6 sm:p-8`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#070e1a] text-3xl shadow-lg sm:h-20 sm:w-20 sm:text-4xl">
                      {batch.icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] text-cyan-300">{batch.category}</p>
                      <h3 className="mt-1 text-xl font-black tracking-tight sm:text-2xl group-hover:text-cyan-200">{batch.title}</h3>
                      <p className="mt-0.5 text-xs font-semibold text-slate-300">Educator: {batch.teacher}</p>
                    </div>
                  </div>
                  <span className={`rounded-full border px-3.5 py-1.5 text-xs font-black tracking-wider ${
                    batch.status === "FREE"
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                      : batch.status === "LOCKED"
                      ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
                      : "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                  }`}>
                    {batch.status === "LOCKED" ? "🔒 LOCKED" : batch.status === "FREE" ? "✦ FREE" : "● OPEN"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="leading-7 text-slate-300 text-sm sm:text-base">{batch.description}</p>
                  
                  <div className="mt-6">
                    <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Included Subjects & Features:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {batch.subjects.map((subject) => (
                        <span key={subject} className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-slate-200">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                      href={batch.href}
                      className={`flex w-full items-center justify-between rounded-2xl px-6 py-4 font-black transition duration-300 shadow-lg ${
                        batch.status === "LOCKED"
                          ? "border border-amber-400/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20"
                          : "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#03101f] hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-500/25"
                      }`}
                    >
                      <span>{batch.status === "LOCKED" ? "Login to Unlock Batch" : batch.status === "FREE" ? "Start Free Course Now" : "Explore Batch & Classes"}</span>
                      <span aria-hidden="true" className="text-xl transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 LOYAL Global Studies. All rights reserved.
          <p className="mt-2 font-black tracking-widest text-cyan-300">
            DESIGNED WITH ❤️ BY LOYAL JI
          </p>
        </footer>
      </div>
    </main>
  );
}
