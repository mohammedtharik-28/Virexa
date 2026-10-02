"use client";

import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

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
        <section className="px-50 py-25">

            <div className="text-center">
                <h1 className="text-[36px] font-baumans text-[#000000] font-bold">Frequently asked{" "}<span className="text-[#000099]">questions</span></h1>
            </div>

            <div className="mx-auto max-w-[1200px] mt-10">

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
                            className="flex w-full items-center justify-between py-6 text-left"
                        >

                            <p className="font-bold text-[24px] font-baumans text-[#000000]">
                                {items.question}
                            </p>

                            <span className="text-3xl font-bold">
                                {answerOpen === id ? "^" : "+"}
                            </span>

                        </button>

                        
                        {answerOpen === id && (
                            <div className="pb-6 pr-10 border-t border-gray-200 pt-5">
                                <p className="text-[15px] font-poppins font-normal leading-6 text-[#54595f]">
                                    {items.answer}
                                </p>
                            </div>
                        )}

                    </div>

                ))}

            </div>

            <div className="bg-[#000099] text-center rounded-2xl p-12 mt-25">
                <h1 className="text-[40px] font-baumans font-bold text-[#ececec]">Let's build your next digital product</h1>
                <p className="text-[#ececec] font-medium text-[15px] font-poppins pt-8">If you are thinking about launching or scaling a digital product, we are ready to build it with you.</p>
                      <Link
                        href="/contact"
                        className="group mx-auto mt-10 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099]"
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