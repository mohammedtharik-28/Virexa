"use client";

import { Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import { FaHeartPulse } from "react-icons/fa6"

function HealthcareIndustryProblem() {

    const challenges = [
        "Paper-based patient records — doctors wasting 30–40% of consultation time searching for or writing notes",
        "No online appointment booking — patients calling to schedule, leading to missed calls and high no-show rates",
        "Disconnected billing and clinical systems — front desk re-entering data already captured during consultation",
        "No telemedicine capability — patients travelling far for follow-ups that could happen over video",
        "Pharmacy and lab not integrated — prescriptions printed and handed over, creating errors and delays",
        "No ABDM compliance — not connected to Ayushman Bharat Digital Mission, missing government scheme patients"
    ];

    const solutions = [
        "Electronic Health Records (EHR) with structured clinical notes, medical history, prescriptions, and lab reports in one place",
        "Patient app with online booking, automated WhatsApp reminders, and self-service rescheduling — cuts no-shows by 40%",
        "Unified HMS — clinical + billing + pharmacy + lab fully integrated, no double-entry across departments",
        "Built-in telemedicine — HD video consultations, e-prescriptions, and digital follow-up notes from any device",
        "Digital prescriptions flow directly to in-house pharmacy and lab — zero manual handover, zero transcription errors",
        "ABDM-compliant ABHA ID generation, health record linking, and PHR integration as standard — not an add-on"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Healthcare & MedTech Businesses{" "}
                        <span className="text-[#000099]">
                            Struggle With
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        Healthcare is one of the most data-sensitive and operationally complex industries to build software for. Poor technology creates real patient harm, compliance risk, and staff burnout. Here’s what clinics, hospitals, and HealthTech startups consistently tell us before they work with us.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <FaHeartPulse className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common Healthcare Technology Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                What providers and MedTech companies face before transforming
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 space-y-6 pl-0">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <MinusCircle className="mt-1 h-[20px] w-[20px] shrink-0 fill-[#fb898c] text-white" />
                                <p className="text-[14px] font-poppins leading-[1.65] text-[#080808] font-medium ">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[20px] border border-indigo-100 bg-[#f0f6ff] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8eaf6]">
                            <Puzzle className="h-5 w-5 text-[#1515df]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                How Virexa Solves These
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                Secure, compliant healthcare technology built for Indian providers
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 space-y-6">
                        {solutions.map((solution, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CircleCheck className="mt-1 h-[20px] w-[20px] shrink-0 fill-[#1010df] text-white" />
                                <p className="text-[14px] font-poppins leading-[1.65] text-[#080808] font-medium ">
                                    {solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
};

export default HealthcareIndustryProblem;