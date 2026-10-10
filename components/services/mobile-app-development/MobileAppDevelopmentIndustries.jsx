"use client";

import Image from "next/image";

import {
    HeartPulse,
    Plane,
    Utensils,
    Truck,
    GraduationCap,
    Zap,
    Car,
    ShoppingCart,
    Check,
} from "lucide-react";

function MobileAppDevelopmentIndustries() {
    const industries = [
        {
            title: "Health Care",
            description:
                "We deliver healthcare software that enhances patient services, simplifies clinical workflows, secures medical information, and improves operational efficiency across.",
            icon: HeartPulse,
            iconClass: "bg-[#fff0f7] text-[#ff62b0]",
            checkClass: "bg-[#ff62b0]",
            image: "/ServicesImage/website-development-Image/Healthcare.webp",
            points: [
                "Hospital Information Systems",
                "Electronic Health Records",
                "Telemedicine Consultation",
                "Appointment Scheduling Portal",
                "Clinical Workflow Automation",
            ],
        },
        {
            title: "Travel and Hospitality",
            description:
                "We develop travel software that simplifies reservation management, enhances guest experiences, improves operational efficiency, and supports sustainable.",
            icon: Plane,
            iconClass: "bg-[#edf4ff] text-[#6d9fff]",
            checkClass: "bg-[#6d9fff]",
            image: "/ServicesImage/website-development-Image/Travel.webp",
            points: [
                "Online Booking Platforms",
                "Hotel Management Systems",
                "Travel Planning Apps",
                "Guest Experience Tools",
                "Reservation Management",
            ],
        },
        {
            title: "Food & Restaurant",
            description:
                "We develop restaurant software that simplifies food ordering, streamlines kitchen operations, improves customer satisfaction, and supports efficient business management.",
            icon: Utensils,
            iconClass: "bg-[#fff4df] text-[#ff914d]",
            checkClass: "bg-[#ff914d]",
            image: "/ServicesImage/website-development-Image/Food.webp",
            points: [
                "Online Food Ordering",
                "Restaurant POS Systems",
                "Kitchen Display Solutions",
                "Delivery Tracking Platform",
                "Customer Loyalty Programs",
            ],
        },
        {
            title: "Logistics & Distribution",
            description:
                "We design logistics software that improves shipment visibility, optimizes warehouse operations, strengthens fleet management, and enhances supply chain performance efficiently.",
            icon: Truck,
            iconClass: "bg-[#edfff4] text-[#68cf91]",
            checkClass: "bg-[#68cf91]",
            image: "/ServicesImage/website-development-Image/Logistics.webp",
            points: [
                "Shipment Tracking Systems",
                "Warehouse Management Tools",
                "Fleet Tracking Solutions",
                "Route Optimization Engine",
                "Logistics Analytics Dashboard",
            ],
        },
        {
            title: "Education & E-Learning",
            description:
                "We build educational platforms that improve online learning, simplify course administration, increase student participation, and enhance digital classroom experiences.",
            icon: GraduationCap,
            iconClass: "bg-[#eaf0ff] text-[#536cff]",
            checkClass: "bg-[#536cff]",
            image: "/ServicesImage/website-development-Image/Education.webp",
            points: [
                "Learning Management Systems",
                "Online Course Platforms",
                "Virtual Classroom Solutions",
                "Student Progress Tracking",
                "Digital Content Management",
            ],
        },
        {
            title: "On-Demand Solutions",
            description:
                "We create scalable on-demand platforms that connect customers with services through secure technology, real-time communication, and seamless digital experiences.",
            icon: Zap,
            iconClass: "bg-[#fffbe0] text-[#f0bc55]",
            checkClass: "bg-[#f0bc55]",
            image: "/ServicesImage/website-development-Image/OnDemand.webp",
            points: [
                "On-Demand Service Apps",
                "Real-Time Tracking Systems",
                "Secure Payment Gateway",
                "Smart Booking Platform",
                "Customer Support Portal",
            ],
        },
        {
            title: "Automotive",
            description:
                "We build automotive software that enhances vehicle management, improves service operations, supports connected mobility, and delivers better customer experiences.",
            icon: Car,
            iconClass: "bg-[#e8fbff] text-[#2ca2bd]",
            checkClass: "bg-[#2ca2bd]",
            image: "/ServicesImage/website-development-Image/Automotive.webp",
            points: [
                "Vehicle Management Systems",
                "Service Booking Platforms",
                "Connected Fleet Solutions",
                "Automotive Data Analytics",
                "Customer Support Portal",
            ],
        },
        {
            title: "Retail & E-commerce",
            description:
                "We create modern retail software that streamlines online shopping, improves inventory control, strengthens customer engagement, and accelerates digital business growth.",
            icon: ShoppingCart,
            iconClass: "bg-[#f4eaff] text-[#a044ef]",
            checkClass: "bg-[#a044ef]",
            image: "/ServicesImage/website-development-Image/Retail.webp",
            points: [
                "Online Store Development",
                "Inventory Management Systems",
                "Secure Payment Gateways",
                "Customer Analytics Platform",
                "Order Tracking Solutions",
            ],
        },
    ];

    const infiniteIndustries = [...industries, ...industries];

    return (
        <section className="overflow-hidden bg-white py-16">
            <div className="mb-12 px-6 text-center sm:px-10 lg:px-10 xl:px-26 2xl:px-50">
                <p className="font-baumans text-[16px] font-bold text-[#000099] sm:text-[15px]">
                    Industries We Serve
                </p>

                <h2 className="mx-auto mt-4 max-w-[850px] font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:text-[40px] lg:text-[42px]">
                    Apps built for{" "}
                    <span className="text-[#000099]">
                        every industry
                    </span>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-industries">
                    {infiniteIndustries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <div
                                key={`${industry.title}-${index}`}
                                className="mr-6 w-[850px] shrink-0 overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-[#f8f8ff]"
                            >
                                <div className="grid min-h-[430px] grid-cols-2">
                                    <div className="p-10">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${industry.iconClass}`}
                                        >
                                            <Icon
                                                size={25}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <h3 className="mt-7 font-baumans text-[23px] font-bold text-[#111111]">
                                            {industry.title}
                                        </h3>

                                        <p className="mt-5 font-poppins text-[15px] font-medium leading-6 text-[#54595f]">
                                            {industry.description}
                                        </p>

                                        <div className="mt-7 space-y-3">
                                            {industry.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="flex items-center gap-3"
                                                >
                                                    <span
                                                        className={`flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full text-white ${industry.checkClass}`}
                                                    >
                                                        <Check
                                                            size={11}
                                                            strokeWidth={3}
                                                        />
                                                    </span>

                                                    <p className="font-poppins font-medium text-[14px] text-[#54595f]">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative flex min-h-[430px] items-center px-5 py-5">
                                        <div className="relative h-[300px] w-full overflow-hidden rounded-[20px]">
                                            <Image
                                                src={industry.image}
                                                alt={industry.title}
                                                fill
                                                sizes="400px"
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default MobileAppDevelopmentIndustries;