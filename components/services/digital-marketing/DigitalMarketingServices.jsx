"use client";

import {
    Search,
    ChartNoAxesCombined,
    Users,
    FileText,
    Mail,
    ContactRound,
} from "lucide-react";

function DigitalMarketingServices() {
    const services = [
        {
            title: "Search Engine Optimisation (SEO)",
            description:
                "Rank higher, get found faster, and drive consistent organic traffic that doesn't stop when you stop paying. We build powerful SEO strategies that compound over time sustainably.",
            icon: Search,
        },
        {
            title: "Google Ads & PPC Management",
            description:
                "Performance-focused Google Ads campaigns that maximise your budget and reach qualified buyers to your site — with full transparency on every rupee spent online efficiently and strategically for growth.",
            icon: ChartNoAxesCombined,
        },
        {
            title: "Meta Ads — Facebook & Instagram",
            description:
                "Highly targeted Meta ad campaigns that reach the right audience at the right moment — from cold awareness to warm retargeting and repeat purchase campaigns.",
            icon: Users,
        },
        {
            title: "Social Media Marketing & Management",
            description:
                "Consistent, on-brand social presence across Instagram, LinkedIn, Facebook, and YouTube — with content that builds community, drives engagement, and generates inbound leads.",
            icon: ContactRound,
        },
        {
            title: "Content Marketing & Copywriting",
            description:
                "SEO-optimised content that ranks, educates, and converts — blog articles, landing pages, case studies, and whitepapers that position you as the trusted authority in your space online globally.",
            icon: FileText,
        },
        {
            title: "Email Marketing & Marketing Automation",
            description:
                "Turn your email list into a revenue engine. We design, write, and automate email campaigns that nurture leads, recover abandoned carts, and drive repeat purchases.",
            icon: Mail,
        },
    ];

    return (
        <section className="w-full px-6 py-10 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-15 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[700px]">
                        Every Channel{" "}
                        <span className="text-[#000099]">
                            One Integrated Strategy
                        </span>
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={service.title}
                            className="min-h-[360px] w-full rounded-[20px] border border-[#c8c8c8] bg-[#f8f8ff] p-7 transition-all duration-300 hover:border-[#000099] hover:shadow-[0_10px_30px_rgba(0,0,153,0.08)]"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-[7px] border-2 border-[#000099] text-[#000099]">
                                <Icon size={23} strokeWidth={1.8} />
                            </div>

                            <h3 className="mt-9 font-baumans text-[20px] font-bold leading-7 text-[#111111]">
                                {service.title}
                            </h3>

                            <p className="mt-2 font-poppins text-[14px] leading-7 text-[#344054]">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default DigitalMarketingServices;
