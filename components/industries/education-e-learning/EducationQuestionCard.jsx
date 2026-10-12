"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function EducationQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Why should I build my own LMS instead of using Teachable, Thinkific, or Graphy?",
            answer:
                "Third-party LMS platforms charge per-student fees (typically 5–10% or a monthly per-seat fee) that scale against you as you grow. They also limit your design, restrict your data, and can change pricing at any time. A custom LMS is a one-time investment that you fully own — no recurring licence fee, no design constraints, and all your student data belongs entirely to you. Most clients recover the development cost within 6–12 months of the student volume they already have.",
        },
        {
            question: "Can the platform handle video without buffering for students on slow connections?",
            answer:
                "Yes — we use adaptive bitrate streaming (HLS/DASH via AWS CloudFront or Mux) which automatically adjusts video quality based on the student's available bandwidth in real time. A student on 2G gets a lower-quality stream without buffering while a student on 4G gets full HD — the same video, served intelligently. We also support offline video downloads on the mobile app so students in low-connectivity areas can download content on Wi-Fi and watch offline",
        },
        {
            question: "How do you prevent students from screen-recording or downloading videos illegally?",
            answer:
                "We implement DRM (Digital Rights Management) on all video content — this prevents most screen recording tools and native screen capture on iOS. We also add dynamic watermarks that embed the student's name or email on the video so any leaked footage is traceable. Additionally, streaming URLs are time-limited (they expire after a session), preventing link sharing. No system is 100% foolproof, but these measures stop the vast majority of content theft.",
        },
        {
            question: "Can your platform support multiple instructors and batches?",
            answer:
                "Yes — multi-instructor and multi-batch support is a standard feature. Each instructor gets their own dashboard to manage their courses, students, and live classes. Admins see everything across all instructors and batches. Batch management includes enrolment limits, batch schedules, and per-batch content access. There's no additional cost per instructor or per batch — it's all included in the platform.",
        },
        {
            question: "How long does it take to build and launch an LMS with mobile app?",
            answer:
                "A standard LMS with a video course player, quiz module, payment gateway, and student mobile app (iOS + Android) typically takes 6–8 weeks from design sign-off to App Store launch. Adding live classes takes 1–2 additional weeks. A simpler platform (web only, no mobile app, no live classes) can be launched in 3–4 weeks. We agree on a milestone plan and launch date at kick-off — our on-time delivery rate is 98%.",
        },
    ];

    return (
        <section className="mt-30 bg-gray-100 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-25 xl:px-28">
            <div className="text-center">
                <h1 className="font-baumans text-[30px] font-bold text-[#000000] sm:text-[34px] lg:text-[36px]">
                    Frequently asked{" "}
                    <span className="text-[#000099]">
                        questions
                    </span>
                </h1>
            </div>

            <div className="mx-auto mt-10 w-full max-w-[1200px]">
                {QuestionAndAnswers.map((items, id) => (
                    <div
                        key={id}
                        className="border-b border-gray-200"
                    >
                        <button
                            onClick={() =>
                                setAnswerOpen(
                                    answerOpen === id ? null : id
                                )
                            }
                            className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6 cursor-pointer"
                        >
                            <p className="font-baumans text-[18px] font-bold text-[#000000] sm:text-[21px] lg:text-[20px]">
                                {items.question}
                            </p>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#000000] transition-transform duration-300">
                                {answerOpen === id ? (
                                    <Minus size={24} strokeWidth={4}  className="text-[#000099]"/>
                                ) : (
                                    <Plus size={24} strokeWidth={4} />
                                )}
                            </span>
                        </button>

                        <div
                            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                                answerOpen === id
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <div className="border-t border-gray-200 pb-6 pt-5 sm:pr-10">
                                    <p className="font-poppins text-[15px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {items.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationQuestionCard;