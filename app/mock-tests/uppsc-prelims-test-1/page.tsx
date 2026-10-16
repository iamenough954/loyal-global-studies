"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  statements?: string[];
  subQuestion?: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const questionsData: Question[] = [
  {
    id: 1,
    question: "मूल अधिकारों के ऐतिहासिक विकास के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:",
    statements: [
      "(1) ब्रिटिश सम्राट 'जान' द्वारा 1215 ई. में हस्ताक्षरित अधिकार पत्र (Magna Carta) मूल अधिकार संबंधी प्रथम लिखित दस्तावेज है।",
      "(2) फ्रांस में 1789 ई. में मानव एवं नागरिकों के अधिकार घोषणा-पत्र द्वारा जनता को मूलभूत अधिकार प्रदान किए गए थे।",
      "(3) अमेरिका के मूल संविधान में मौलिक अधिकारों का विस्तृत उल्लेख शुरुआत से ही शामिल था।"
    ],
    subQuestion: "उपरोक्त कथनों में से कौन-सा/से सही है/हैं?",
    options: [
      { key: "a", text: "केवल 1 और 2" },
      { key: "b", text: "केवल 2 और 3" },
      { key: "c", text: "केवल 3" },
      { key: "d", text: "1, 2 और 3" }
    ],
    correctAnswer: "a",
    explanation: "कथन 3 गलत है क्योंकि अमेरिका के मूल संविधान में मौलिक अधिकारों का उल्लेख नहीं था; इसे 1791 में अमेरिकी संविधान में संशोधनों द्वारा 'बिल ऑफ राइट्स' के रूप में जोड़ा गया था।"
  },
  {
    id: 2,
    question: "भारतीय संविधान में मूल अधिकारों की माँग के इतिहास के संबंध में निम्नलिखित कथनों पर विचार कीजिए:",
    statements: [
      "(1) भारत में मूल अधिकारों की माँग सर्वप्रथम संविधान विधेयक 1895 के माध्यम से की गई थी।",
      "(2) मोती लाल नेहरू ने 1928 ई. में 'नेहरू रिपोर्ट' के माध्यम से मूल अधिकारों की माँग रखी थी।",
      "(3) वर्ष 1935 के भारत शासन अधिनियम में भारतीयों के लिए मूल अधिकारों को शामिल कर लिया गया था।"
    ],
    subQuestion: "उपरोक्त कथनों में से कौन-सा/से सही है/हैं?",
    options: [
      { key: "a", text: "केवल 1 और 3" },
      { key: "b", text: "केवल 1 और 2" },
      { key: "c", text: "केवल 2 और 3" },
      { key: "d", text: "1, 2 और 3" }
    ],
    correctAnswer: "b",
    explanation: "भारत में सर्वप्रथम मूल अधिकारों की माँग 1895 के संविधान विधेयक द्वारा की गई और 1928 में नेहरू रिपोर्ट में भी इसे दोहराया गया। कथन 3 गलत है क्योंकि 1934 में संयुक्त संसदीय समिति ने इस माँग को अस्वीकार कर दिया था, जिसके कारण 1935 के भारत शासन अधिनियम में इसे शामिल नहीं किया गया था।"
  },
  {
    id: 3,
    question: "भारतीय संविधान के अनुच्छेद 12 के तहत 'राज्य' की परिभाषा के संदर्भ में निम्नलिखित में से कौन-से निकाय 'राज्य' के अंतर्गत शामिल हैं?",
    statements: [
      "(1) भारत की सरकार एवं संसद",
      "(2) राष्ट्रीय शैक्षिक एवं अनुसंधान परिषद (NCERT)",
      "(3) भारतीय सांख्यिकी संगठन (ISO)",
      "(4) भारतीय क्रिकेट नियंत्रण बोर्ड (BCCI)"
    ],
    subQuestion: "नीचे दिए गए कूट का प्रयोग कर सही उत्तर चुनिए:",
    options: [
      { key: "a", text: "केवल 1 और 2" },
      { key: "b", text: "केवल 2, 3 और 4" },
      { key: "c", text: "केवल 1 और 3" },
      { key: "d", text: "1, 2, 3 और 4" }
    ],
    correctAnswer: "c",
    explanation: "अनुच्छेद 12 के तहत 'राज्य' शब्द में भारत सरकार, संसद, राज्य सरकारें, विधानमंडल, स्थानीय प्राधिकारी तथा अन्य प्राधिकारी शामिल हैं। न्यायिक निर्णयों के अनुसार भारतीय सांख्यिकी संगठन (ISO) राज्य है, जबकि NCERT और BCCI को राज्य नहीं माना गया है।"
  },
  {
    id: 4,
    question: "'आच्छादन के सिद्धांत' के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:",
    statements: [
      "(1) यह सिद्धांत मुख्य रूप से संविधान-पूर्व की उन विधियों पर लागू होता है जो मूल अधिकारों से असंगत हैं।",
      "(2) इस सिद्धांत के तहत मूल अधिकारों से असंगत विधियाँ प्रारंभ से ही पूर्णतः मृत या शून्य नहीं होतीं, बल्कि मूल अधिकारों द्वारा ढक ली जाती हैं।",
      "(3) सर्वोच्च न्यायालय ने भीखाजी बनाम मध्य प्रदेश राज्य (1955) के वाद में इस सिद्धांत को प्रतिपादित किया था।"
    ],
    subQuestion: "उपरोक्त कथनों में से कौन-से सही हैं?",
    options: [
      { key: "a", text: "केवल 1 और 2" },
      { key: "b", text: "केवल 2 और 3" },
      { key: "c", text: "केवल 1 और 3" },
      { key: "d", text: "1, 2 और 3" }
    ],
    correctAnswer: "d",
    explanation: "आच्छादन का सिद्धांत अनुच्छेद 13(1) से संबंधित है, जिसके तहत संविधान-पूर्व विधियाँ मूल अधिकारों से असंगत होने पर सुषुप्तावस्था में चली जाती हैं और आच्छादन हटते ही पुनर्जीवित हो जाती हैं। भीखाजी बनाम मध्य प्रदेश राज्य (1955) के मामले में सर्वोच्च न्यायालय द्वारा इस सिद्धांत को प्रतिपादित किया गया था।"
  },
  {
    id: 5,
    question: "'पृथक्करणीयता के सिद्धांत' के संबंध में निम्नलिखित कथनों पर विचार कीजिए:",
    statements: [
      "(1) यह सिद्धांत अनुच्छेद 13(2) में प्रयुक्त शब्दावली 'उल्लङ्घन की सीमा तक' से संबंधित है।",
      "(2) यदि किसी अधिनियम का एक भाग अवैध है, तो न्यायालय पूरे अधिनियम को शून्य घोषित करने के बजाय केवल अवैध भाग को ही पृथक कर शून्य घोषित करता है।",
      "(3) यदि वैध और अवैध भाग इस प्रकार जुड़े हों कि उन्हें अलग करने पर अधिनियम का मुख्य उद्देश्य ही विफल हो जाए, तो पूरा अधिनियम अवैध घोषित कर दिया जाता है।"
    ],
    subQuestion: "उपरोक्त कथनों में से कौन-सा/से कथन सही है/हैं?",
    options: [
      { key: "a", text: "केवल 1" },
      { key: "b", text: "केवल 1 और 2" },
      { key: "c", text: "केवल 2 और 3" },
      { key: "d", text: "1, 2 और 3" }
    ],
    correctAnswer: "d",
    explanation: "पृथक्करणीयता का सिद्धांत संविधानेतर विधियों पर लागू होता है। इसका उद्देश्य पूरे कानून को निरस्त करने के बजाय केवल उस हिस्से को शून्य करना है जो मौलिक अधिकारों का उल्लंघन करता है, बशर्ते कि वह हिस्सा शेष कानून से अलग किए जाने योग्य हो।"
  },
  {
    id: 6,
    question: "मूल अधिकारों में संशोधन की संसद की शक्ति से संबंधित निम्नलिखित ऐतिहासिक वादों को उनके सही कालानुक्रमिक क्रम में व्यवस्थित कीजिए:",
    statements: [
      "(1) गोलकनाथ बनाम पंजाब राज्य",
      "(2) शंकरी प्रसाद बनाम भारत संघ",
      "(3) केशवानंद भारती बनाम केरल राज्य",
      "(4) सज्जन सिंह बनाम राजस्थान राज्य"
    ],
    subQuestion: "नीचे दिए गए कूट का प्रयोग कर सही उत्तर चुनिए:",
    options: [
      { key: "a", text: "2-4-1-3" },
      { key: "b", text: "1-2-3-4" },
      { key: "c", text: "2-1-4-3" },
      { key: "d", text: "4-2-1-3" }
    ],
    correctAnswer: "a",
    explanation: "इन प्रसिद्ध वादों का सही कालानुक्रमिक वर्ष इस प्रकार है:\n1. शंकरी प्रसाद बनाम भारत संघ (1951)\n2. सज्जन सिंह बनाम राजस्थान राज्य (1965)\n3. गोलकनाथ बनाम पंजाब राज्य (1967)\n4. केशवानंद भारती बनाम केरल राज्य (1973)\nअतः सही कूट 2-4-1-3 है।"
  }
];

