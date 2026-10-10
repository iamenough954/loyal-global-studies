const subjects = [
  {
    title: "Physics",
    teacher: "Shubhankar Sir",
    icon: "⚛️",
    color: "border-sky-400/30",
    description: "भौतिक विज्ञान की तैयारी और lecture series।",
    lectures: [
      {
        title: "Orientation Class",
        url: "https://www.youtube.com/embed/v5m1FR_xAXw",
      },
      {
        title: "Lecture 01",
        url: "https://www.youtube.com/embed/Pxj6FHAPNI4",
      },
      {
        title: "Lecture 02",
        url: "https://www.youtube.com/embed/5cWkUraqL9Q",
      },
      {
        title: "Lecture 03",
        url: "https://www.youtube.com/embed/C_Z9Uq2aXzY",
      },
      {
        title: "Lecture 04",
        url: "https://www.youtube.com/embed/DEFA9_ILWyQ",
      },
      {
        title: "Lecture 05",
        url: "https://www.youtube.com/embed/kaOkCM_TpYk",
      },
      {
        title: "Lecture 06",
        url: "https://www.youtube.com/embed/tinIyzeJKAs",
      },
    ],
  },
  {
    title: "Biology",
    teacher: "Satpreet Ma'am",
    icon: "🧬",
    color: "border-green-400/30",
    description: "जीव विज्ञान की तैयारी और lecture series।",
  },
  {
    title: "Computer",
    teacher: "Sanjay Sir",
    icon: "💻",
    color: "border-violet-400/30",
    description: "कंप्यूटर विषय की तैयारी और lecture series।",
  },
  {
    title: "Geography",
    teacher: "Bhanu Sir",
    icon: "🌍",
    color: "border-amber-400/30",
    description: "भूगोल की तैयारी और lecture series।",
  },
  {
    title: "Chemistry",
    teacher: "Amit Sir",
    icon: "🧪",
    color: "border-pink-400/30",
    description: "रसायन विज्ञान की तैयारी और lecture series।",
  },
];

export default function UPTGTSciencePage() {
  return (
    <main className="min-h-screen bg-[#030b19] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="/courses" className="font-bold text-cyan-300">
          ← All Courses
        </a>

        <section className="mt-8 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#102849] via-[#07172b] to-[#030b19] p-7 sm:p-10">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-300">
            LOYAL GLOBAL STUDIES
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            UP TGT <span className="text-cyan-300">SCIENCE</span>
          </h1>

          <p className="mt-3 text-xl font-bold text-white">
            UDAAN BATCH
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            पाँच subjects, पाँच teachers — अपनी UP TGT Science की तैयारी
            एक ही जगह से शुरू करें।
          </p>

          <div className="mt-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            5 SUBJECTS · ONE BATCH
          </div>
        </section>

        <h2 className="mt-10 text-2xl font-black sm:text-3xl">
          Batch Subjects
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <section
              key={subject.title}
              className={`rounded-2xl border ${subject.color} bg-gradient-to-br from-[#0a1d35] to-[#061020] p-6`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">
                {subject.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black">
                {subject.title}
              </h3>

              <p className="mt-2 font-semibold text-cyan-300">
                By {subject.teacher}
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                {subject.description}
              </p>

              {subject.lectures ? (
                <div className="mt-6 space-y-6">
                  {subject.lectures.map((lecture) => (
                    <div
                      key={lecture.title}
                      className="overflow-hidden rounded-xl border border-sky-400/20 bg-black/30"
                    >
                      <h4 className="p-3 font-bold text-sky-200">
                        {lecture.title}
                      </h4>

                      <div className="aspect-video w-full">
                        <iframe
                          src={lecture.url}
                          title={`${subject.title} - ${lecture.title}`}
                          className="h-full w-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-slate-400">
                  Lectures will appear here after they are added.
                </div>
              )}
            </section>
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
