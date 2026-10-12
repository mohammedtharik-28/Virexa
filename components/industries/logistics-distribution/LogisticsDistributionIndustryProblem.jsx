"use client";

import {Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import {FaBold} from "react-icons/fa6"

function LogisticsDistributionIndustryProblem() {

    const challenges = [
        "No real-time shipment visibility — customers calling constantly for updates with no self-serve tracking",
        "Manual route planning — drivers taking inefficient routes, inflating fuel costs and delivery times",
        "aper-based PODs (Proof of Delivery) — disputes, delays, and reconciliation nightmares at month-end",
        "Warehouse chaos — no bin locations, manual stock counts, and mis-picks causing returns and rework",
        "Fleet underutilised — no vehicle tracking, idle time visibility, or maintenance scheduling system",
        "Disconnected systems — TMS, WMS, and billing running on separate spreadsheets with no integration"
    ];

    const solutions = [
        "Live GPS tracking with a customer-facing shipment portal and automated SMS/WhatsApp status updates",
        "AI-powered route optimisation that reduces fuel consumption by up to 30% and increases drops per route",
        "Digital ePOD with photo capture, e-signature, and instant sync to the billing and dispute system",
        "Warehouse Management System with bin locations, barcode scanning, pick-pack workflows, and cycle counts",
        "Fleet telematics — live vehicle tracking, driver behaviour scoring, maintenance alerts, and utilisation reports",
        "Unified TMS + WMS + billing platform — one system of record for every movement, stock, and invoice"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Logistics & Distribution{" "}
                        <span className="text-[#000099]">
                            Businesses Face
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        Logistics is a complex, low-margin industry where poor or missing technology slows growth. Manual processes, low visibility, and disconnected systems hold businesses back.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <FaBold className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common Logistics & Distribution Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                               What businesses struggle with before digital transformation
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
                                Technology solutions that address each challenge directly
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

export default LogisticsDistributionIndustryProblem;