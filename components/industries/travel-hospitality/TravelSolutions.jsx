"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function TravelSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "Software Development",
            label: "Solution 01",
            title: "Custom Software Development Solutions",
            description:
                "We build scalable, high-performance software tailored to your business needs — from booking systems to complete management platforms.",
            points: [
                "Custom-built software tailored to workflows",
                "Scalable architecture for future growth",
                "API integrations with third-party platforms",
                "Secure and high-performance systems",
                "Cloud-based and on-premise deployment",
                "Real-time analytics and reporting",
            ],
            button: "Build Your Service Platform",
            href: "/contact",
        },
        {
            tab: "Booking App Development",
            label: "Solution 02",
            title: "Online Booking App Development",
            description:
                "Create seamless booking experiences with fast, user-friendly applications designed for web and mobile platforms.",
            points: [
                "Real-time booking and availability management",
                "Secure online payments and checkout",
                "User-friendly interface for quick reservations",
                "Automated confirmations and notifications",
                "Multi-device compatibility (web & mobile)",
                "Admin dashboard for booking control",
            ],
            button: "Build Your Service Platform",
            href: "/contact",
        },
        {
            tab: "Management Systems",
            label: "Solution 03",
            title: "Booking & Management System Development",
            description:
                "Streamline operations with powerful management systems that handle bookings, users, and business processes in one place.",
            points: [
                "Centralized dashboard for operations",
                "User and role management system",
                "Booking tracking and status updates",
                "Billing, invoicing, and reporting tools",
                "Workflow automation and task management",
                "Data security and access control",
            ],
            button: "Build Your Service",
            href: "/contact",
        },
        {
            tab: "Mobile App Solutions",
            label: "Solution 04",
            title: "Customer Experience App Development",
            description:
                "Deliver smooth and engaging mobile experiences with feature-rich apps designed to improve customer interaction and satisfaction.",
            points: [
                "Mobile-first UI/UX design",
                "Push notifications and real-time updates",
                "In-app communication and support",
                "Booking and service management features",
                "Integration with backend systems",
                "Android & iOS app development",
            ],
            button: "Build Your Service Platform",
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
                             Travel & Hospitality
                        </span>
                    </h1>

                    <p className="mx-auto font-poppins text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We create reliable digital solutions that simplify
                        business operations, improve customer experiences,
                        and support long-term growth.
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

export default TravelSolutions;
