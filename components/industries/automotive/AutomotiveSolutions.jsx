"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function AutomotiveSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "Fleet & TMS",
            label: "Solution 01 — Transport Management",
            title: "Fleet Management & Transport Management System",
            description:
                "A complete TMS that gives you real-time visibility over your entire fleet — live GPS tracking, AI-powered route optimisation, driver management, and automated billing — all in one platform built for Indian logistics operations.",
            points: [
                "Real-time GPS vehicle tracking with geo-fence alerts",
                "AI route optimisation — reduce fuel costs by up to 30%",
                "Trip planning, load assignment & manifest generation",
                "Driver behaviour scoring & fatigue monitoring",
                "Vehicle maintenance scheduler & compliance tracking",
                "Automated freight billing & customer invoicing",
            ],
            button: "Build Your TMS",
            href: "/contact",
        },
        {
            tab: "Warehouse Management",
            label: "Solution 02 — Warehouse Operations",
            title: "Warehouse Management System (WMS)",
            description:
                "A purpose-built WMS that brings order to your warehouse — from inbound receiving and bin location management to pick-pack workflows, cycle counts, and despatch — with barcode scanning and mobile-first operations.",
            points: [
                "Bin location management & putaway optimisation",
                "Barcode & QR scanning for receiving, picking & despatch",
                "Wave picking, batch picking & zone-based workflows",
                "Real-time inventory with cycle count & reconciliation",
                "Returns & reverse logistics management",
                "Multi-warehouse & 3PL client segregation support",
            ],
            button: "Build Your WMS",
            href: "/contact",
        },
        {
            tab: "Last-Mile Delivery App",
            label: "Solution 03 — Last-Mile Operations",
            title: "Last-Mile Delivery App for Drivers & Dispatchers",
            description:
                "A mobile-first delivery management platform for field operations — driver apps with optimised route lists, offline capability, digital ePOD with photo and signature, and a dispatcher dashboard for real-time visibility and exception management.",
            points: [
                "Driver app — iOS & Android with offline mode",
                "Optimised delivery sequence & in-app navigation",
                "Digital ePOD — photo, OTP, and e-signature capture",
                "Failed delivery workflows with re-scheduling options",
                "Dispatcher dashboard — live fleet map & exception alerts",
                "Automated customer SMS & WhatsApp delivery ETA",
            ],
            button: "Build Your Delivery App",
            href: "/contact",
        },
        {
            tab: "Shipment Tracking Portal",
            label: "Solution 04 — Shipment Visibility",
            title: "Real-Time Shipment Tracking Portal",
            description:
                "Give customers complete visibility over their shipments with a centralised tracking portal featuring real-time shipment updates, estimated delivery times, automated notifications, and proof of delivery.",
            points: [
                "Real-time shipment tracking across multiple carriers",
                "Live delivery status and estimated arrival times",
                "Automated SMS, email & WhatsApp notifications",
                "Branded customer tracking portal",
                "Digital proof of delivery with photo and signature",
                "Shipment analytics, reports & delivery performance",
            ],
            button: "Build Your Tracking Portal",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-26">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-black sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Technology Built for{" "}
                        <span className="text-[#000099]">
                            Logistics & Distribution
                        </span>
                    </h1>

                    <p className="mx-auto font-poppins text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We build the technology modern logistics businesses
                        need — from fleet management and warehouse operations
                        to last-mile delivery and shipment visibility.
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
                <div
                    key={activeTab}
                    className="min-w-0 lg:pl-0"
                >
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

export default AutomotiveSolutions;