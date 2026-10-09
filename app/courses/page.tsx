export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#070b16] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-bold text-cyan-300">
          ← LOYAL GLOBAL STUDIES
        </a>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          Learn • Practice • Succeed
        </p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          All <span className="text-cyan-300">Courses</span>
        </h1>

        <p className="mt-4 text-slate-400">
          अपने लक्ष्य के अनुसार कोर्स चुनें और पढ़ाई शुरू करें।
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/hindi-foundation"
            className="group rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-900/20 p-6 transition hover:-translate-y-1 hover:border-cyan-300"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-3xl">
              📚
            </div>

            <p className="mt-5 text-xs font-bold tracking-widest text-cyan-300">
              FOUNDATION COURSE
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Hindi Foundation
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              By Jitendra Soni Sir
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Lecture 01 और Lecture 02 उपलब्ध हैं।
            </p>

            <div className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 group-hover:bg-cyan-300">
              Start Learning →
            </div>
          </a>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 LOYAL Global Studies
          <p className="mt-2 font-bold">
            <span className="loyal-rainbow">DEVELOPER BY ❤️ LOYAL JI ❤️</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
