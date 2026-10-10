"use client";

import { useState } from "react";

function Blog1QuestionCard() {

    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Is ecommerce profitable in Coimbatore?",
            answer:
                "Yes. Direct access to manufacturing hubs (textiles, engineering, agriculture) paired with significantly lower commercial warehouse rentals compared to Tier-1 metros allows Coimbatore-based brands to retain higher overall profit margins."
        },
        {
            question: "How much does an ecommerce website cost in Coimbatore?",
            answer:
                "A clean WooCommerce setup handled by experienced local developers typically ranges between ₹45,000 and ₹90,000. A highly customized, scalable Shopify D2C store complete with deep automation features generally ranges from ₹1,50,000 to ₹4,00,000 depending on requirements."
        },
        {
            question: "Do I need GST for ecommerce?",
            answer:
                "Yes. Under current regulatory guidelines, a valid GST registration is legally required for any business selling goods or services online across state borders in India."
        },
        {
            question: "Which ecommerce platform is best for beginners?",
            answer:
                "Shopify is widely considered the top choice for beginners due to its intuitive dashboard, fully managed hosting environment, robust security protocols, and rapid deployment capabilities."
        },
        {
            question: "How long does ecommerce SEO take to show results?",
            answer:
                "While basic local optimization can show movement within 90 days, a comprehensive ecommerce digital marketing strategy focused on competitive commercial keywords typically requires 3 to 6 months of consistent content clustering and technical optimization to secure steady first-page rankings."
        },
        {
            question: "Can I start an ecommerce business from home?",
            answer:
                "Absolutely. You can start an online business in Coimbatore from a home office by utilizing a dropshipping model or managing a low-volume, high-value inventory pool before scaling up to a commercial warehouse facility."
        }
    ];

    return (
        <section className="w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <h1 className="mx-auto max-w-[700px] text-[32px] font-baumans font-bold text-[#000000] sm:text-[36px]">
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

export default Blog1QuestionCard;