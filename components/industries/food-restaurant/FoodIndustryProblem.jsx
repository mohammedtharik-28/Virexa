"use client";

import { Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import { FaUtensils } from "react-icons/fa6"

function FoodIndustryProblem() {

    const challenges = [
        "Over-dependence on Zomato and Swiggy — 30%+ commission eating into already thin margins",
        "No direct ordering channel — no way to take orders without paying a cut to third-party platforms",
        "Manual order taking and kitchen communication — errors, delays, and missed orders during peak hours",
        "No customer data ownership — platforms keep your customers, so you can never market to them directly",
        "No loyalty system — customers reordering through aggregators with no brand relationship or repeat incentive",
        "Inventory waste — no real-time tracking of raw material usage, leading to over-ordering and spoilage"
    ];

    const solutions = [
        "Your own branded ordering app and website — take orders directly with zero commission to third parties",
        "QR code table ordering, pre-order, scheduled pickup, and delivery — all from one platform you own",
        "Digital KDS (Kitchen Display System) — orders flow direct to kitchen screens, no missed tickets",
        "Full customer data ownership — build your own CRM, segment customers, and retarget via WhatsApp",
        "Loyalty and rewards programme — points, cashback, birthday offers, and automated re-engagement",
        "Inventory and recipe management — track raw material usage per dish and reduce waste by up to 25%"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Food & Restaurant Businesses{" "}
                        <span className="text-[#000099]">
                            Struggle With
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        The food industry is operationally intense, margin-thin, and brutally competitive. Whether you’re a single restaurant or a 50-outlet QSR chain, the technology you run on either creates advantage or creates chaos. Here’s what we consistently hear from F&B businesses before they work with us.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <FaUtensils className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common F&B Technology Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                               What restaurants and food businesses face before transforming
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
                                Technology built specifically for logistics operations
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

export default FoodIndustryProblem;