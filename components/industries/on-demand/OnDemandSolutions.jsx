"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function OnDemandSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "Dealership Operations",
            label: "Solution 01",
            title: "Dealership Operations Dealership Management System",
            description:
                "A complete DMS for vehicle dealerships — centralised inventory management across all branches, an automotive CRM with lead pipeline, deal tracking, finance and insurance management, and a performance dashboard for every sales consultant.",
            points: [
                "Multi-branch vehicle inventory with real-time sync",
                "Lead management — walk-in, digital enquiry & test drive scheduling",
                "Deal desk — quotation, negotiation, and booking workflow",
                "Finance & insurance (F&I) product management",
                "Sales consultant KPI dashboard and leaderboard",
                "OEM report generation — manufacturer-ready sales reports",
            ],
            button: "Build Your DMS",
            href: "/contact",
        },
        {
            tab: "Vehicle Marketplace",
            label: "Solution 02",
            title: "Online Presence Vehicle Marketplace Website & Buyer App",
            description:
                "A branded vehicle marketplace where buyers can browse your entire new and used car inventory — with high-quality photos, detailed specs, video walkthroughs, price comparison, EMI calculator, and a direct WhatsApp enquiry flow. Available as a website and mobile app.",
            points: [
                "Full vehicle listing — photos, 360° view, specs & features",
                "Advanced search and filter — make, model, year, price, fuel type",
                "EMI calculator with bank-specific loan estimates",
                "Compare vehicles side-by-side — up to 3 models",
                "Instant WhatsApp enquiry and test drive booking",
                "SEO-optimised listing pages — rank for local searches",
            ],
            button: "Launch Your Marketplace",
            href: "/contact",
        },
        {
            tab: "Automotive Service Management",
            label: "Solution 03",
            title: "After-Sales Service Automotive Service Management & Garage App",
            description:
                "A complete service management platform for dealership service centres and independent garages — digital job cards, technician task assignment, vehicle service history per VIN, and automated WhatsApp reminders for upcoming service intervals and insurance renewals.",
            points: [
                "Digital job cards — check-in, job assignment, and sign-off",
                "Complete service history per vehicle VIN",
                "Spare parts inventory and consumption tracking",
                "Live service status updates to customers via WhatsApp",
                "Automated service due, insurance & PUC renewal reminders",
                "GST-compliant service invoicing and payment collection",
            ],
            button: "Build Your Service Platform",
            href: "/contact",
        },
        {
            tab: "Intelligence Platform",
            label: "Solution 04",
            title: "Fleet Intelligence Fleet Telematics & Vehicle Intelligence Platform",
            description:
                "A real-time fleet intelligence platform for automotive fleet operators — live GPS tracking, driver behaviour scoring, fuel consumption monitoring, predictive maintenance alerts, and compliance management for commercial vehicle fleets of any size.",
            points: [
                "Real-time GPS tracking with geo-fence alerts",
                "Driver behaviour — harsh braking, acceleration, overspeeding",
                "Fuel consumption tracking and theft detection",
                "Predictive maintenance — service due alerts per odometer",
                "Vehicle document management — RC, insurance, PUC expiry alerts",
                "Trip logs, idle time reports, and fleet utilisation analytics",
            ],
            button: "Build Your Fleet Platform",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-12 xl:px-26">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center">
                    <p className="font-baumans text-base font-bold text-[#000099]">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto mt-4 w-full max-w-[750px] pb-2 font-baumans text-[30px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                        On-Demand Platforms{" "}
                        <span className="text-[#000099]">
                            Across Every Vertical
                        </span>
                    </h1>

                    <p className="mx-auto max-w-[730px] font-poppins text-[14px] font-normal leading-6 text-[#54595f]">
                        From dealership management systems and vehicle marketplaces to garage service apps and fleet telematics — we build every layer of automotive technology that helps businesses operate smarter and sell more.
                    </p>
                </div>

                {/* Solutions Tabs and Content */}
                <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
                    {/* Left Tabs */}
                    <div className="flex flex-col gap-2">
                        {solutions.map((solution, index) => (
                            <button
                                key={solution.tab}
                                type="button"
                                onClick={() => setActiveTab(index)}
                                aria-pressed={activeTab === index}
                                className={`w-full cursor-pointer rounded-[4px] px-7 py-5 text-left font-baumans text-[20px] font-bold leading-[1.5] transition-colors duration-200 sm:text-[22px] ${activeTab === index
                                        ? "bg-[#f1f0f8] text-[#000099]"
                                        : "bg-transparent text-[#eeeeee] hover:text-[#000099]"
                                    }`}
                            >
                                {solution.tab}
                            </button>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div
                        key={activeTab}
                        className="min-w-0 lg:pt-1"
                    >
                        <p className="font-baumans text-[16px] font-bold text-[#000099]">
                            {selectedSolution.label}
                        </p>

                        <h2 className="mt-6 font-baumans text-[21px] font-bold leading-[1.4] tracking-tight text-black sm:text-[22px]">
                            {selectedSolution.title}
                        </h2>

                        <p className="mt-4 font-poppins text-[14px] font-medium leading-[1.8] text-[#54595f]">
                            {selectedSolution.description}
                        </p>

                        {/* Feature List */}
                        <ul className="mt-8 space-y-3">
                            {selectedSolution.points.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-poppins text-[14px] font-medium leading-6 text-[#54595f]"
                                >
                                    <CircleCheck
                                        className="mt-[3px] h-[16px] w-[16px] shrink-0 fill-[#1000b5] text-white"
                                        strokeWidth={3}
                                    />

                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <Link
                            href={selectedSolution.href}
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1000b5] py-1.5 pl-5 pr-2 font-poppins text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#000080]"
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
            </div>
        </section>
    );
}

export default OnDemandSolutions;
