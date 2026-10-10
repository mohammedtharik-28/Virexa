"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function DigitalMarketingQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How long before we start seeing results?",
            answer:
                "It depends on the channel. Paid ads (Google and Meta) can generate leads and sales within the first week once campaigns go live. SEO is a longer game — typically 3–6 months to see meaningful organic growth, though technical fixes and content updates often show early wins. We set realistic timelines for every channel upfront so expectations are always clear.",
        },
        {
            question: "What is the minimum budget to run paid ads with you?",
            answer:
                "We recommend a minimum ad spend of ₹25,000–₹30,000 per month per platform for meaningful data and results. Our management fee is charged separately and depends on scope. Below that threshold, it's very difficult to gather enough data to optimise properly. We'll be honest with you if your budget isn't enough to run campaigns that make business sense.",
        },
        {
            question: "Do you require a long-term contract?",
            answer:
                "No long-term lock-ins. We work on monthly retainers with a 30-day notice period. We believe results should earn your continued business — not a contract clause. That said, digital marketing compounds over time, so we typically see our best results with clients who stay for 6+ months. Most of our clients do.",
        },
        {
            question: "Will we own our ad accounts and data?",
            answer:
                "Always. All ad accounts, Google Analytics, Search Console, and other platforms are set up under your ownership. We're added as managers, not owners. If you ever leave, everything stays with you. We never hold data or accounts hostage — that's a non-negotiable part of how we work.",
        },
        {
            question: "How do you report results and how often?",
            answer:
                "You get a detailed monthly performance report with plain-English commentary, a live dashboard you can check anytime, and a monthly strategy call to review results and plan the next month. For active paid campaigns, we provide weekly performance snapshots. You'll never be in the dark about how your money is performing.",
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

export default DigitalMarketingQuestionCard;