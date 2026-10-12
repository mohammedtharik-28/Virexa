"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function FoodSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "Food Ordering App",
            label: "Solution 01 — Direct Ordering",
            title: "Branded Food Ordering App & Website",
            description:
                "Your own commission-free ordering platform — a beautiful branded app on iOS and Android plus a mobile-optimised website where customers order directly from you, pay online, and track their delivery in real time.",
            points: [
                "iOS & Android app — your brand, not Zomato's",
                "Zero commission — every order is 100% yours",
                "Razorpay, UPI, cards, cash on delivery",
                "Real-time order tracking with live ETA",
                "Loyalty points, offers, and promo codes built in",
                "Push notifications for offers and order updates",
            ],
            button: "Launch Your Ordering App",
            href: "/contact",
        },
        {
            tab: "Restaurant Management",
            label: "Solution 02 — Operations",
            title: "Restaurant Management System & POS",
            description:
                "A complete restaurant OS — from tableside POS and billing to kitchen display, inventory, staff management, and daily reports — all connected in one platform so your front-of-house and back-of-house run seamlessly together.",
            points: [
                "Touch POS — dine-in, takeaway, and delivery billing",
                "KDS — kitchen display system for order management",
                "Recipe & raw material inventory tracking",
                "Table management — reservations, seating, wait times",
                "GST billing — CGST, SGST & IGST auto-calculation",
                "Daily P&L, sales reports & wastage tracking",
            ],
            button: "Modernise Your Restaurant",
            href: "/contact",
        },
        {
            tab: "Cloud Kitchen",
            label: "Solution 03 — Cloud Kitchen",
            title: "Cloud Kitchen & Multi-Brand Management Software",
            description:
                "Run multiple virtual brands from a single kitchen with complete operational visibility — order aggregation from all platforms, per-brand analytics, kitchen routing, and a single POS for all your brands.",
            points: [
                "Aggregate orders from Zomato, Swiggy & direct channels",
                "Multi-brand kitchen routing on one KDS screen",
                "Per-brand P&L — know which brand is profitable",
                "Packaging station management & delivery boy allocation",
                "Menu management — update all platforms from one place",
                "Peak hour analytics & staff planning recommendations",
            ],
            button: "Modernise Your Operations",
            href: "/contact",
        },
        {
            tab: "Table & QR Ordering",
            label: "Solution 04 — Dine-In Experience",
            title: "QR Code Menu & Contactless Table Ordering",
            description:
                "Let guests scan, browse, order, and pay from their own phone — no physical menus, no waiting for a waiter. A beautiful digital menu with instant kitchen connectivity that speeds up table turns and increases average order value.",
            points: [
                "Scan-to-order QR at every table — no app download needed",
                "Digital menu with photos, allergens & modifiers",
                "Direct-to-KDS order flow — no waiter needed",
                "In-seat payment — UPI, cards, split bill",
                "Upsell suggestions & combo recommendations",
                "Post-meal Google review & feedback prompt",
            ],
            button: "Set Up QR Ordering",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-26">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-black sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Technology Built for{" "}
                        <span className="text-[#000099]">
                            Food & Restaurants
                        </span>
                    </h1>

                    <p className="mx-auto font-poppins text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We build digital solutions for restaurants, cloud
                        kitchens, and food businesses — from direct ordering
                        and POS to kitchen operations and contactless dining.
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

export default FoodSolutions;
