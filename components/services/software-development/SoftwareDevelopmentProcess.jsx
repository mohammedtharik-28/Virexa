"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function SoftwareDevelopmentProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "Discovery & Requirements",
            description:
                "We begin by understanding your business goals, users, and technical requirements to create a clear foundation for the project.",
            tags: ["Strategy", "Requirements", "Planning"],
            points: [
                "Business requirements analysis",
                "User needs and journey mapping",
                "Technical requirements definition",
                "Project scope and roadmap",
            ],
            bg: "bg-[#e5fafa]",
        },
        {
            stepNo: "STEP 02",
            name: "Architecture & Design",
            description:
                "Our architects define the system structure, data models, and integration points — ensuring the foundation scales with your business from day one.",
            tags: ["Architecture", "UI/UX", "Wireframes"],
            points: [
                "System architecture blueprinting",
                "UI/UX wireframes & prototypes",
                "Tech stack selection & planning",
                "Database schema & API design",
            ],
            bg: "bg-[#e6e6f8]",
        },
        {
            stepNo: "STEP 03",
            name: "Agile Development Sprints",
            description:
                "We develop your application through focused Agile sprints with regular progress updates, testing, and feedback throughout the development cycle.",
            tags: ["Agile", "Sprints", "Development"],
            points: [
                "Feature development in focused sprints",
                "Regular progress updates",
                "Continuous testing and feedback",
                "Incremental product delivery",
            ],
            bg: "bg-[#fde6ee]",
        },
        {
            stepNo: "STEP 04",
            name: "QA & Performance Testing",
            description:
                "We thoroughly test your application to ensure reliability, performance, security, and compatibility across devices and platforms.",
            tags: ["QA", "Testing", "Performance"],
            points: [
                "Functional and regression testing",
                "Performance and load testing",
                "Security and compatibility checks",
                "Bug tracking and resolution",
            ],
            bg: "bg-[#ffead9]",
        },
        {
            stepNo: "STEP 05",
            name: "Deployment & Go-Live",
            description:
                "We prepare your application for production and manage the complete deployment process to ensure a smooth and reliable launch.",
            tags: ["Deployment", "Launch", "Go-Live"],
            points: [
                "Production environment setup",
                "Final deployment preparation",
                "Release and launch management",
                "Post-launch verification",
            ],
            bg: "bg-[#dff9e8]",
        },
        {
            stepNo: "STEP 06",
            name: "Support & Evolution",
            description:
                "After launch, we continue supporting your product with monitoring, maintenance, improvements, and new features as your business and users grow.",
            tags: ["Support", "Maintenance", "Growth"],
            points: [
                "Post-launch monitoring and support",
                "Bug fixes and performance improvements",
                "OS and platform compatibility updates",
                "Continuous feature development",
            ],
            bg: "bg-[#fff3d6]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-gray-100 px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    Our Process
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    A clear, proven process for{" "}
                    <span className="text-[#000099]">
                        predictable delivery
                    </span>
                </p>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-2 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {process.map((item, index) => {
                    const isActive = activeStep === index;

                    return (
                        <button
                            key={item.stepNo}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            aria-expanded={isActive}
                            aria-label={`${item.stepNo}: ${item.name}`}
                            className={`relative w-full shrink-0 overflow-hidden rounded-[10px] text-left transition-[width,min-height] duration-500 ease-in-out lg:min-h-[430px] ${
                                isActive
                                    ? "min-h-0 lg:w-[678px]"
                                    : "h-[76px] min-h-[76px] lg:h-auto lg:w-[74px]"
                            } ${item.bg}`}
                        >
                            {isActive ? (
                                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[430px] lg:px-14 lg:py-14">
                                    <div className="flex items-center gap-3">
                                        <span className="h-[3px] w-4 shrink-0 bg-[#000099]" />

                                        <span className="font-poppins text-[12px] font-medium text-[#000099] sm:text-[13px]">
                                            {item.stepNo}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-baumans text-[22px] font-bold leading-snug text-black sm:text-[24px]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 max-w-[610px] font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2.5">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="whitespace-nowrap rounded-full border border-[#dedfff] bg-[#f1f1ff] px-4 py-1.5 font-poppins text-[11px] font-medium text-[#000099] sm:px-5 sm:text-[12px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 space-y-3">
                                        {item.points.map((point) => (
                                            <div
                                                key={point}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                                    <Check
                                                        size={11}
                                                        strokeWidth={3}
                                                    />
                                                </span>

                                                <span className="font-poppins text-[13px] font-medium leading-5 text-[#344054] sm:text-[14px]">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex h-[76px] w-full items-center justify-center px-4 text-center lg:hidden">
                                        <span className="line-clamp-2 w-full font-baumans text-[16px] font-bold leading-5 text-black sm:text-[18px]">
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="hidden h-full min-h-[430px] w-full items-center justify-center lg:flex">
                                        <span
                                            className="whitespace-nowrap font-baumans text-[22px] font-bold text-black"
                                            style={{
                                                writingMode: "vertical-rl",
                                                transform: "rotate(180deg)",
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default SoftwareDevelopmentProcess;
