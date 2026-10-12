"use client";

import { Puzzle, MinusCircle, CircleCheck } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa6"

function EducationIndustryProblem() {

    const challenges = [
        "Over-reliance on YouTube and WhatsApp — no branded platform, no monetisation control, no student data",
        "Low course completion rates — students enrol, watch a few videos, and never finish without engagement nudges",
        "No live class infrastructure — juggling Zoom links and WhatsApp scheduling with no integrated experience",
        "Manual fee collection and batch management — spreadsheets, missed reminders, and reconciliation headaches",
        "No progress tracking or performance analytics — no visibility into which students are struggling or dropping off",
        "Using third-party LMS platforms — paying per-student fees that scale against you as your enrolments grow"
    ];

    const solutions = [
        "Your branded LMS and mobile app — your domain, your brand, your data. Zero per-student fees to any third party",
        "Gamification, streaks, certificates, and automated WhatsApp nudges that increase completion rates by up to 3.5×",
        "Integrated live class module — schedule, attend, record, and replay all within your own platform",
        "Automated fee collection, batch enrolment, and renewal reminders — zero manual intervention needed",
        "Student progress dashboard with per-lesson analytics, quiz scores, and at-risk learner identification",
        "One-time custom build — you own the codebase and pay no recurring licence fee as your student base grows"
    ];

    return (
        <section className="w-full px-3 py-25 sm:px-6 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        The Industry Problem
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        What Education & E-Learning Businesses{" "}
                        <span className="text-[#000099]">
                            Struggle With
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        The EdTech market is booming — but building a learning platform that actually retains students, drives course completion, and scales without breaking is harder than most founders expect. Here’s what we hear consistently from education businesses before they work with us.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid w-full pt-28 max-w-[1440px] grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-12">

                <div className="rounded-[20px] border border-rose-200 bg-[#fff4f4] px-5 py-6 sm:px-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3]">
                            <FaGraduationCap className="h-5 w-5 text-[#ff1685]" strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-[20px] font-semibold font-baumans leading-6 text-[#000000]">
                                Common EdTech Challenges
                            </h2>

                            <p className="mt-2 text-[14px] leading-5 text-[#54595f] font-poppins font-medium">
                                What education businesses face before digital transformation
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

export default EducationIndustryProblem;