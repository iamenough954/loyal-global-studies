import Link from "next/link";

const courses = [
  {
    title: "Hindi Foundation",
    teacher: "Jitendra Soni Sir",
    description: "Hindi Foundation की classes और lecture series।",
    href: "/hindi-foundation",
    icon: "📚",
    label: "HINDI",
    category: "FOUNDATION COURSE",
    subjects: ["Hindi Grammar", "Lecture Series"],
    featured: false,
  },
  {
    title: "Math by Dhruv Sir",
    teacher: "Dhruv Sir",
    description: "UPSC और अन्य प्रतियोगी परीक्षाओं के लिए गणित की classes।",
    href: "/math-by-dhruv",
    icon: "∑",
    label: "MATHEMATICS",
    category: "SPECIAL CLASS",
    subjects: ["Mathematics", "Video Lectures"],
    featured: false,
  },
  {
    title: "UP TGT Science",
    teacher: "UDAAN Batch",
    description:
      "Physics, Biology, Computer, Geography और Chemistry की तैयारी एक ही batch में।",
    href: "/up-tgt-science",
    icon: "🔬",
    label: "UDAAN BATCH",
    category: "COMPLETE BATCH",
    subjects: ["Physics", "Biology", "Computer", "Geography", "Chemistry"],
    featured: true,
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#030b19] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-cyan-300 transition hover:text-white"
        >
          ← LOYAL GLOBAL STUDIES
        </Link>

        <section className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102849] via-[#07172b] to-[#030b19] p-7 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-black tracking-[0.3em] text-cyan-300 sm:text-sm">
              LEARN WITH LOYAL
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-6xl">
              Explore Your
              <span className="block text-cyan-300">Learning Journey</span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              अपनी परीक्षा और लक्ष्य के अनुसार course या batch चुनें।
              अपनी classes खोलें और तैयारी को अगले स्तर पर ले जाएँ।
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200">
                ✓ Video Lectures
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200">
                ✓ Subject-wise Learning
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200">
                ✓ Learn at Your Pace
              </span>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
              YOUR CLASSROOM
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Courses & Batches
            </h2>
          </div>

          <p className="text-sm text-slate-400">
            {courses.length} learning options
          </p>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.href}
              className={`group flex flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-[#0c203a] to-[#050d1a] transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                course.featured
                  ? "border-cyan-300/50 hover:shadow-cyan-950/40"
                  : "border-white/10 hover:border-cyan-300/40"
              }`}
            >
              <div className="relative flex min-h-40 items-center justify-between overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-900/10 p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/20 bg-[#07172b] text-5xl shadow-lg">
                  {course.icon}
                </div>

                <span className="relative max-w-[60%] rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-center text-[10px] font-black tracking-wider text-cyan-200 sm:text-xs">
                  {course.label}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-cyan-300">
                  {course.category}
                </p>

                <h3 className="mt-3 text-2xl font-black transition group-hover:text-cyan-300">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-400">
                  {course.teacher === "UDAAN Batch"
                    ? "UP TGT Science · UDAAN Batch"
                    : `By ${course.teacher}`}
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  {course.description}
                </p>

                <div className="mt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    What you will study
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={course.href}
                    className="flex w-full items-center justify-between rounded-xl border border-cyan-300/30 bg-cyan-400 px-5 py-4 font-black text-[#03101f] transition hover:bg-cyan-300"
                  >
                    <span>
                      {course.featured ? "Explore Batch" : "Explore Course"}
                    </span>
                    <span aria-hidden="true" className="text-xl">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 LOYAL Global Studies
          <p className="mt-2 font-bold">
            <span className="loyal-rainbow">
              DEVELOPER BY ❤️ LOYAL JI ❤️
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}
