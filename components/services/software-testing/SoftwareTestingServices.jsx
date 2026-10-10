"use client";

import {
    Settings2,
    RefreshCw,
    UsersRound,
    GitMerge,
} from "lucide-react";

function SoftwareTestingServices() {
    const services = [
        {
            title: "Quality Assurance Consulting",
            description:
                "Our QA experts help define the right testing strategy, tools, and workflows. We guide businesses in building efficient quality assurance processes for product reliability.",
            icon: Settings2,
        },
        {
            title: "API & Integration Testing",
            description:
                "We ensure different system components and services work together without issues. Our testing validates data flow, communication, and system compatibility.",
            icon: "API",
        },
        {
            title: "Functional Software Testing",
            description:
                "We thoroughly test software functionality, usability, security, and compatibility. Our goal is to identify issues early and deliver a stable user experience.",
            icon: Settings2,
        },
        {
            title: "End-to-End System Testing",
            description:
                "We test complete business workflows from start to finish to ensure all components work together correctly and deliver a seamless user experience.",
            icon: GitMerge,
        },
        {
            title: "Continuous Regression Testing",
            description:
                "We continuously test existing functionality after every change to ensure new updates do not introduce unexpected issues or break existing features.",
            icon: RefreshCw,
        },
        {
            title: "Dedicated QA Team Services",
            description:
                "Our dedicated QA professionals work as an extension of your team, providing consistent testing, quality monitoring, and ongoing product support.",
            icon: UsersRound,
        },
    ];

    return (
        <section className="px-6 py-16 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 pb-15 w-full max-w-[350px] text-[40px] font-baumans font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Every Test Type.{" "}
                        <span className="text-[#000099]">
                            Every Platform.
                        </span>
                    </h1>
                </div>
            </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group min-h-[305px] w-full rounded-[20px] border border-[#c8c8c8] bg-[#f8f8ff] p-7 transition-all duration-300 hover:border-[#000099] hover:bg-[#f8f8ff] hover:shadow-[0_10px_30px_rgba(0,0,153,0.08)]"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-[7px] border-2 border-[#000099] text-[#000099]">
                                    {typeof Icon === "string" ? (
                                        <span className="font-poppins text-[19px] font-semibold">
                                            {Icon}
                                        </span>
                                    ) : (
                                        <Icon size={23} strokeWidth={1.8} />
                                    )}
                                </div>

                                <h3 className="mt-9 font-baumans text-[20px] font-bold text-[#111111]">
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

export default SoftwareTestingServices;