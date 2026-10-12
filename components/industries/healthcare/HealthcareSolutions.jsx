"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function HealthcareSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "Doctor Appointment App",
            label: "Solution 01 — Patient Engagement",
            title: "Doctor Appointment Booking App & Patient Portal",
            description:
                "A branded patient app that makes booking, rescheduling, and follow-up completely self-serve — reducing no-shows with automated reminders, giving patients their records on demand, and freeing your front desk from the phone.",
            points: [
                "Online slot booking with real-time doctor availability",
                "WhatsApp & SMS appointment reminders — cut no-shows by 40%",
                "Patient health record access — reports, prescriptions, history",
                "Online consultation fees — Razorpay, UPI, insurance claim upload",
                "Multi-specialty & multi-branch — one app for your whole network",
                "Post-visit feedback & Google review prompt built in",
            ],
            button: "Build Your Patient App",
            href: "/contact",
        },
        {
            tab: "Hospital Management",
            label: "Solution 02 — Operations",
            title: "Hospital & Clinic Management System (HMS)",
            description:
                "A complete hospital operating system — OPD, IPD, billing, pharmacy, lab, and HR — all connected in a single platform so your clinical and administrative teams work from one source of truth instead of five disconnected systems.",
            points: [
                "OPD & IPD management with bed allocation tracking",
                "EHR — SOAP notes, e-prescriptions, medical history",
                "Billing — OPD fees, IPD bills, insurance & TPA claims",
                "Pharmacy & lab integrated — prescriptions flow direct to dispensing",
                "OT scheduling, surgical notes & consent management",
                "Admin dashboard — revenue, occupancy & department analytics",
            ],
            button: "Build Your HMS",
            href: "/contact",
        },
        {
            tab: "Telemedicine Platform",
            label: "Solution 03 — Remote Care",
            title: "Telemedicine & Video Consultation Platform",
            description:
                "A secure, HIPAA-compliant telemedicine platform that lets your doctors consult patients over HD video, issue digital prescriptions, share lab results, and schedule follow-ups — all without either party stepping outside their door.",
            points: [
                "HD video consultation — works on 3G, no app download required",
                "Digital e-prescription with pharmacovigilance alerts",
                "Secure document sharing — reports, scans, prior prescriptions",
                "Online payment before consultation — no cash handling",
                "Consultation recording with patient consent for medico-legal",
                "ABDM-linked — consult notes sync to patient's ABHA record",
            ],
            button: "Launch Telemedicine",
            href: "/contact",
        },
        {
            tab: "Lab & Diagnostic (LIMS)",
            label: "Solution 04 — Diagnostics",
            title: "Lab & Diagnostic Centre Management (LIMS)",
            description:
                "A complete LIMS for diagnostic centres and pathology labs — from test order entry and barcode sample tracking to result entry, report generation, and automatic WhatsApp delivery to patients and referring doctors.",
            points: [
                "Test order entry — online, walk-in, and doctor referral",
                "Barcode sample tracking from collection to result",
                "Result entry with reference range validation & critical alerts",
                "Branded report auto-delivered on WhatsApp & email",
                "Home collection scheduling with phlebotomist app",
                "B2B panel billing for corporate and hospital clients",
            ],
            button: "Build Your LIMS",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-0">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-black sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Technology Built for{" "}
                        <span className="text-[#000099]">
                            Healthcare
                        </span>
                    </h1>

                    <p className="mx-auto font-poppins text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We build connected healthcare technology that
                        streamlines patient engagement, hospital operations,
                        remote consultations, and diagnostic workflows.
                    </p>
                </div>
            </div>

            {/* Tabs and solution content */}
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 pt-16 sm:pt-20 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:pt-30">
                {/* Left navigation */}
                <div className="flex flex-col gap-2">
                    {solutions.map((solution, index) => (
                        <button
                            key={solution.tab}
                            type="button"
                            onClick={() => setActiveTab(index)}
                            aria-pressed={activeTab === index}
                            className={`w-full cursor-pointer rounded-md px-6 py-5 text-left font-baumans text-[20px] font-bold transition-colors duration-200 sm:px-8 sm:py-6 sm:text-[22px] ${
                                activeTab === index
                                    ? "bg-[#f1f0f8] text-[#000099]"
                                    : "bg-transparent text-[#e8e8e8] hover:text-[#000099]"
                            }`}
                        >
                            {solution.tab}
                        </button>
                    ))}
                </div>

                {/* Right content */}
                <div key={activeTab} className="min-w-0">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        {selectedSolution.label}
                    </p>

                    <h2 className="mt-6 font-baumans text-[22px] font-bold leading-tight tracking-tight text-black sm:text-[24px]">
                        {selectedSolution.title}
                    </h2>

                    <p className="mt-4 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                        {selectedSolution.description}
                    </p>

                    <ul className="mt-10 space-y-4">
                        {selectedSolution.points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:gap-4"
                            >
                                <CircleCheck
                                    className="mt-[3px] h-[16px] w-[16px] shrink-0 fill-[#000099] text-white"
                                    strokeWidth={2.5}
                                />

                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={selectedSolution.href}
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1000b5] py-1.5 pl-5 pr-2 font-poppins text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#000099]"
                    >
                        {selectedSolution.button}

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1000b5]">
                            <ArrowUpRight
                                size={21}
                                strokeWidth={3.5}
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HealthcareSolutions;