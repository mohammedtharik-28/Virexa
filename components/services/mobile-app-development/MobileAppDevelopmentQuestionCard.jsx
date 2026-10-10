"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function MobileAppDevelopmentQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How long does it take to build a mobile app?",
            answer:
                "A simple MVP app typically takes 8–14 weeks. A full-featured product with backend, admin panel, and integrations usually takes 16–24 weeks. We'll give you a precise timeline after understanding your specific requirements in the free consultation call.",
        },
        {
            question: "React Native or Flutter — which is better for my app?",
            answer:
                "Both are excellent for cross-platform apps. React Native is better if you have a web product and want shared code with your website. Flutter gives slightly better UI consistency across platforms. For native performance with complex hardware access (camera, Bluetooth, AR), we recommend native Swift/Kotlin. We'll advise the right choice for your specific use case.",
        },
        {
            question: "Do I need a separate app for iOS and Android?",
            answer:
                "Not necessarily. With React Native or Flutter, a single codebase runs on both iOS and Android — saving you 40–60% of development cost. We'll recommend native development only when your app requires deep platform-specific features that cross-platform frameworks can't handle efficiently.",
        },
        {
            question: "Will my app handle 100,000+ users?",
            answer:
                "We handle the full App Store (Apple) and Google Play submission process — including preparing all metadata, screenshots, privacy policy links, and complying with review guidelines. If you don't have developer accounts yet, we'll guide you through setting them up in your name so you maintain full ownership.",
        },
        {
            question: "What happens after the app launches?",
            answer:
                "Every project includes 30 days of free post-launch support — bug fixes, crash monitoring, and minor adjustments. After that, we offer monthly retainer plans covering OS update compatibility, security patches, performance monitoring, and feature additions. We become your long-term product partner.",
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

export default MobileAppDevelopmentQuestionCard;