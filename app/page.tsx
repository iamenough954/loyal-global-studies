const exams = [
  ["UPSC", "Civil Services Examination"],
  ["UPPCS", "Uttar Pradesh PCS"],
  ["UP RO / ARO", "Review Officer Exams"],
  ["SUPER TET", "Teaching Eligibility"],
  ["TGT / PGT", "Teacher Recruitment"],
  ["CTET", "Central Teacher Eligibility"],
  ["BPSC", "Bihar Public Service Commission"],
  ["Global Studies", "Languages and International Learning"],
];

const features = [
  ["01", "Expert Faculty", "सीखें अनुभवी शिक्षकों के मार्गदर्शन में।"],
  ["02", "Mock Tests", "अभ्यास करें और अपनी तैयारी परखें।"],
  ["03", "Study Material", "अपनी पढ़ाई को व्यवस्थित और प्रभावी बनाएं।"],
  ["04", "Doubt Support", "अपनी शंकाओं के समाधान की दिशा में आगे बढ़ें।"],
];

const courses = [
  ["Live Batches", "शिक्षकों के साथ व्यवस्थित पढ़ाई", "/batches"],
  ["Mock Tests", "Free और Premium टेस्ट सीरीज़", "/mock-tests"],
  ["All Courses", "अपने लक्ष्य के अनुसार कोर्स चुनें", "/courses"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b16] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b16]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="text-lg font-black tracking-wide sm:text-2xl">
            <span className="text-cyan-400">LOYAL</span> GLOBAL STUDIES
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="/batches" className="hover:text-cyan-300">Batches</a>
            <a href="/mock-tests" className="hover:text-cyan-300">Mock Tests</a>
            <a href="/courses" className="hover:text-cyan-300">Courses</a>
            <a href="/results" className="hover:text-cyan-300">Results</a>
            <a href="/about" className="hover:text-cyan-300">About</a>
          </div>
          <a href="/login" className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-300">
            Login
          </a>
        </nav>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300 sm:text-sm">
              YOUR FUTURE STARTS HERE
            </span>
            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
              India&apos;s Global
              <span className="block text-cyan-400">Learning Platform</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              अपने सपनों को लक्ष्य बनाएं। प्रतियोगी परीक्षाओं, Mock Tests
              और Global Learning के साथ अपनी तैयारी को नई दिशा दें।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/batches" className="rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 hover:bg-cyan-300">
                Explore Batches →
              </a>
              <a href="/mock-tests" className="rounded-xl border border-white/20 px-6 py-4 font-bold hover:border-cyan-300 hover:text-cyan-300">
                Free Mock Test
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              हिंदी माध्यम · व्यवस्थित तैयारी · सीखने के नए अवसर
            </p>
          </div>

          <div className="relative rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/15 p-5 sm:p-8">
            <div className="rounded-2xl border border-white/10 bg-[#0b1120] p-6 sm:p-8">
              <p className="text-sm font-bold tracking-[0.2em] text-cyan-300">LEARN · PRACTICE · GROW</p>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">आज से शुरुआत करें।</h2>
              <p className="mt-4 leading-7 text-slate-400">
                सही दिशा, नियमित अभ्यास और निरंतर प्रयास से अपने लक्ष्य की ओर बढ़ें।
              </p>
              <div className="mt-7 space-y-3">
                {["अपना लक्ष्य चुनें", "अभ्यास और revision करें", "अपनी प्रगति बेहतर बनाएं"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/15 font-bold text-cyan-300">{i + 1}</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3">
          {[
            ["Learn", "अपनी गति से सीखें"],
            ["Practice", "नियमित अभ्यास करें"],
            ["Progress", "लक्ष्य की ओर बढ़ें"],
          ].map(([title, subtitle]) => (
            <div key={title} className="text-center">
              <p className="text-xl font-black text-cyan-300">{title}</p>
              <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-cyan-400">EXPLORE LEARNING</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">आपकी तैयारी, आपका लक्ष्य</h2>
          <p className="mt-4 leading-7 text-slate-400">अपनी जरूरत के अनुसार learning section चुनें।</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {courses.map(([title, desc, href]) => (
            <a key={title} href={href} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-black text-cyan-300">↗</div>
              <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-300">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
              <span className="mt-6 inline-block font-semibold text-cyan-300">Explore →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="exams" className="border-y border-white/10 bg-[#0a1020]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-bold tracking-widest text-cyan-400">EXAM PREPARATION</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Choose Your Exam</h2>
          <p className="mt-4 text-slate-400">अपने लक्ष्य के अनुसार परीक्षा चुनें।</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exams.map(([name, desc], i) => (
              <a key={name} href="/courses" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]">
                <span className="text-sm font-bold text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-bold">{name}</h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
                <p className="mt-5 text-sm font-semibold text-cyan-300">Explore →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-black sm:text-4xl">Why Choose LOYAL?</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          पढ़ाई को सरल, नियमित और लक्ष्य-केंद्रित बनाने के लिए उपयोगी सुविधाएं।
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([number, title, desc]) => (
            <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="text-sm font-bold text-cyan-300">{number}</span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-black">Your Journey. Your Success.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            अपनी learning journey शुरू करें और हर दिन अपने लक्ष्य के करीब पहुंचें।
          </p>
          <a href="/contact" className="mt-7 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 hover:bg-cyan-300">
            Contact / Enquiry →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="/" className="text-xl font-black"><span className="text-cyan-400">LOYAL</span> GLOBAL STUDIES</a>
            <p className="mt-2 text-sm text-slate-400">India&apos;s Global Learning Platform</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
            <a href="/about" className="hover:text-cyan-300">About</a>
            <a href="/results" className="hover:text-cyan-300">Results</a>
            <a href="/contact" className="hover:text-cyan-300">Contact</a>
            <a href="/privacy" className="hover:text-cyan-300">Privacy</a>
            <a href="/terms" className="hover:text-cyan-300">Terms</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LOYAL Global Studies. All rights reserved.
          <p className="mt-2 font-semibold">DEVELOPER BY ❤️ LOYAL JI ❤️</p>
        </div>
      </footer>
    </main>
  );
}
