"use client";

import Link from "next/link";
import { ArrowUpRight, Plus, ChevronUp } from "lucide-react";
import { useState } from "react";

function QuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "What digital product development services does Virexa offer?",
            answer:
                "Virexa provides custom software development, SaaS product development, AI solutions, cloud application development, UI UX design, and system integrations for startups and growing businesses."
        },
        {
            question: "Do you build MVPs for startups?",
            answer:
                "Yes. We specialize in MVP development for startups, helping founders launch faster with scalable architecture, clean code, and future-ready product foundations."
        },
        {
            question: "What technologies do you use for software development?",
            answer:
                "We use modern tech stacks including React, Node.js, cloud platforms like AWS and Azure, and AI frameworks based on project requirements and scalability goals."
        },
        {
            question: "Do you offer post-launch support and maintenance?",
            answer:
                "Yes. We provide ongoing software maintenance, performance optimization, feature enhancements, and cloud infrastructure support after product launch."
        },
        {
            question: "How do you ensure scalable and secure application development?",
            answer:
                "We follow structured development processes, implement secure coding standards, and design cloud-native architectures to ensure scalability, performance, and data security."
        }
    ];

    return (
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-25 xl:px-28">

            <div className="text-center">
                <h1 className="text-[30px] font-baumans font-bold text-[#000000] sm:text-[34px] lg:text-[36px]">
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
                            className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                        >

                            <p className="text-[18px] font-baumans font-bold text-[#000000] sm:text-[21px] lg:text-[24px]">
                                {items.question}
                            </p>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#000000]">
                                {answerOpen === id ? (
                                    <ChevronUp size={26} strokeWidth={4} className="text-[#000099]" />
                                ) : (
                                    <Plus size={26} strokeWidth={4} />
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

                                    <p className="text-[14px] font-poppins font-normal leading-6 text-[#54595f] sm:text-[15px]">
                                        {items.answer}
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                ))}

            </div>

            <div className="mt-16 rounded-2xl bg-[#000099] p-7 text-center sm:mt-20 sm:p-10 lg:mt-25 lg:p-12">

                <h1 className="text-[30px] font-baumans font-bold text-[#ececec] sm:text-[36px] lg:text-[40px]">
                    Let's build your next digital product
                </h1>

                <p className="pt-6 text-[14px] font-poppins font-medium leading-6 text-[#ececec] sm:pt-8 sm:text-[15px]">
                    If you are thinking about launching or scaling a digital product, we are ready to build it with you.
                </p>

                <Link
                    href="/contact"
                    className="group mx-auto mt-8 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099] sm:mt-10"
                >
                    <span className="ps-2">
                        Get in Touch
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-gray-200 transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                        <ArrowUpRight size={21} />
                    </span>
                </Link>

            </div>

        </section>
    );
}

export default QuestionCard;