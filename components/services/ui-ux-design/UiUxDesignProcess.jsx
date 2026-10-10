"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function UiUxDesignProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "Discovery & Requirements",
            description:
                "We understand your users, business goals, and product requirements to establish a clear foundation for the design process.",
            tags: ["Research", "Requirements", "Strategy"],
            points: [
                "User research and business requirements",
                "User needs and journey mapping",
                "Product goals and design objectives",
                "Project scope and priorities",
            ],
            bg: "bg-[#e5faf7]",
        },
        {
            stepNo: "STEP 02",
            name: "Information Architecture",
            description:
                "We organize content and features to create a clear structure for the product. This ensures users can easily navigate and find what they need.",
            tags: ["Structure", "Sitemap", "Planning"],
            points: [
                "Sitemap and content structure",
                "User journey mapping",
                "Navigation planning",
                "Feature prioritization",
            ],
            bg: "bg-[#e6e6f8]",
        },
        {
            stepNo: "STEP 03",
            name: "Agile Development Sprints",
            description:
                "We collaborate throughout the design process, refining interfaces and validating design decisions through iterative feedback and regular reviews.",
            tags: ["Iterations", "Collaboration", "Feedback"],
            points: [
                "Iterative design improvements",
                "Regular design reviews",
                "Stakeholder feedback and validation",
                "Consistent design implementation",
            ],
            bg: "bg-[#fde5ed]",
        },
        {
            stepNo: "STEP 04",
            name: "QA & Performance Testing",
            description:
                "We thoroughly test software functionality, usability, security, and compatibility. Our goal is to identify issues early and deliver a stable user experience.",
            tags: ["Usability", "Testing", "Validation"],
            points: [
                "Usability and accessibility testing",
                "Cross-device compatibility checks",
                "Interface consistency validation",
                "Issue identification and resolution",
            ],
            bg: "bg-[#ffead9]",
        },
        {
            stepNo: "STEP 05",
            name: "Deployment & Go-Live",
            description:
                "We prepare the approved designs for handoff, coordinate with developers, and verify that the final product matches the intended user experience.",
            tags: ["Handoff", "Implementation", "Launch"],
            points: [
                "Design specifications and assets",
                "Developer handoff and documentation",
                "Implementation review",
                "Final interface verification",
            ],
            bg: "bg-[#dcfce9]",
        },
        {
            stepNo: "STEP 06",
            name: "Support & Evolution",
            description:
                "We evaluate user feedback and product performance to identify opportunities for continuous improvements as your product and business grow.",
            tags: ["Feedback", "Optimization", "Growth"],
            points: [
                "Post-launch user feedback analysis",
                "Usability improvement recommendations",
                "Design updates and refinements",
                "Continuous product optimization",
            ],
            bg: "bg-[#fff3d4]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-[#f7f7f8] px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    Our Process
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    A clear, proven process for{" "}
                    <span className="text-[#000099]">
                        better user experiences
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

                                    <p className="mt-3 max-w-[610px] font-poppins text-[14px] font-medium leading-6 text-[#344054] sm:text-[15px]">
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
                                        {item.points.map((point, pointIndex) => (
                                            <div
                                                key={`${point}-${pointIndex}`}
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

export default UiUxDesignProcess;
