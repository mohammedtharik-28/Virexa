"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function OnDemandQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How long does it take to build and launch an on-demand platform MVP?",
            answer:
                "A production-ready MVP — customer app (iOS + Android), provider app, and admin dashboard — typically takes 8–12 weeks from design sign-off to App Store launch. This includes the dispatch engine, live GPS tracking, payment integration, and provider onboarding flow. A simpler single-city pilot without the full provider KYC flow can be ready in 6 weeks. We don't cut corners on real-time infrastructure — shortcuts there are what cause platforms to fail at scale.",
        },
        {
            question: "Do you build the admin dashboard and all three apps as part of the same project?",
            answer:
                "Yes — every on-demand platform we build ships with all three: customer app (iOS + Android), provider app (iOS + Android), and web-based admin dashboard. These are not optional add-ons — they're essential to operating an on-demand marketplace. Building them separately with different teams creates integration gaps that become operational nightmares at launch. Our team builds and tests all three applications together as one coordinated system.",
        },
        {
            question: "How does the real-time matching work and can we customise the logic?",
            answer:
                "We build a configurable dispatch engine using PostGIS for geospatial queries. The matching logic considers proximity, provider rating, acceptance rate, and any custom priority rules you define. Parameters like matching radius, acceptance timer duration, number of simultaneous broadcasts, auto-reassignment thresholds, and sequential vs. broadcast dispatch mode are all configurable from the admin dashboard — no code deployment needed to change them.",
        },
        {
            question: "How do you handle split payments and provider payouts?",
            answer:
                "We use Razorpay Routes for automatic commission splitting at the moment of payment — when a customer pays ₹300, the platform's ₹45 commission (15%) is split automatically and the provider's ₹255 is credited to their Razorpay X linked account. Provider payouts can be scheduled daily, weekly, or triggered on job completion. All payouts are tracked with TDS deduction records for providers who cross the annual threshold, and GST-compliant receipts are generated for every transaction.",
        },
        {
            question: "Can the platform handle surge pricing during peak demand?",
            answer:
                "Yes — surge pricing is a standard feature. The system monitors demand-to-supply ratio in real time per service zone and applies configurable surge multipliers when demand exceeds available providers. Customers see a clear surge indicator before booking with the multiplied price displayed. Surge levels, trigger thresholds, maximum multiplier caps, and zone boundaries are all configurable from the admin dashboard without code changes. You can also define static peak-hour pricing if you prefer time-based over demand-based pricing.",
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

export default OnDemandQuestionCard;