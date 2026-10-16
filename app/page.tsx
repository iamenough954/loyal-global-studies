const exams = [
  { name: "UPSC", desc: "Civil Services Examination", icon: "🏛️", tag: "CIVIL SERVICES", href: "/upsc" },
  { name: "UPPCS", desc: "Uttar Pradesh PCS", icon: "📚", tag: "STATE PCS", href: "/courses" },
  { name: "UP RO / ARO", desc: "Review Officer Exams", icon: "📝", tag: "STATE EXAMS", href: "/courses" },
  { name: "SUPER TET", desc: "Teaching Eligibility", icon: "🎓", tag: "TEACHING", href: "/courses" },
  { name: "TGT / PGT", desc: "Teacher Recruitment", icon: "✏️", tag: "TEACHING", href: "/up-tgt-science" },
  { name: "CTET", desc: "Central Teacher Eligibility", icon: "📖", tag: "TEACHING", href: "/courses" },
  { name: "BPSC", desc: "Bihar Public Service Commission", icon: "🇮🇳", tag: "STATE PCS", href: "/courses" },
  { name: "Global Studies", desc: "Languages and International Learning", icon: "🌐", tag: "GLOBAL LEARNING", href: "/courses" },
];

const courses = [
  { title: "Live Batches", desc: "शिक्षकों के साथ व्यवस्थित पढ़ाई और नियमित मार्गदर्शन।", href: "/batches", icon: "▣", color: "from-violet-500/20 to-indigo-500/5" },
  { title: "Mock Tests", desc: "अपनी तैयारी परखें, अभ्यास करें और बेहतर रणनीति बनाएं।", href: "/mock-tests", icon: "◈", color: "from-amber-500/20 to-orange-500/5" },
  { title: "All Courses", desc: "अपने लक्ष्य और जरूरत के अनुसार कोर्स चुनें।", href: "/courses", icon: "✦", color: "from-cyan-500/20 to-blue-500/5" },
];

