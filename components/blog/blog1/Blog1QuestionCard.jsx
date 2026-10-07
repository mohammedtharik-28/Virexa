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

export default Blog1QuestionCard;