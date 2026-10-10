"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function ECommerceDevelopmentProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "App Concept & MVP Scoping",
            description:
                "We transform your idea into a clear, actionable product plan. We define the core features, user flows, technical requirements, and MVP scope needed to launch successfully.",
            tags: ["Strategy", "MVP", "User Flow"],
            points: [
                "Product requirements & feature planning",
                "User journey and app flow mapping",
                "Technical architecture planning",
                "Clear MVP roadmap and timeline",
            ],
            bg: "bg-[#f8eaea]",
        },
        {
            stepNo: "STEP 02",
            name: "UX Wireframes & Design",
            description:
                "We design the full app in Figma — screen layouts, user journeys, onboarding, and account screens — reviewed and approved by you before development begins.",
            tags: ["Figma Wireframes", "Mobile-First", "Design Sign-Off"],
            points: [
                "Mobile screen layouts and user flows",
                "App screen UX and conversion flow",
                "Navigation and interaction design",
                "Mobile-first responsive interface",
            ],
            bg: "bg-[#e5f1ff]",
        },
        {
            stepNo: "STEP 03",
            name: "App Development",
            description:
                "We build your mobile application in focused development sprints, keeping you involved with regular updates and working builds throughout the process.",
            tags: ["Agile", "Development", "Sprint Builds"],
            points: [
                "Feature development in focused sprints",
                "Android and iOS implementation",
                "Regular progress updates and builds",
                "Continuous feedback and improvements",
            ],
            bg: "bg-[#eee8ff]",
        },
        {
            stepNo: "STEP 04",
            name: "Testing & Content",
            description:
                "We test your application across devices and operating systems, validate its functionality, and prepare the content required for a smooth launch.",
            tags: ["Testing", "QA", "Validation"],
            points: [
                "Real-device testing across platforms",
                "Performance and usability checks",
                "Bug tracking and resolution",
                "Final quality assurance",
            ],
            bg: "bg-[#f2fbe9]",
        },
        {
            stepNo: "STEP 05",
            name: "Launch & Deployment",
            description:
                "We prepare your application for release, handle app store submission requirements, and support the launch process across your chosen platforms.",
            tags: ["App Store", "Google Play", "Launch"],
            points: [
                "Store listing and metadata preparation",
                "Screenshots and app descriptions",
                "Platform compliance checks",
                "Submission and review support",
            ],
            bg: "bg-[#fff0e5]",
        },
        {
            stepNo: "STEP 06",
            name: "Support & Handover",
            description:
                "After launch, we provide the documentation, handover, and ongoing support needed to maintain your application and evolve it as your business grows.",
            tags: ["Support", "Handover", "Maintenance"],
            points: [
                "Project documentation and handover",
                "Post-launch monitoring and support",
                "Bug fixes and performance improvements",
                "Ongoing updates and enhancements",
            ],
            bg: "bg-[#fdebf3]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-gray-100 px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    Our Process
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    A clear, proven process for predictable delivery
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
                                                className="whitespace-nowrap rounded-full border border-[#e1e1ff] bg-[#f1f1ff] px-4 py-1.5 font-poppins text-[11px] font-medium text-[#000099] sm:px-5 sm:text-[12px]"
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

export default ECommerceDevelopmentProcess;
