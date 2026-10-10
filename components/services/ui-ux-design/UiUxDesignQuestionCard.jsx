"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function UiUxDesignQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "What is the difference between UI design and UX design?",
            answer:
                "UX (User Experience) design focuses on how a product works — the flow, structure, and how easy it is for users to accomplish their goals. UI (User Interface) design focuses on how it looks — colors, typography, icons, and visual elements. We do both together to create products that are both beautiful and functional.",
        },
        {
            question: "How long does a UI UX design project take?",
            answer:
                "A basic website UI design takes 5–7 working days. A full mobile app or SaaS product design with wireframes, UX research, and high-fidelity screens typically takes 3–6 weeks. Enterprise projects with design systems and user testing can take 6–10 weeks. We provide a clear timeline before starting every project.",
        },
        {
            question: "Do you provide the Figma source files after the project?",
            answer:
                "Yes, absolutely. Once the project is complete and payment is cleared, you receive the full Figma source files, all design assets, icons, and developer-ready handoff documentation. You own 100% of the design work we deliver for you.",
        },
        {
            question: "Will my design be mobile-friendly and responsive?",
            answer:
                "Absolutely. We design responsive interfaces that work seamlessly across mobile, tablet, and desktop devices.",
        },
        {
            question: "Do you also develop the designs you create?",
            answer:
                "Yes! WebNest Technologies is a full-service digital agency in Coimbatore. We design and develop. Once your UI UX design is approved, our development team can build the website, mobile app, or web application — pixel-perfect to the designs. One team, end to end.",
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

export default UiUxDesignQuestionCard;