"use client";

import { useState } from "react";

function Blog2QuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How much does it cost to build an ecommerce website in Coimbatore?",
            answer:
                "A professional ecommerce website in Coimbatore starts at ₹60,000 for a standard store and can go up to ₹5,00,000 for advanced custom solutions."
        },
        {
            question: "Which platform is best for ecommerce in Coimbatore?",
            answer:
                "For small businesses, WooCommerce is cost-effective. For brands wanting ease of use, Shopify is best. For industrial B2B companies, a Custom Laravel build is recommended."
        },
        {
            question: "How long does it take to build an ecommerce website?",
            answer:
                "A basic store takes 3-4 weeks, while a custom enterprise platform can take 3-6 months."
        },
        {
            question: "Do ecommerce companies in Coimbatore provide SEO services?",
            answer:
                "Yes, most reputable agencies offer SEO as an add-on. Basic technical SEO is usually included, while monthly SEO packages typically range from ₹15,000 to ₹40,000."
        }
    ];

    return (
        <section className="w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">
                <h1 className="mx-auto max-w-[700px] text-[32px] font-baumans font-bold text-[#000000] sm:text-[36px]">
                    Frequently asked{" "}
                    <span className="text-[#000099]">questions</span>
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
                            className="flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 py-5 text-left sm:py-6"
                        >

                            <p className="min-w-0 text-[17px] font-bold font-baumans text-[#000000] sm:text-[20px]">
                                {items.question}
                            </p>

                            <span className="shrink-0 text-2xl font-bold sm:text-3xl">
                                {answerOpen === id ? "^" : "+"}
                            </span>

                        </button>

                        {answerOpen === id && (
                            <div className="border-t border-gray-200 pb-5 pt-4 sm:pb-6 sm:pt-5">
                                <p className="text-[14px] font-poppins font-normal leading-6 text-[#54595f] sm:text-[15px]">
                                    {items.answer}
                                </p>
                            </div>
                        )}

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Blog2QuestionCard;