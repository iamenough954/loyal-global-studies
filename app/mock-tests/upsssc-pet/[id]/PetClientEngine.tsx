"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Question {
  id: number;
  section: string;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const petSampleQuestions: Question[] = [
  {
    id: 1,
    section: "भारतीय इतिहास (Indian History)",
    question: "सिंधु घाटी सभ्यता के निम्नलिखित में से किस स्थल से 'गोदीवाला' (Dockyard) का साक्ष्य मिला है?",
    options: [
      { key: "a", text: "कालीबंगा" },
      { key: "b", text: "लोथल" },
      { key: "c", text: "हड़प्पा" },
      { key: "d", text: "मोहनजोदड़ो" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: लोथल (गुजरात) में भोगवा नदी के तट पर स्थित सिंधु घाटी सभ्यता का एक प्रमुख बंदरगाह (Dockyard) था, जहाँ से गोदीवाला के साक्ष्य मिले हैं।"
  },
  {
    id: 2,
    section: "भारतीय राष्ट्रीय आंदोलन (National Movement)",
    question: "महात्मा गांधी ने किस वर्ष और किस घटना के बाद असहयोग आंदोलन को वापस ले लिया था?",
    options: [
      { key: "a", text: "1922 — चौरी-चौरा कांड" },
      { key: "b", text: "1919 — जलियांवाला बाग हत्याकांड" },
      { key: "c", text: "1930 — दांडी मार्च" },
      { key: "d", text: "1928 — साइमन कमीशन का विरोध" }
    ],
    correctAnswer: "a",
    explanation: "व्याख्या: 5 फरवरी 1922 को गोरखपुर (उत्तर प्रदेश) में चौरी-चौरा की हिंसक घटना से आहत होकर महात्मा गांधी ने 12 फरवरी 1922 को असहयोग आंदोलन वापस ले लिया था।"
  },
  {
    id: 3,
    section: "भूगोल (Geography)",
    question: "भारत का कौन सा राज्य क्षेत्रफल की दृष्टि से सबसे बड़ा है?",
    options: [
      { key: "a", text: "मध्य प्रदेश" },
      { key: "b", text: "उत्तर प्रदेश" },
      { key: "c", text: "राजस्थान" },
      { key: "d", text: "महाराष्ट्र" }
    ],
    correctAnswer: "c",
    explanation: "व्याख्या: क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य राजस्थान है, इसके बाद मध्य प्रदेश और महाराष्ट्र का स्थान आता है।"
  },
  {
    id: 4,
    section: "भारतीय अर्थव्यवस्था (Indian Economy)",
    question: "भारतीय अर्थव्यवस्था में 'हरित क्रांति' (Green Revolution) के जनक के रूप में किसे जाना जाता है?",
    options: [
      { key: "a", text: "डॉ. वर्गीज कुरियन" },
      { key: "b", text: "एम. एस. स्वामीनाथन" },
      { key: "c", text: "नॉर्मन बोरलॉग" },
      { key: "d", text: "सैम पित्रोदा" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: भारत में हरित क्रांति के जनक प्रो. एम. एस. स्वामीनाथन हैं, जबकि विश्व स्तर पर डॉ. नॉर्मन बोरलॉग को माना जाता है।"
  },
  {
    id: 5,
    section: "भारतीय संविधान एवं लोक प्रशासन (Polity)",
    question: "भारतीय संविधान के किस अनुच्छेद के अंतर्गत 'ग्राम पंचायतों के संगठन' का प्रावधान किया गया है?",
    options: [
      { key: "a", text: "अनुच्छेद 36" },
      { key: "b", text: "अनुच्छेद 40" },
      { key: "c", text: "अनुच्छेद 45" },
      { key: "d", text: "अनुच्छेद 51" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: भारतीय संविधान के भाग-IV में नीति निर्देशक तत्वों के अंतर्गत अनुच्छेद 40 ग्राम पंचायतों के संगठन से संबंधित है।"
  },
  {
    id: 6,
    section: "सामान्य विज्ञान (General Science)",
    question: "मानव शरीर की सबसे बड़ी ग्रंथि (Gland) निम्नलिखित में से कौन सी है?",
    options: [
      { key: "a", text: "अग्नाशय (Pancreas)" },
      { key: "b", text: "यकृत (Liver)" },
      { key: "c", text: "थायराइड (Thyroid)" },
      { key: "d", text: "पीयूष ग्रंथि (Pituitary)" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: यकृत (Liver) मानव शरीर की सबसे बड़ी आंतरिक ग्रंथि है, जो पित्त (Bile) का स्राव करती है।"
  },
  {
    id: 7,
    section: "सामान्य जागरूकता (General Awareness)",
    question: "उत्तर प्रदेश का राजकीय लोक नृत्य निम्नलिखित में से कौन सा है?",
    options: [
      { key: "a", text: "कथक और नौरा" },
      { key: "b", text: "रासलीला, नौटंकी और चरकुला" },
      { key: "c", text: "बिहू" },
      { key: "d", text: "भांगड़ा" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: नौटंकी, रासलीला, चरकुला और कजरी उत्तर प्रदेश के प्रमुख लोक नृत्य एवं कला रूप हैं।"
  },
  {
    id: 8,
    section: "प्रारंभिक अंकगणित (Elementary Arithmetic)",
    question: "यदि किसी संख्या का 40%, 200 है, तो वह संख्या क्या होगी?",
    options: [
      { key: "a", text: "400" },
      { key: "b", text: "500" },
      { key: "c", text: "600" },
      { key: "d", text: "800" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: माना संख्या x है।\n(x * 40) / 100 = 200\nx = (200 * 100) / 40 = 500।"
  },
  {
    id: 9,
    section: "सामान्य हिंदी (General Hindi)",
    question: "'सूर्योदय' शब्द का सही संधि-विच्छेद क्या होगा?",
    options: [
      { key: "a", text: "सूर्य + उदय" },
      { key: "b", text: "सूर्यो + दय" },
      { key: "c", text: "सूर + उदय" },
      { key: "d", text: "सूर्य + दय" }
    ],
    correctAnswer: "a",
    explanation: "व्याख्या: 'सूर्योदय' का संधि-विच्छेद 'सूर्य + उदय' है। इसमें गुण स्वर संधि (अ/आ + उ = ओ) लागू होती है।"
  },
  {
    id: 10,
    section: "करेंट अफेयर्स (Current Affairs)",
    question: "अंतर्राष्ट्रीय योग दिवस प्रतिवर्ष किस तिथि को मनाया जाता है?",
    options: [
      { key: "a", text: "5 जून" },
      { key: "b", text: "21 जून" },
      { key: "c", text: "11 जुलाई" },
      { key: "d", text: "15 अगस्त" }
    ],
    correctAnswer: "b",
    explanation: "व्याख्या: संपूर्ण विश्व में प्रतिवर्ष 21 जून को 'अंतर्राष्ट्रीय योग दिवस' मनाया जाता है, जिसकी शुरुआत संयुक्त राष्ट्र द्वारा 2015 में की गई थी।"
  }
];

export default function PetClientEngine({ testId }: { testId: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(7200);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [mounted, isSubmitted, timeLeft]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#070b16] text-white flex items-center justify-center font-bold">
        Loading UPSSSC PET ({testId.toUpperCase()}) Portal...
      </div>
    );
  }

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    petSampleQuestions.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns) {
        if (userAns === q.correctAnswer) correct++;
        else incorrect++;
      }
    });
    const marks = correct * 1.0 - incorrect * 0.25;
    return { correct, incorrect, unattempted: petSampleQuestions.length - (correct + incorrect), score: marks.toFixed(2) };
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const q = petSampleQuestions[currentIdx];
  const results = calculateScore();

  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-12">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b16]/90 backdrop-blur-xl px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/mock-tests/upsssc-pet" className="text-xs font-bold text-cyan-300 hover:text-white sm:text-sm">
            ← Exit Test
          </Link>
          <div className="text-center">
            <h1 className="text-sm font-black tracking-wider sm:text-lg">UPSSSC PET ({testId.toUpperCase()})</h1>
            <p className="text-[10px] text-slate-400 sm:text-xs">10 Years PYQ & Practice Portal</p>
          </div>
          {!isSubmitted ? (
            <div className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-black text-cyan-200 sm:text-sm">
              ⏱ {formatTime(timeLeft)}
            </div>
          ) : (
            <span className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-black text-emerald-300">
              Completed
            </span>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-8">
        {!isSubmitted ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e172a] to-[#080d19] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-cyan-400/20 px-3 py-1 text-xs font-black text-cyan-300">
                  Question {currentIdx + 1} of {petSampleQuestions.length}
                </span>
                <span className="text-xs font-bold text-amber-300 tracking-wider">
                  {q.section}
                </span>
              </div>

              <div className="mt-6 text-base sm:text-lg font-semibold text-slate-100 whitespace-pre-line">
                {q.question}
              </div>

              <div className="mt-8 space-y-3">
                {q.options.map((opt) => {
                  const isSelected = userAnswers[q.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: opt.key }))}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-400/20 text-white font-bold shadow-lg"
                          : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-400/40"
                      }`}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs ${isSelected ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-300"}`}>
                        {opt.key.toUpperCase()}
                      </span>
                      <span className="text-sm sm:text-base">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => prev - 1)}
                  className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold text-slate-300 disabled:opacity-30"
                >
                  ← Previous
                </button>
                {currentIdx < petSampleQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => prev + 1)}
                    className="rounded-xl bg-cyan-400 px-6 py-2.5 text-xs font-black text-slate-950 hover:bg-cyan-300"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-2.5 text-xs font-black text-slate-950 hover:from-emerald-300"
                  >
                    Submit Test ✦
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 shadow-xl h-fit">
              <h3 className="font-black text-sm tracking-wider text-cyan-300 uppercase">Question Palette</h3>
              <div className="mt-4 grid grid-cols-5 gap-2.5">
                {petSampleQuestions.map((quest, i) => (
                  <button
                    key={quest.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`flex h-11 items-center justify-center rounded-xl border text-xs font-bold transition ${
                      currentIdx === i
                        ? "border-cyan-400 bg-cyan-400 text-slate-950 font-black"
                        : userAnswers[quest.id]
                        ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                        : "border-white/10 bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsSubmitted(true)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-xs font-black text-slate-950 shadow-lg"
              >
                Submit Exam
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 p-6 sm:p-10 shadow-2xl">
              <h2 className="text-3xl font-black sm:text-5xl">UPSSSC PET Score Summary</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Correct</p>
                  <p className="mt-2 text-3xl font-black text-emerald-400">{results.correct}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Incorrect</p>
                  <p className="mt-2 text-3xl font-black text-rose-400">{results.incorrect}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Unattempted</p>
                  <p className="mt-2 text-3xl font-black text-slate-400">{results.unattempted}</p>
                </div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <p className="text-xs text-cyan-300">Marks (-0.25 Neg)</p>
                  <p className="mt-2 text-3xl font-black text-cyan-200">{results.score}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-black text-cyan-300">Detailed Explanations (उत्तर व्याख्या)</h3>
              <div className="mt-6 space-y-6">
                {petSampleQuestions.map((item, idx) => {
                  const userAns = userAnswers[item.id];
                  const isCorrect = userAns === item.correctAnswer;
                  return (
                    <article key={item.id} className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-cyan-300">Question {idx + 1} ({item.section})</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-lg ${isCorrect ? "bg-emerald-400/20 text-emerald-300" : userAns ? "bg-rose-400/20 text-rose-300" : "bg-slate-500/20 text-slate-400"}`}>
                          {isCorrect ? "✓ Correct" : userAns ? "✗ Incorrect" : "● Unattempted"}
                        </span>
                      </div>
                      <p className="mt-3 font-semibold text-lg whitespace-pre-line">{item.question}</p>
                      <div className="mt-4 flex gap-4 text-sm font-bold">
                        <span className="text-slate-400">Your Answer: <span className={isCorrect ? "text-emerald-400" : "text-rose-400"}>{userAns ? userAns.toUpperCase() : "None"}</span></span>
                        <span className="text-emerald-400">Correct: <span className="underline">{item.correctAnswer.toUpperCase()}</span></span>
                      </div>
                      <div className="mt-4 rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06] p-5">
                        <p className="text-xs font-black text-cyan-300 uppercase">💡 Vyaakhya / Explanation:</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-200 whitespace-pre-line">{item.explanation}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
