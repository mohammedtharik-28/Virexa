"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function HealthcareQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Is your software ABDM-compliant and can it generate ABHA IDs?",
            answer:
                "Yes — ABDM compliance is built into every healthcare platform we develop. This includes ABHA ID generation for new patients, linking existing health records to ABHA, and connecting to the NHA Health Records Gateway so patients can access their records via the ABHA app. We handle the full NHA sandbox and production onboarding process as part of the project.",
        },
        {
            question: "Can you migrate our existing patient records from our current software?",
            answer:
                "Yes — data migration is a standard part of every HMS project. We extract data from your current system (another HMS, Excel, or a legacy custom system), clean and normalise it, and import it into the new platform. We run a full reconciliation check before go-live to ensure no patient record is lost or corrupted. Migration is done on staging first and pushed to production only after your team's sign-off.",
        },
        {
            question: "Does the system work if the internet goes down at our clinic?",
            answer:
                "Yes — offline capability is a core design requirement for all clinic-facing systems we build. OPD can continue running — appointments, clinical notes, and billing all work locally and sync automatically when connectivity is restored. We design for Indian healthcare realities, including power outages and internet disruptions.",
        },
        {
            question: "Can the HMS handle TPA claims and Ayushman Bharat billing?",
            answer:
                "Yes — our HMS includes a complete TPA and insurance claims module supporting pre-authorisation, cashless claim forms, discharge summaries linked to claims, and claim tracking. We integrate with major TPAs including Medi Assist, Raksha TPA, Star Health, and government schemes including PM-JAY. All claim documents are generated in the required formats.",
        },
        {
            question: "How do you ensure patient data privacy and security?",
            answer:
                "Patient data security is non-negotiable. Our platforms use end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), role-based access control, full audit trails of every record access and modification, and are hosted on HIPAA-eligible AWS infrastructure. We provide a detailed data processing agreement and security architecture document for your legal and compliance team.",
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

export default HealthcareQuestionCard;