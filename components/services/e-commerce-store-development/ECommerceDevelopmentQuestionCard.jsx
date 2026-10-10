"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function ECommerceDevelopmentQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "What e-commerce development services does Virexa provide?",
            answer:
                "Virexa provides Shopify, WooCommerce, and custom e-commerce website development with secure, scalable, and conversion-focused solutions.",
        },
        {
            question: "Which platforms do you work with for e-commerce websites?",
            answer:
                "We work with Shopify, WooCommerce, and custom-built e-commerce platforms based on business requirements.",
        },
        {
            question: "Do you create mobile-friendly e-commerce websites?",
            answer:
                "Yes, all our e-commerce websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
        {
            question: "Can you redesign an existing online store?",
            answer:
                "Yes, we redesign existing e-commerce stores to improve performance, design, speed, and user experience.",
        },
        {
            question: "Do you integrate payment gateways?",
            answer:
                "Yes, we integrate payment gateways like Razorpay, Stripe, PayPal, Cashfree, and more.",
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

export default ECommerceDevelopmentQuestionCard;