"use client";

import {Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import {FaTruck} from "react-icons/fa6"

function TravelIndustryProblem() {

    const challenges = [
        "Heavy OTA dependence — paying 15–25% commission to MakeMyTrip, Booking.com, and Airbnb on every reservation",
        "No direct booking engine — guests can't book directly from the hotel website, so all online traffic converts through OTAs",
        "Manual reservation management — bookings recorded in registers, double-bookings happening, housekeeping out of sync",
        "No guest data ownership — OTAs keep the guest relationship, so there's no way to reach past guests with offers",
        "Tour operators running on WhatsApp — no booking system, no itinerary builder, and no way to scale beyond referrals",
        "Poor in-stay guest experience — no digital concierge, no mobile check-in, and no way for guests to request services"
    ];

    const solutions = [
        "Direct booking engine on your website — guests book at your best rate, zero OTA commission on every direct reservation",
        "Channel manager that syncs rates and availability across all OTAs and your direct channel from one dashboard",
        "Property Management System — front desk, housekeeping, billing, and check-in/check-out in one unified platform",
        "Guest CRM — own every guest profile, preferences, and history for personalised WhatsApp re-marketing and loyalty",
        "Tour booking platform — itinerary builder, online payment, custom packages, and a travel agent portal for B2B",
        "Guest experience app — digital room service, concierge requests, spa booking, and mobile check-in via QR"
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
                            <FaTruck className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common Travel & Hospitality Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                               What businesses face before going digital
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
                                Purpose-built technology for travel and hospitality
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

export default TravelIndustryProblem;