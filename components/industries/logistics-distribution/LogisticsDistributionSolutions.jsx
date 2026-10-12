
"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function LogisticsDistributionSolutions() {
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
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-30">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Technology Built for{" "}
                        <span className="text-[#000099]">
                            Logistics & Distribution
                        </span>
                    </h1>

                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We build the technology modern logistics businesses
                        need — from fleet management and warehouse operations
                        to last-mile delivery and shipment visibility.
                    </p>
                </div>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 pt-30 gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
                <div className="flex flex-col gap-2">
                    {solutions.map((solution, index) => (
                        <button
                            key={solution.tab}
                            type="button"
                            onClick={() => setActiveTab(index)}
                            aria-pressed={activeTab === index}
                            className={`w-full rounded-md px-8 py-6 text-left cursor-pointer text-[22px] font-bold font-baumans transition-colors duration-200 ${
                                activeTab === index
                                    ? "bg-[#f1f0f8] text-[#000099]"
                                    : "bg-transparent text-gray-200"
                            }`}
                        >
                            {solution.tab}
                        </button>
                    ))}
                </div>

                <div key={activeTab} className="min-w-0">
                    <p className="text-base font-bold text-[#000099] text-[16px] font-baumans">
                        {selectedSolution.label}
                    </p>

                    <h2 className="mt-6 text-[22px] font-bold font-baumans text-[#000000] leading-tight tracking-tight text-black sm:text-[22px]">
                        {selectedSolution.title}
                    </h2>

                    <p className="mt-4 text-[14px] leading-6 text-[#54595f] font-poppins font-medium sm:max-w-[700px] md:max-w-[450px] lg:max-w-[700px]">
                        {selectedSolution.description}
                    </p>

                    <ul className="mt-10 space-y-4">
                        {selectedSolution.points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-[14px] leading-6 text-[#54595f] font-poppins font-medium"
                            >
                                <CircleCheck
                                    className="mt-1 h-[20px] w-[20px] shrink-0 fill-[#1000b5] text-white"
                                    strokeWidth={2.5}
                                />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={selectedSolution.href}
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1000b5] py-1.5 pl-5 pr-2 text-[13px] font-poppins font-semibold text-[#ffffff] transition-colors hover:bg-[]"
                    >
                        {selectedSolution.button}

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1000b5]">
                            <ArrowUpRight size={21} strokeWidth={3.5} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LogisticsDistributionSolutions;