const features = [
  { no: "01", title: "Expert Guidance", desc: "अपनी तैयारी को सही दिशा देने के लिए व्यवस्थित learning resources।", icon: "✧" },
  { no: "02", title: "Mock Tests", desc: "नियमित अभ्यास से अपनी तैयारी और प्रदर्शन को समझें।", icon: "◈" },
  { no: "03", title: "Study Resources", desc: "अपनी पढ़ाई को व्यवस्थित और लक्ष्य-केंद्रित बनाएं।", icon: "▤" },
  { no: "04", title: "Learn at Your Pace", desc: "अपनी जरूरत और समय के अनुसार सीखने के अवसर।", icon: "↗" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white selection:bg-violet-500/30">
      <div className="border-b border-white/[0.07] bg-[#0c1020] px-4 py-2 text-center text-xs tracking-wide text-slate-300 sm:text-sm">
        <span className="mr-2 text-amber-300">✦</span>
        आपकी तैयारी, आपका लक्ष्य — LOYAL Global Studies के साथ
      </div>

      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#080b14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-black shadow-lg shadow-violet-950/40">L</span>
            <span>
              <span className="block text-base font-black tracking-[0.08em] sm:text-lg">LOYAL</span>
              <span className="block text-[9px] font-semibold tracking-[0.19em] text-slate-400 sm:text-[10px]">GLOBAL STUDIES</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            <a href="/courses" className="transition hover:text-violet-300">Courses</a>
            <a href="/batches" className="transition hover:text-violet-300">Live Batches</a>
            <a href="/mock-tests" className="transition hover:text-violet-300">Mock Tests</a>
            <a href="#exams" className="transition hover:text-violet-300">Exams</a>
          </div>

          <div className="flex items-center gap-2">
            <a href="/math-quiz" className="hidden rounded-xl border border-white/10 px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/50 sm:inline-flex">🎮 Game</a>
            <a href="/profile" className="hidden rounded-xl border border-white/10 px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/50 sm:inline-flex">Profile</a>
            <a href="/login" className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100">Login ↗</a>
          </div>
        </nav>
        <div className="flex gap-5 overflow-x-auto border-t border-white/[0.05] px-5 py-3 text-xs font-medium text-slate-300 lg:hidden">
          <a className="whitespace-nowrap" href="/courses">Courses</a>
          <a className="whitespace-nowrap" href="/batches">Live Batches</a>
          <a className="whitespace-nowrap" href="/mock-tests">Mock Tests</a>
          <a className="whitespace-nowrap" href="#exams">Exams</a>
          <a className="whitespace-nowrap" href="/profile">Profile</a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-2 text-xs font-bold tracking-[0.13em] text-violet-200 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              LEARN · PRACTICE · ACHIEVE
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Your ambition.
              <span className="mt-2 block bg-gradient-to-r from-violet-300 via-indigo-300 to-amber-200 bg-clip-text text-transparent">
                Your future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              अपने सपनों को स्पष्ट लक्ष्य दें। प्रतियोगी परीक्षाओं, Mock Tests और Global Learning के साथ अपनी तैयारी को एक नई दिशा दें।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/courses" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 text-sm font-bold shadow-xl shadow-violet-950/40 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 sm:text-base">
                Explore Courses <span>→</span>
              </a>
              <a href="/mock-tests" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-bold transition hover:border-violet-300/50 hover:bg-white/[0.06] sm:text-base">
                Take a Mock Test
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="text-amber-300">✓</span> हिंदी माध्यम</span>
              <span className="flex items-center gap-2"><span className="text-amber-300">✓</span> Exam-focused learning</span>
              <span className="flex items-center gap-2"><span className="text-amber-300">✓</span> Practice resources</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-amber-400/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101526] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-violet-300">YOUR LEARNING SPACE</p>
                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">आज से शुरुआत करें।</h2>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-2xl text-amber-200">✦</span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm leading-7 text-slate-400">छोटे-छोटे कदम, नियमित अभ्यास और स्पष्ट लक्ष्य—अपनी तैयारी को व्यवस्थित बनाएं।</p>
                <div className="mt-6 space-y-3">
                  {[
                    ["01", "Choose your goal", "अपनी परीक्षा और कोर्स चुनें"],
                    ["02", "Practice consistently", "Mock Tests और revision करें"],
                    ["03", "Track your progress", "अपनी तैयारी की समीक्षा करें"],
                  ].map(([n, title, desc]) => (
                    <div key={n} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-violet-400/30">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-sm font-black text-violet-200">{n}</span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold sm:text-base">{title}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">{desc}</span>
                      </span>
                      <span className="ml-auto text-lg text-slate-500">↗</span>
                    </div>
                  ))}
                </div>
                <a href="/batches" className="mt-5 flex w-full items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 py-3.5 text-sm font-bold text-violet-200 transition hover:bg-violet-500/20">
                  Explore Learning Options →
                </a>
              </div>
              <div className="h-1 bg-gradient-to-r from-violet-500 via-indigo-400 to-amber-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:py-8">
          {[
            ["01", "Learn", "समझ के साथ सीखें"],
            ["02", "Practice", "नियमित अभ्यास करें"],
            ["03", "Improve", "अपनी तैयारी को बेहतर बनाएं"],
          ].map(([n, title, desc]) => (
            <div key={n} className="flex items-center gap-4 rounded-xl px-3 py-2 sm:justify-center">
              <span className="text-sm font-black tracking-widest text-amber-300">{n}</span>
              <span>
                <span className="block font-bold">{title}</span>
                <span className="mt-1 block text-xs text-slate-400 sm:text-sm">{desc}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300 sm:text-sm">LEARNING PROGRAMS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Learn with purpose.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">अपनी जरूरत और लक्ष्य के अनुसार सही learning section चुनें।</p>
          </div>
          <a href="/courses" className="text-sm font-bold text-violet-300 transition hover:text-violet-200">View all courses →</a>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {courses.map((course) => (
            <a key={course.title} href={course.href} className={`group rounded-2xl border border-white/[0.09] bg-gradient-to-br ${course.color} p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 sm:p-7`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0b1020]/70 text-2xl text-violet-200">{course.icon}</span>
              <h3 className="mt-6 text-xl font-bold transition group-hover:text-violet-200">{course.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{course.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-300">Explore section <span className="transition group-hover:translate-x-1">→</span></span>
            </a>
          ))}
        </div>
      </section>

      <section id="exams" className="border-y border-white/[0.07] bg-[#0c1020]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-300 sm:text-sm">EXAM PREPARATION</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Choose your destination.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">अपने लक्ष्य के अनुसार परीक्षा चुनें और अपनी तैयारी की शुरुआत करें।</p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exams.map((exam, i) => (
              <a key={exam.name} href={exam.href} className="group rounded-2xl border border-white/[0.08] bg-[#111728] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-[#151b30]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.035] text-2xl">{exam.icon}</span>
                  <span className="text-xs font-bold tracking-widest text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-5 text-[10px] font-bold tracking-[0.15em] text-violet-300">{exam.tag}</p>
                <h3 className="mt-2 text-lg font-bold transition group-hover:text-violet-200">{exam.name}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-400">{exam.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 text-sm">
                  <span className="font-semibold text-slate-300">Explore</span>
                  <span className="text-violet-300 transition group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-violet-300 sm:text-sm">THE LOYAL APPROACH</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Built around your goals.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">सीखने, अभ्यास करने और अपनी तैयारी को व्यवस्थित बनाने के लिए जरूरी सुविधाएं एक जगह।</p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.no} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-violet-400/25">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-200">{feature.icon}</span>
                <span className="text-xs font-bold tracking-widest text-slate-600">{feature.no}</span>
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-[#171432] via-[#11162b] to-[#10192a] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-300 sm:text-sm">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Turn your goals into a plan.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">अपना लक्ष्य चुनें, नियमित अभ्यास करें और हर दिन अपनी तैयारी को आगे बढ़ाएं।</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/courses" className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100">Start Learning →</a>
              <a href="/contact" className="rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.06]">Contact / Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#060810]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-2">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 font-black">L</span>
              <span>
                <span className="block font-black tracking-wider">LOYAL</span>
                <span className="block text-[9px] tracking-[0.18em] text-slate-400">GLOBAL STUDIES</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">India&apos;s Global Learning Platform — प्रतियोगी परीक्षाओं और global learning के लिए एक व्यवस्थित learning space.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold">Explore</p>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <a className="block hover:text-violet-300" href="/courses">Courses</a>
                <a className="block hover:text-violet-300" href="/batches">Batches</a>
                <a className="block hover:text-violet-300" href="/mock-tests">Mock Tests</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Support</p>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <a className="block hover:text-violet-300" href="/about">About</a>
                <a className="block hover:text-violet-300" href="/contact">Contact</a>
                <a className="block hover:text-violet-300" href="/profile">Profile</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Policies</p>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <a className="block hover:text-violet-300" href="/privacy">Privacy</a>
                <a className="block hover:text-violet-300" href="/terms">Terms</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.07] px-5 py-5 text-center text-xs text-slate-500">
          © 2026 LOYAL Global Studies. All rights reserved.
          <p className="mt-2 text-slate-400 font-bold">Designed with care by LOYAL JI</p>
        </div>
      </footer>
    </main>
  );
}
