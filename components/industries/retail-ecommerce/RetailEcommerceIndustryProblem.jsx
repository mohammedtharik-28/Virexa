"use client";

import { Store, Puzzle, MinusCircle, CircleCheck } from "lucide-react";

function RetailEcommerceIndustryProblem() {

    const challenges = [
        "Poor website performance — slow page speeds causing cart abandonment and lost organic rankings",
        "Siloed inventory — online store, physical store, and warehouses not in sync, causing overselling",
        "High cart abandonment with no personalised recovery flows or smart re-engagement",
        "No loyalty programme — customers buying once and not returning because there's no incentive",
        "Manual order management and fulfilment — errors, delays, and angry customers at scale",
        "Inability to sell across multiple channels — website, marketplaces, social commerce — from one backend"
    ];

    const solutions = [
        "High-performance storefronts with 95+ PageSpeed scores, Core Web Vitals compliance, and edge CDN delivery",
        "Centralised inventory management system that syncs real-time across all channels and warehouses",
        "Automated cart recovery, browse abandonment flows, and personalised product recommendations via AI",
        "Custom loyalty and rewards platform with points, tiers, referrals, and WhatsApp-first engagement",
        "Automated order management — OMS, WMS, and logistics integration with Shiprocket and Delhivery",
        "Unified commerce backend — manage all channels including Meesho, Flipkart, Amazon, and your own store"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                       The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Retail & E-Commerce{" "}
                        <span className="text-[#000099]">
                            Businesses Face
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">The retail landscape has never been more competitive or more complex. Customer expectations are higher, margins are tighter, and the technology decisions you make today directly determine your ability to scale tomorrow. Here’s what we hear from clients before they work with us — and what we do about it.</p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <Store className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common Retail & E-Commerce Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                What businesses struggle with before transforming
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

export default RetailEcommerceIndustryProblem;