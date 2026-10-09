export default function UPSCPage() {
  return (
    <main className="min-h-screen bg-[#070b16] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-bold text-cyan-300">
          ← LOYAL GLOBAL STUDIES
        </a>

        <p className="mt-8 text-sm font-bold tracking-[0.25em] text-cyan-300">
          CIVIL SERVICES EXAMINATION
        </p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          UPSC <span className="text-cyan-300">CLASSES</span>
        </h1>

        <p className="mt-4 text-slate-400">
          UPSC Prelims और Mains की तैयारी के लिए आपका learning section।
        </p>

        <div className="mt-10 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-900/20 p-6 sm:p-8">
          <div className="text-4xl">📚</div>
          <h2 className="mt-5 text-2xl font-black">UPSC Learning Center</h2>
          <p className="mt-3 leading-7 text-slate-300">
            यहाँ UPSC की classes, lectures और study material क्रम से जोड़े जाएंगे।
          </p>
          <p className="mt-4 text-sm text-slate-400">
            अभी UPSC के lecture links जोड़ना बाकी है।
          </p>
        </div>

        <section className="mt-8">
          <h2 className="mb-5 text-2xl font-black">
            UPSC <span className="text-cyan-300">Batches</span>
          </h2>

          <a
            href="/math-by-dhruv"
            className="group block rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0b2340] to-[#07101f] p-6 transition hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/40 sm:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-300">
                ∑
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest text-cyan-300">
                  MATHEMATICS BATCH
                </p>
                <h3 className="mt-2 text-2xl font-black group-hover:text-cyan-300">
                  Math by Dhruv Sir
                </h3>
                <p className="mt-2 text-slate-400">
                  गणित की video classes · 5 Lectures
                </p>
              </div>
              <span className="text-xl text-cyan-300">→</span>
            </div>
            <p className="mt-5 font-bold text-cyan-300">
              Open Batch →
            </p>
          </a>
        </section>

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
