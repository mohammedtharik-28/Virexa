"use client";

import { Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import { FaCar } from "react-icons/fa6"

function AutomotiveIndustryProblem() {

    const challenges = [
        "No centralised inventory — vehicles listed on paper, scattered across Excel files, and updated manually across branches",
        "Lost leads — walk-ins and online enquiries not tracked, followed up inconsistently, and never converted systematically",
        "No online presence for used vehicle stock — potential buyers can't browse inventory from their phones",
        "Service centre chaos — job cards on paper, service history untracked, and no automated reminders for upcoming services",
        "No customer retention — after the sale or service, there's no systematic way to stay in touch or bring customers back",
        "Fleet operators with no visibility — vehicles running without telematics, route data, or driver behaviour monitoring"
    ];

    const solutions = [
        "Centralised vehicle inventory — add, update, and sync stock across all branches and online listings in real time",
        "Automotive CRM with lead pipeline, automated follow-up sequences, and sales staff accountability dashboards",
        "Vehicle marketplace website and app — buyers browse your full stock with photos, specs, price, and EMI calculator",
        "Digital service management — digital job cards, service history per VIN, automated service due reminders via WhatsApp",
        "Post-sale loyalty and re-engagement — insurance renewal alerts, AMC reminders, and accessory upsell campaigns",
        "Fleet telematics — live GPS, driver scoring, fuel consumption monitoring, and maintenance alerts for every vehicle"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Automotive{" "}
                        <span className="text-[#000099]">
                            Businesses Face
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        From single-outlet dealerships to multi-brand service chains, automotive businesses run on a complex mix of inventory, customer relationships, service schedules, and compliance — most of it still managed through disconnected spreadsheets and manual processes. Here’s what we hear before they work with us.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <FaCar className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common Automotive Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                What dealerships and service businesses face daily
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
                                Purpose-built automotive technology for smarter operations
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

export default AutomotiveIndustryProblem;