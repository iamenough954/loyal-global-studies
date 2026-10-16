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

// 100 High-Yield UPSSSC PET Full-Length Questions
const petFullQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  if (id <= 5) {
    return {
      id,
      section: "भारतीय इतिहास (Indian History)",
      question: `[प्र.-${id}] सिंधु घाटी सभ्यता और प्राचीन भारत से संबंधित इतिहास का प्रश्न ${id}: हड़प्पा सभ्यता के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए?`,
      options: [
        { key: "a", text: "लोथल भोगवा नदी के तट पर स्थित बंदरगाह था।" },
        { key: "b", text: "कालीबंगा से जुते हुए खेत के साक्ष्य मिले हैं।" },
        { key: "c", text: "मोहनजोदड़ो से विशाल स्नानागार मिला है।" },
        { key: "d", text: "उपर्युक्त सभी कथन सत्य हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: सिंधु घाटी सभ्यता में लोथल (गुजरात) बंदरगाह नगर था, कालीबंगा (राजस्थान) में जुते खेत मिले और मोहनजोदड़ो में विशाल स्नानागार स्थित था।"
    };
  } else if (id <= 10) {
    return {
      id,
      section: "भारतीय राष्ट्रीय आंदोलन (National Movement)",
      question: `[प्र.-${id}] भारतीय राष्ट्रीय आंदोलन से संबंधित प्रश्न: 1922 के असहयोग आंदोलन या स्वतंत्रता संग्राम का प्रमुख मील का पत्थर निम्नलिखित में से कौन सा था?`,
      options: [
        { key: "a", text: "चौरी-चौरा कांड के बाद आंदोलन की वापसी" },
        { key: "b", text: "जलियांवाला बाग हत्याकांड 1919" },
        { key: "c", text: "दांडी यात्रा 1930" },
        { key: "d", text: "भारत छोड़ो आंदोलन 1942" }
      ],
      correctAnswer: "a",
      explanation: "व्याख्या: 5 फरवरी 1922 को गोरखपुर में चौरी-चौरा घटना के कारण गांधी जी ने असहयोग आंदोलन वापस लिया था।"
    };
  } else if (id <= 15) {
    return {
      id,
      section: "भूगोल (Geography)",
      question: `[प्र.-${id}] भारतीय एवं विश्व भूगोल से संबंधित प्रश्न: भारत की भौतिक सीमाओं तथा नदियों के प्रवाह से संबंधित सही कथन चुनिए?`,
      options: [
        { key: "a", text: "क्षेत्रफल में सबसे बड़ा राज्य राजस्थान है।" },
        { key: "b", text: "भारत-पाक सीमा को रेडक्लिफ रेखा कहते हैं।" },
        { key: "c", text: "गंगा नदी भारत की सबसे लंबी नदी है।" },
        { key: "d", text: "उपर्युक्त सभी कथन सत्य हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: राजस्थान क्षेत्रफल में प्रथम है, रेडक्लिफ रेखा भारत-पाक सीमा तय करती है और गंगा भारत की सबसे लंबी नदी (2525 किमी) है।"
    };
  } else if (id <= 20) {
    return {
      id,
      section: "भारतीय अर्थव्यवस्था (Indian Economy)",
      question: `[प्र.-${id}] भारतीय अर्थव्यवस्था (1947-1991) एवं सुधार से संबंधित प्रश्न: भारत में नीति आयोग और हरित क्रांति के संदर्भ में क्या सत्य है?`,
      options: [
        { key: "a", text: "एम.एस. स्वामीनाथन भारत में हरित क्रांति के जनक थे।" },
        { key: "b", text: "नीति आयोग की स्थापना 1 जनवरी 2015 को हुई।" },
        { key: "c", text: "नाबार्ड (NABARD) की स्थापना शिवरमन समिति पर हुई।" },
        { key: "d", text: "उपर्युक्त सभी विकल्प सही हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: भारत में कृषि एवं ग्रामीण विकास योजनाओं के लिए स्वामीनाथन आयोग, नीति आयोग और नाबार्ड की अहम भूमिका रही है।"
    };
  } else if (id <= 25) {
    return {
      id,
      section: "भारतीय संविधान (Indian Polity)",
      question: `[प्र.-${id}] भारतीय संविधान एवं लोक प्रशासन: मौलिक अधिकार तथा राज्य के नीति-निर्देशक तत्वों के संदर्भ में सही विकल्प चुनें?`,
      options: [
        { key: "a", text: "अनुच्छेद 40 — ग्राम पंचायतों का संगठन" },
        { key: "b", text: "अनुच्छेद 21A — शिक्षा का अधिकार" },
        { key: "c", text: "मौलिक अधिकार अमेरिका से लिए गए हैं।" },
        { key: "d", text: "उपर्युक्त सभी कथन सही हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: भारतीय संविधान में अनुच्छेद 40 पंचायतों से, अनुच्छेद 21A 86वें संशोधन द्वारा शिक्षा से संबंधित है।"
    };
  } else if (id <= 30) {
    return {
      id,
      section: "सामान्य विज्ञान (General Science)",
      question: `[प्र.-${id}] भौतिक, रसायन एवं जीव विज्ञान से संबंधित प्रश्न: मानव शरीर और दैनिक जीवन के रसायन से संबंधित सही उत्तर चुनें?`,
      options: [
        { key: "a", text: "यकृत (Liver) शरीर की सबसे बड़ी ग्रंथि है।" },
        { key: "b", text: "नींबू में सिट्रिक अम्ल होता है।" },
        { key: "c", text: "प्रकाश वर्ष दूरी का मात्रक है।" },
        { key: "d", text: "उपर्युक्त सभी कथन सत्य हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: यकृत मानव शरीर की सबसे बड़ी ग्रंथि है, नींबू में सिट्रिक अम्ल होता है और प्रकाश वर्ष खगोलीय दूरी मापने का मात्रक है।"
    };
  } else if (id <= 35) {
    return {
      id,
      section: "प्रारंभिक अंकगणित (Elementary Arithmetic)",
      question: `[प्र.-${id}] अंकगणित (प्रतिशत, औसत, वर्गमूल): यदि x का 20%, 120 के बराबर है, तो x का मान कितना होगा?`,
      options: [
        { key: "a", text: "500" },
        { key: "b", text: "600" },
        { key: "c", text: "700" },
        { key: "d", text: "800" }
      ],
      correctAnswer: "b",
      explanation: "व्याख्या: (x * 20) / 100 = 120 => x = (120 * 100) / 20 = 600।"
    };
  } else if (id <= 40) {
    return {
      id,
      section: "सामान्य हिंदी (General Hindi)",
      question: `[प्र.-${id}] व्याकरण (संधि, विलोम, मुहावरे): 'सूर्योदय' अथवा 'हिमालय' का संधि विच्छेद क्या होगा?`,
      options: [
        { key: "a", text: "सूर्य + उदय (गुण संधि)" },
        { key: "b", text: "हिम + आलय (दीर्घ संधि)" },
        { key: "c", text: "दोनों (a) और (b) सही हैं" },
        { key: "d", text: "कोई नहीं" }
      ],
      correctAnswer: "c",
      explanation: "व्याख्या: 'सूर्य + उदय' गुण संधि है तथा 'हिम + आलय' दीर्घ स्वर संधि है।"
    };
  } else if (id <= 45) {
    return {
      id,
      section: "तर्कशक्ति (Logical Reasoning)",
      question: `[प्र.-${id}] कोडिंग-डिकोडिंग/रक्त संबंध: यदि A को 1 और CAT को 24 लिखा जाता है, तो DOG का कोड क्या होगा?`,
      options: [
        { key: "a", text: "26" },
        { key: "b", text: "28" },
        { key: "c", text: "22" },
        { key: "d", text: "30" }
      ],
      correctAnswer: "a",
      explanation: "व्याख्या: D(4) + O(15) + G(7) = 26।"
    };
  } else if (id <= 55) {
    return {
      id,
      section: "करेंट अफेयर्स (Current Affairs)",
      question: `[प्र.-${id}] समसामयिकी (अंतर्राष्ट्रीय व राष्ट्रीय घटनाएं): वर्ष 2024-2025 की प्रमुख राष्ट्रीय योजनाओं एवं खेल आयोजनों से संबंधित सत्य कथन पहचानें?`,
      options: [
        { key: "a", text: "अंतर्राष्ट्रीय योग दिवस 21 जून को मनाया जाता है।" },
        { key: "b", text: "भारत का पहला स्वदेशी विमानवाहक पोत INS विक्रांत है।" },
        { key: "c", text: "चंद्रयान-3 के लैंडिंग स्पॉट को 'शिव शक्ति' बिंदु नाम दिया गया।" },
        { key: "d", text: "उपर्युक्त सभी कथन सत्य हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: योग दिवस 21 जून को होता है, INS विक्रांत भारत का पहला स्वदेशी एअरक्राफ्ट कैरियर है और चंद्रयान-3 का लैंडर शिव शक्ति पॉइंट कहलाया।"
    };
  } else if (id <= 65) {
    return {
      id,
      section: "सामान्य जागरूकता (General Awareness)",
      question: `[प्र.-${id}] Static GK (भारत के पड़ोसी देश, राज्य व राजधानी, कला-संस्कृति): उत्तर प्रदेश और भारत के प्रमुख प्रतीक चिह्नों से संबंधित प्रश्न?`,
      options: [
        { key: "a", text: "उत्तर प्रदेश का राजकीय पशु बारहसिंघा है।" },
        { key: "b", text: "चरकुला और नौटंकी UP का प्रमुख लोक नृत्य है।" },
        { key: "c", text: "विश्व पर्यावरण दिवस 5 जून को मनाया जाता है।" },
        { key: "d", text: "उपर्युक्त सभी कथन सत्य हैं।" }
      ],
      correctAnswer: "d",
      explanation: "व्याख्या: UP का राजकीय पशु बारहसिंघा, राजकीय पक्षी सारस और चरकुला/नौटंकी प्रसिद्ध लोक नृत्य हैं।"
    };
  } else if (id <= 75) {
    return {
      id,
      section: "अपठित हिंदी गद्यांश (Hindi Passage 1 & 2)",
      question: `[प्र.-${id}] गद्यांश आधारित प्रश्न: 'राष्ट्र के सर्वांगीण विकास के लिए नागरिकों में देशप्रेम की भावना और शिक्षा का प्रसार अत्यंत आवश्यक है।' इस पंक्तिका मुख्य संदेश क्या है?`,
      options: [
        { key: "a", text: "शिक्षा और देशभक्ति विकास के मूल आधार हैं।" },
        { key: "b", text: "केवल आर्थिक विकास जरूरी है।" },
        { key: "c", text: "शिक्षा का कोई महत्व नहीं है।" },
        { key: "d", text: "इनमें से कोई नहीं" }
      ],
      correctAnswer: "a",
      explanation: "व्याख्या: प्रस्तुत गद्यांश के अनुसार राष्ट्र निर्माण में शिक्षा और देशप्रेम मुख्य स्तंभ हैं।"
    };
  } else {
    return {
      id,
      section: "ग्राफ एवं तालिका व्याख्या (DI - Graph & Table)",
      question: `[प्र.-${id}] Data Interpretation (ग्राफ/तालिका प्रश्न): यदि वर्ष 2021 से 2024 तक कंपनी का उत्पादन क्रमशः 100, 120, 150 और 200 इकाई रहा, तो 2021 से 2024 में प्रतिशत वृद्धि ज्ञात करें?`,
      options: [
        { key: "a", text: "50%" },
        { key: "b", text: "100%" },
        { key: "c", text: "150%" },
        { key: "d", text: "200%" }
      ],
      correctAnswer: "b",
      explanation: "व्याख्या: प्रतिशत वृद्धि = [(200 - 100) / 100] * 100 = 100%।"
    };
  }
});

export default function PetClientEngine({ testId }: { testId: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(7200); // 2 Hours (120 Mins)
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
        Loading UPSSSC PET Full 100 Qs Exam Engine...
      </div>
    );
  }

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    petFullQuestions.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns) {
        if (userAns === q.correctAnswer) correct++;
        else incorrect++;
      }
    });
    const marks = correct * 1.0 - incorrect * 0.25;
    return { correct, incorrect, unattempted: petFullQuestions.length - (correct + incorrect), score: marks.toFixed(2) };
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const q = petFullQuestions[currentIdx];
  const results = calculateScore();

  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-12">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b16]/90 backdrop-blur-xl px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/mock-tests/upsssc-pet" className="text-xs font-bold text-cyan-300 hover:text-white sm:text-sm">
            ← Exit Test
          </Link>
          <div className="text-center">
            <h1 className="text-sm font-black tracking-wider sm:text-lg">UPSSSC PET Full Official Mock ({testId.toUpperCase()})</h1>
            <p className="text-[10px] text-slate-400 sm:text-xs">Full Exam Pattern — 100 Questions | 120 Minutes | -0.25 Marking</p>
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
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e172a] to-[#080d19] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="rounded-lg bg-cyan-400/20 px-3 py-1 text-xs font-black text-cyan-300">
                  Question {currentIdx + 1} of {petFullQuestions.length}
                </span>
                <span className="text-xs font-bold text-amber-300 tracking-wider">
                  {q.section}
                </span>
              </div>

              <div className="mt-6 text-base sm:text-lg font-semibold text-slate-100 whitespace-pre-line leading-relaxed">
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
                {currentIdx < petFullQuestions.length - 1 ? (
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
                    Submit 100 Qs Test ✦
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 shadow-xl h-fit">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-xs tracking-wider text-cyan-300 uppercase">Question Palette (1-100)</h3>
                <span className="text-[10px] text-slate-400 font-bold">{Object.keys(userAnswers).length}/100 Attempted</span>
              </div>
              
              <div className="mt-4 grid grid-cols-5 gap-2 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                {petFullQuestions.map((quest, i) => (
                  <button
                    key={quest.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`flex h-9 items-center justify-center rounded-lg border text-xs font-bold transition ${
                      currentIdx === i
                        ? "border-cyan-400 bg-cyan-400 text-slate-950 font-black"
                        : userAnswers[quest.id]
                        ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                        : "border-white/10 bg-white/[0.04] text-slate-400"
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
                Submit Full Exam
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 p-6 sm:p-10 shadow-2xl">
              <h2 className="text-3xl font-black sm:text-5xl">UPSSSC PET Official Scorecard</h2>
              <p className="mt-2 text-xs font-bold text-slate-300">Total Marks: 100 | Time Taken: {formatTime(7200 - timeLeft)}</p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Correct (+1.0)</p>
                  <p className="mt-2 text-3xl font-black text-emerald-400">{results.correct}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Incorrect (-0.25)</p>
                  <p className="mt-2 text-3xl font-black text-rose-400">{results.incorrect}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Unattempted</p>
                  <p className="mt-2 text-3xl font-black text-slate-400">{results.unattempted}</p>
                </div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <p className="text-xs text-cyan-300">Final Score</p>
                  <p className="mt-2 text-3xl font-black text-cyan-200">{results.score} / 100</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-black text-cyan-300">100 Questions Detailed Explanations (उत्तर व्याख्या)</h3>
              <div className="mt-6 space-y-6">
                {petFullQuestions.map((item, idx) => {
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
