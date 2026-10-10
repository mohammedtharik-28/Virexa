"use client";

import Link from "next/link";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

function WebsiteDevelopmentQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How long does it take to build a Website?",
            answer:
                "We can deliver a standard business website in as little as 7 working days. A full-featured professional website typically takes 2–3 weeks, and a custom e-commerce or web application project takes 4–8 weeks depending on complexity.",
        },
        {
            question: "Will my website be mobile-friendly?",
            answer:
                "Absolutely. All our websites are fully responsive and optimized to work seamlessly on mobile, tablet, and desktop devices.",
        },
        {
            question: "Do you provide maintenance after launch?",
            answer:
                "Absolutely. All plans include 1–6 months of free support depending on the package. After that, we offer affordable annual maintenance plans covering software updates, security patches, backups, and minor content changes.",
        },
        {
            question: "Can I update the website content myself?",
            answer:
                "Yes, we develop user-friendly websites using CMS platforms like WordPress, allowing you to easily update content, images, and pages without technical knowledge.",
        },
        {
            question: "Do you build mobile apps in addition to websites?",
            answer:
                "Yes, we offer full-stack digital solutions including Android and iOS mobile app development, along with websites and web applications. We can build a synchronized website + mobile app combo for your Coimbatore business.",
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
                            <p className="font-baumans text-[18px] font-bold text-[#000000] sm:text-[20px] lg:text-[20px]">
                                {items.question}
                            </p>

                            <span className="flex shrink-0 items-center justify-center text-[#000000]">
                                {answerOpen === id ? (
                                    <Minus
                                        size={26}
                                        strokeWidth={4} className="text-[#000099]"
                                    />
                                ) : (
                                    <Plus
                                        size={26}
                                        strokeWidth={4}
                                    />
                                )}
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                answerOpen === id
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
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

export default WebsiteDevelopmentQuestionCard;