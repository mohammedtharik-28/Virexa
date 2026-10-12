"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FoodQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Can your app integrate with Zomato and Swiggy as well as take direct orders?",
            answer:
                "Yes — our platforms are built to work alongside Zomato and Swiggy, not replace them overnight. Orders from all channels — your own app, website, QR table ordering, Zomato, and Swiggy — appear on one unified KDS in your kitchen. The goal is to gradually shift more orders to your direct channel (where you pay zero commission) while still accepting third-party orders during the transition.",
        },
        {
            question: "How long does it take to launch a food ordering app?",
            answer:
                "A standard branded ordering app with a digital menu, online payment, and real-time order tracking typically takes 3–4 weeks from menu sign-off to App Store launch. If you also need a KDS and POS system, add 1–2 weeks. We guarantee the app is live within the agreed timeline — and we handle the App Store and Play Store submission as part of the project.",
        },
        {
            question: "Do you handle GST on food correctly — 5% vs 18%?",
            answer:
                "Yes — Indian food GST is built into every platform we develop. We handle the full structure: 5% GST for restaurants without AC, 18% for restaurants with AC and alcohol, CGST/SGST split for intrastate and IGST for interstate deliveries. All bills and receipts are GST-compliant, and we generate the reports your CA needs for quarterly filing.",
        },
        {
            question: "Can the system work across multiple outlets of my restaurant chain?",
            answer:
                "Yes — multi-outlet support is a standard feature. Each outlet has its own POS, KDS, menu (with outlet-specific items or pricing), and delivery zone configuration. Central management gives you consolidated reporting across all outlets, with the ability to drill down per outlet. Chains with 1 to 50+ outlets use the same platform.",
        },
        {
            question: "Do you integrate with existing hardware like printers and cash drawers?",
            answer:
                "Yes — we integrate with standard thermal receipt printers (Epson, Star Micronics), kitchen printers, bluetooth printers, and most cash drawers. If you have existing hardware, we'll test compatibility during setup. If you need new hardware, we advise on the most cost-effective options for your setup and help configure everything before go-live.",
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

export default FoodQuestionCard;