"use client";

import { Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import { FaBold } from "react-icons/fa6"

function OnDemandIndustryProblem() {

    const challenges = [
        "Real-time matching complexity — connecting the right provider to the right user within seconds at scale",
        "Three separate apps needed — customer, provider, and admin — each with distinct UX and logic",
        "Live GPS tracking that works on low-bandwidth networks in Tier 2 and Tier 3 Indian cities",
        "Payment splits — managing platform commission, provider payouts, refunds, and wallet credits reliably",
        "Cold start problem — building supply (providers) and demand (customers) simultaneously with no chicken-and-egg solution",
        "Surge and dynamic pricing — managing demand-supply imbalance fairly without burning trust on either side"
    ];

    const solutions = [
        "Smart dispatch engine — geospatial matching via PostGIS with configurable radius, priority, and acceptance windows",
        "Three-panel platform architecture — customer app, provider app, and admin dashboard built in parallel",
        "Real-time GPS with WebSocket streams and offline-tolerant sync for spotty network conditions",
        "Automated split payments — Razorpay Routes for instant provider payouts with platform commission deducted",
        "Provider onboarding funnel — KYC, document verification, training, and activation flow built into the platform",
        "Configurable pricing engine — surge multipliers, time-based rates, promo codes, and wallet cashback rules"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What On-Demand Startup Founders{" "}
                        <span className="text-[#000099]">
                            Get Wrong
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        Building an on-demand platform looks straightforward until you hit the real technical complexity — real-time matching, surge pricing, multi-sided trust, and the operational chaos of managing providers and users simultaneously. Here’s what founders face before they work with us.
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
                                Common On-Demand Platform Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                What founders underestimate before building
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
                               Battle-tested on-demand architecture from 120+ platforms
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

export default OnDemandIndustryProblem;