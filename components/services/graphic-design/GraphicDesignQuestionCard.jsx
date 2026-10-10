"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function GraphicDesignQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How long does a logo or brand identity design take?",
            answer:
                "Initial logo concepts are delivered within 48–72 hours. A complete brand identity project — including logo, brand guidelines, business card, and social media kit — typically takes 7–14 working days depending on revision rounds. We always set a clear timeline at project kickoff.",
        },
        {
            question: "Will I get the source files and full ownership of my designs?",
            answer:
                "Absolutely. Full intellectual property and ownership of every design is transferred to you upon final payment. You receive all source files in editable formats — Adobe Illustrator (AI), Photoshop (PSD), InDesign (INDD), and export-ready PDF, PNG, and JPG files for both print and digital use.",
        },
        {
            question: "How many revisions do I get?",
            answer:
                "We include multiple revision rounds in every project. Our Brand Identity Pack includes unlimited revisions until you are 100% satisfied. We believe the final design should represent your vision exactly — which is why we don't rush the revision process or charge for reasonable change requests.",
        },
        {
            question: "Can you handle ongoing social media design needs every month?",
            answer:
                "Yes. Our monthly design retainer plans are built exactly for this. A dedicated designer is assigned to your brand and delivers 30+ assets per month — including daily social media posts, story templates, ad creatives, and any other marketing materials you need on an ongoing basis.",
        },
        {
            question: "Can you design for both digital and print materials?",
            answer:
                "Absolutely. We design for social media, websites, ads, as well as brochures, flyers, banners, and packaging materials.",
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

export default GraphicDesignQuestionCard;