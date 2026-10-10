"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function RetailEcommerceSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "E-Commerce Store",
            label: "Solution 01 — Storefront",
            title: "High-Converting E-Commerce Store Development",
            description:
                "We build fast, beautiful, conversion-optimised e-commerce stores on Shopify, WooCommerce, or custom stacks — designed around your products, your brand, and your buyers. Every store is mobile-first, SEO-ready, and built to handle scale.",
            points: [
                "Shopify, WooCommerce & Next.js headless storefronts",
                "Conversion-optimised product pages, cart & checkout",
                "Razorpay, Stripe, PayU & UPI payment integration",
                "Logistics API — Shiprocket, Delhivery, Bluedart",
                "PageSpeed 95+ & Core Web Vitals compliance",
                "GST-compliant invoicing & tax automation",
            ],
            button: "Start Your Store",
            href: "/contact",
        },
        {
            tab: "Mobile Shopping App",
            label: "Solution 02 — Mobile Commerce",
            title: "Native Mobile Shopping App for iOS & Android",
            description:
                "Give your customers a first-class native shopping experience on iOS and Android — faster than any mobile website, with push notifications, loyalty integration, and offline browsing built in.",
            points: [
                "React Native or Flutter — one codebase, both platforms",
                "Personalised feed, wishlist, and recently viewed",
                "Push notifications for cart recovery, offers & restocks",
                "In-app payment — UPI, cards, wallets, EMI",
                "Real-time order tracking with map integration",
                "App Store & Play Store submission included",
            ],
            button: "Build Your App",
            href: "/contact",
        },
        {
            tab: "POS & Inventory",
            label: "Solution 03 — Operations",
            title: "POS System & Centralised Inventory Management",
            description:
                "A custom POS and inventory system that unifies your physical stores, warehouse, and online channels in real-time — eliminating stock discrepancies, automating reorders, and giving you full visibility across every location.",
            points: [
                "Tablet-based POS for brick-and-mortar retail",
                "Real-time inventory sync across all channels",
                "Barcode scanning, SKU management, bundle products",
                "Automated low-stock alerts & purchase order generation",
                "Multi-location warehouse & fulfilment management",
                "GST billing, daily reports & stock reconciliation",
            ],
            button: "Modernise Your Operations",
            href: "/contact",
        },
        {
            tab: "Marketplace Platforms",
            label: "Solution 04 — Marketplace",
            title: "Multi-Vendor Marketplace Platform",
            description:
                "Build your own marketplace — whether fashion, electronics, handmade crafts, or industrial goods — with vendor onboarding, commission management, and a seamless buyer experience all in one custom-built platform.",
            points: [
                "Vendor registration, KYC & product management portal",
                "Flexible commission structure & automated payouts",
                "Seller performance dashboard & ratings system",
                "Dispute management & return/refund workflows",
                "Admin dashboard — full control over platform",
                "ONDC integration ready for government network",
            ],
            button: "Modernise Your Operations",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-26">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">

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
                                    : "bg-transparent text-gray-200 "
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

                    <p className="mt-4 text-[14px] leading-6 text-[#54595f] font-poppins font-medium  sm:max-w-[700px] md:max-w-[450px] lg:max-w-[700px]">
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

export default RetailEcommerceSolutions;