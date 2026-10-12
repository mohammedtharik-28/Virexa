"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function TravelQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Can your booking engine sync with MakeMyTrip, Booking.com, and Airbnb simultaneously?",
            answer:
                "Yes — our channel manager maintains two-way sync with all major OTAs including MakeMyTrip, Booking.com, Airbnb, Agoda, Expedia, and Goibibo. When a booking comes in from any channel, availability is instantly reduced across all others — preventing double-bookings. Rate updates made in your dashboard propagate to every OTA within seconds. You manage everything from one place, and all channels reflect it in real time.",
        },
        {
            question: "How does dynamic pricing work in your hotel booking system?",
            answer:
                "Our dynamic pricing engine adjusts room rates automatically based on rules you define — occupancy thresholds, days until check-in, competitor rates (via rate intelligence), and seasonal demand patterns. For example, you can set rates to increase by 20% when occupancy exceeds 80%, or drop by 10% when availability is high with check-in 7+ days away. All adjustments can be reviewed and overridden from your dashboard at any time.",
        },
        {
            question: "How do you handle GST on hotel bookings — 12% vs 18%?",
            answer:
                "Indian hotel GST is fully built in — 12% GST for rooms tariffed below ₹7,500 per night and 18% for rooms above ₹7,500. The system automatically applies the correct rate based on the room's declared tariff, generates GST-compliant tax invoices with CGST/SGST split for intrastate and IGST for interstate guests, and produces GST reports ready for quarterly filing. We also handle input tax credit tracking for hotels claiming ITC on expenses.",
        },
        {
            question: "Can the platform manage multiple properties under one account?",
            answer:
                "Yes — multi-property management is built in. Each property has its own inventory, rates, availability calendar, and booking engine, but a group admin sees consolidated revenue, occupancy, and performance reporting across all properties. You can also cross-sell properties — guests booking one resort see availability at your sister properties. Chains with 2 to 50+ properties use the same platform.",
        },
        {
            question: "How long does it take to build and launch a hotel booking engine?",
            answer:
                "A direct booking engine with channel manager integration, payment gateway, and basic PMS typically takes 4–6 weeks. A full hotel platform with guest app, loyalty programme, and multi-property support takes 8–12 weeks. A complete travel booking portal with GDS flight search, hotel, and package booking takes 12–16 weeks. We always do a test booking end-to-end before going live to ensure zero booking errors on launch day.",
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

export default TravelQuestionCard;