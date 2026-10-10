"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function SoftwareDevelopmentQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Why should I choose custom software over ready-made solutions like Tally or Zoho?",
            answer:
                "Ready-made software forces you to change your processes to fit the tool. Custom software is built around your exact business workflows — saving time, eliminating manual workarounds, and giving you a competitive edge. It also integrates perfectly with your existing systems and scales with your business without recurring per-user licensing fees.",
        },
        {
            question: "How long does it take to build custom software?",
            answer:
                "A single-module system typically takes 4–8 weeks. A multi-module business suite takes 3–5 months. A full enterprise ERP or SaaS platform takes 6–12 months. We follow 2-week agile sprints — so you see working software every 2 weeks throughout the project, not just at the end.",
        },
        {
            question: "Will you integrate the software with Tally, GST, or our existing tools?",
            answer:
                "Yes. We have experience integrating custom software with Tally, Zoho, Salesforce, GSTN APIs, payment gateways (Razorpay, PayU), SMS/email services, WhatsApp Business API, and many other third-party systems. Integration requirements are captured during the discovery phase.",
        },
        {
            question: "Do you provide training and documentation?",
            answer:
                "Yes. Every project includes user training sessions (on-site or online), a comprehensive user manual, and admin documentation. We also provide video tutorials for frequently used workflows. Our goal is to ensure your team is fully confident using the software from day one.",
        },
        {
            question: "Why should I choose custom software for my business?",
            answer:
                "Custom software is tailored to your exact business needs, unlike off-the-shelf tools. It improves efficiency, automates processes, and scales as your business grows — giving you a long-term competitive advantage.",
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

export default SoftwareDevelopmentQuestionCard;