"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function AutomotiveQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Can your DMS integrate with OEM portals like Maruti's DMS, Hyundai HDMS, or Tata's systems?",
            answer:
                "Yes — we integrate with major OEM DMS portals via their available APIs and data exchange formats. This includes bidirectional sync for vehicle stock updates, booking confirmations, service history, and manufacturer report generation. For OEMs with limited API access, we build middleware connectors that maintain data consistency between your platform and the OEM portal without manual re-entry.",
        },
        {
            question: "Can the platform verify RC and vehicle ownership details via VAHAN?",
            answer:
                "Yes — we integrate with the VAHAN (Ministry of Road Transport) database via the official API to verify vehicle registration details, ownership history, RC validity, insurance status, and FASTag linkage. This is essential for used car dealerships conducting due diligence, for service centres checking vehicle details, and for fleet operators maintaining compliance records.",
        },
        {
            question: "How does your fleet telematics platform work — do we need to install hardware?",
            answer:
                "For full telematics (GPS, speed, fuel monitoring, engine diagnostics), a GPS tracker device is installed in each vehicle — we work with standard OBD-II plug-in trackers or hardwired units depending on your fleet type. We integrate with hardware from providers like Uffizu, TrackoBit, and others. For light-use tracking without hardware, we support mobile app-based driver tracking. We'll recommend the right approach based on your fleet composition and budget during discovery.",
        },
        {
            question: "Can the system work for both new car and used car inventory in the same platform",
            answer:
                "Yes — our DMS supports new and pre-owned vehicle inventory with different workflows for each. New vehicles have OEM-linked stock and fixed pricing while used vehicles have individual inspection records, valuation history, refurbishment costs, and flexible pricing. Both appear on the marketplace with appropriate labels, and the management dashboard treats them differently from a pricing, compliance, and reporting perspective.",
        },
        {
            question: "How do you handle multi-outlet and multi-brand setups in the DMS?",
            answer:
                "Multi-outlet and multi-brand is built in from day one. Each outlet operates independently with its own inventory, leads, and reports — but the group admin sees consolidated performance across all outlets and brands. Stock transfers between outlets are tracked, inter-outlet leads can be assigned, and brand-specific reporting is automatically generated for each OEM. Adding a new outlet or brand is a configuration task, not a development task.",
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

export default AutomotiveQuestionCard;