export default function UppscPrelimsTest1Page() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [markedForReview, setMarkedForReview] = useState<{ [key: number]: boolean }>({});
  const [timeLeft, setTimeLeft] = useState(7200); // 2 Hours in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (qId: number, key: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  const toggleMarkReview = (qId: number) => {
    setMarkedForReview((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    questionsData.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns) {
        if (userAns === q.correctAnswer) correct++;
        else incorrect++;
      }
    });
    const marks = correct * 1.33 - incorrect * 0.44; // Standard UPPCS marking rule
    return { correct, incorrect, unattempted: questionsData.length - (correct + incorrect), score: marks.toFixed(2) };
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const q = questionsData[currentIdx];
  const results = calculateScore();

  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-12">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b16]/90 backdrop-blur-xl px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/mock-tests" className="text-xs font-bold text-cyan-300 hover:text-white sm:text-sm">
            ← Back to Tests
          </Link>
          <div className="text-center">
            <h1 className="text-sm font-black tracking-wider sm:text-lg">UPPCS Prelims — Test 1</h1>
            <p className="text-[10px] text-slate-400 sm:text-xs">LOYAL Global Studies Exam Engine</p>
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
            {/* Question Panel */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e172a] to-[#080d19] p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <span className="rounded-lg bg-cyan-400/20 px-3 py-1 text-xs font-black text-cyan-300">
                  Question {currentIdx + 1} of {questionsData.length}
                </span>
                <button
                  onClick={() => toggleMarkReview(q.id)}
                  className={`rounded-lg border px-3 py-1 text-xs font-bold transition ${
                    markedForReview[q.id]
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : "border-white/20 bg-white/[0.03] text-slate-300 hover:border-amber-400"
                  }`}
                >
                  {markedForReview[q.id] ? "★ Marked for Review" : "☆ Mark for Review"}
                </button>
              </div>

              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed">
                <p className="font-semibold text-slate-100">{q.question}</p>
                {q.statements && (
                  <div className="space-y-2 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm sm:text-base text-slate-200">
                    {q.statements.map((stmt, i) => (
                      <p key={i}>{stmt}</p>
                    ))}
                  </div>
                )}
                {q.subQuestion && <p className="font-bold text-cyan-200 text-sm sm:text-base">{q.subQuestion}</p>}
              </div>

              {/* Options */}
              <div className="mt-8 space-y-3">
                {q.options.map((opt) => {
                  const isSelected = userAnswers[q.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-400/20 text-white font-bold shadow-lg shadow-cyan-950/40"
                          : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-400/40 hover:bg-white/[0.05]"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs ${
                          isSelected ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {opt.key.toUpperCase()}
                      </span>
                      <span className="text-sm sm:text-base">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => prev - 1)}
                  className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold text-slate-300 disabled:opacity-30 hover:border-cyan-300"
                >
                  ← Previous
                </button>
                {currentIdx < questionsData.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => prev + 1)}
                    className="rounded-xl bg-cyan-400 px-6 py-2.5 text-xs font-black text-slate-950 hover:bg-cyan-300"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-2.5 text-xs font-black text-slate-950 hover:from-emerald-300 hover:to-teal-400"
                  >
                    Submit Test ✦
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar / Question Palette */}
            <div className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 shadow-xl h-fit">
              <h3 className="font-black text-sm tracking-wider text-cyan-300 uppercase">Question Palette</h3>
              <div className="mt-4 grid grid-cols-4 gap-2.5">
                {questionsData.map((quest, i) => {
                  const isAns = !!userAnswers[quest.id];
                  const isMarked = !!markedForReview[quest.id];
                  const isCurrent = currentIdx === i;

                  let btnStyle = "border-white/10 bg-white/[0.04] text-slate-300";
                  if (isCurrent) btnStyle = "border-cyan-400 bg-cyan-400 text-slate-950 font-black ring-2 ring-cyan-300/50";
                  else if (isMarked) btnStyle = "border-amber-400 bg-amber-400/20 text-amber-300 font-bold";
                  else if (isAns) btnStyle = "border-emerald-400 bg-emerald-400/20 text-emerald-300 font-bold";

                  return (
                    <button
                      key={quest.id}
                      onClick={() => setCurrentIdx(i)}
                      className={`flex h-11 items-center justify-center rounded-xl border text-xs transition ${btnStyle}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-md bg-emerald-400/30 border border-emerald-400" /> Answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-md bg-amber-400/30 border border-amber-400" /> Marked for Review
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-md bg-white/[0.04] border border-white/10" /> Not Attempted
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(true)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-cyan-950/40 hover:from-cyan-300 hover:to-blue-400"
              >
                Final Submit
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Result & Solutions Section */
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 p-6 sm:p-10 shadow-2xl">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-black text-emerald-300">
                🎉 TEST SUBMITTED SUCCESSFULLY
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">Your Result Summary</h2>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Correct Answers</p>
                  <p className="mt-2 text-3xl font-black text-emerald-400">{results.correct}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Incorrect Answers</p>
                  <p className="mt-2 text-3xl font-black text-rose-400">{results.incorrect}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Unattempted</p>
                  <p className="mt-2 text-3xl font-black text-slate-400">{results.unattempted}</p>
                </div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <p className="text-xs text-cyan-300">Total Marks</p>
                  <p className="mt-2 text-3xl font-black text-cyan-200">{results.score}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-black text-cyan-300">Detailed Solutions & Explanations (उत्तर व्याख्या)</h3>
              <p className="mt-1 text-sm text-slate-400">प्रत्येक प्रश्न का सही उत्तर एवं खान ग्लोबल स्टडीज़ पैटर्न पर विस्तृत व्याख्या:</p>

              <div className="mt-6 space-y-6">
                {questionsData.map((item, idx) => {
                  const userAns = userAnswers[item.id];
                  const isCorrect = userAns === item.correctAnswer;

                  return (
                    <article
                      key={item.id}
                      className={`rounded-3xl border p-6 sm:p-8 transition ${
                        isCorrect
                          ? "border-emerald-500/30 bg-[#081711]"
                          : userAns
                          ? "border-rose-500/30 bg-[#1a0c10]"
                          : "border-white/10 bg-[#0d1424]"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="font-black text-sm text-cyan-300">Question {idx + 1}</span>
                        <span
                          className={`rounded-xl border px-3 py-1 text-xs font-black ${
                            isCorrect
                              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                              : userAns
                              ? "border-rose-400/40 bg-rose-400/10 text-rose-300"
                              : "border-slate-500/40 bg-slate-500/10 text-slate-400"
                          }`}
                        >
                          {isCorrect ? "✓ Correct" : userAns ? "✗ Incorrect" : "● Unattempted"}
                        </span>
                      </div>

                      <p className="mt-4 font-semibold text-base sm:text-lg">{item.question}</p>
                      {item.statements && (
                        <div className="mt-3 space-y-1.5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                          {item.statements.map((s, i) => (
                            <p key={i}>{s}</p>
                          ))}
                        </div>
                      )}
                      {item.subQuestion && <p className="mt-2 text-sm font-bold text-cyan-200">{item.subQuestion}</p>}

                      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
                        <span className="text-slate-400">
                          Your Answer: <span className={isCorrect ? "text-emerald-400" : "text-rose-400"}>{userAns ? userAns.toUpperCase() : "None"}</span>
                        </span>
                        <span className="text-emerald-400">
                          Correct Answer: <span className="underline">{item.correctAnswer.toUpperCase()}</span>
                        </span>
                      </div>

                      {/* Detailed Explanation Box */}
                      <div className="mt-5 rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06] p-5">
                        <p className="text-xs font-black tracking-wider text-cyan-300 uppercase">💡 Vyaakhya / Explanation:</p>
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
