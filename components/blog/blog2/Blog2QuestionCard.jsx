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
        <section className="px-70 py-25">

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
                            className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
                        >

                            <p className="font-bold text-[20px] font-baumans text-[#000000]">
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

        </section>
    );
}

export default Blog2QuestionCard;