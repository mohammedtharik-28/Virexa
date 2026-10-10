"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function IotDevelopmentQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "Do you handle both hardware and software, or just software?",
            answer:
                "We handle the complete IoT stack — hardware selection and prototyping, firmware development, connectivity layer, cloud backend, real-time dashboard, and mobile apps. You don't need separate hardware and software vendors. If you already have hardware, we can work with your existing devices and build the software stack around them.",
        },
        {
            question: "How fast can you get a working prototype?",
            answer:
                "For a typical IoT prototype — a device collecting sensor data and sending it to a cloud dashboard — we can have something working within 2 weeks of project kick-off. This gives you a real data-flowing demonstration you can show stakeholders before committing to full-scale development. Complex hardware with custom PCB design takes longer, typically 4–6 weeks for the first working unit.",
        },
        {
            question: "Which cloud platform do you recommend — AWS, Azure, or GCP?",
            answer:
                "All three are viable — our recommendation depends on your existing cloud footprint, budget, compliance requirements, and scale. AWS IoT Core is most commonly used for its ecosystem depth and pricing. Azure IoT Hub is the right choice if your business already runs Microsoft workloads. GCP IoT works well for high-volume analytics use cases. If you have no preference, we recommend AWS IoT Core for most projects.",
        },
        {
            question: "Can the system scale from a 10-device pilot to 10,000 devices?",
            answer:
                "Yes — we architect for your target scale from day one. This means using managed IoT services (AWS IoT Core, etc.) that auto-scale, time-series databases designed for high write throughput, and efficient MQTT broker configurations. A pilot with 10 devices and a fleet of 10,000 devices run on the same codebase — you don't rebuild when you scale up.",
        },
        {
            question: "How do you handle OTA (over-the-air) firmware updates?",
            answer:
                "OTA update capability is built into the firmware from the start, not added later. We use signed firmware images to prevent tampering, staged rollouts (update 5% of fleet first, monitor, then roll out to all), automatic rollback on failure, and a management dashboard where you can push updates to specific device groups. No manual firmware flashing needed in the field.",
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

export default IotDevelopmentQuestionCard;