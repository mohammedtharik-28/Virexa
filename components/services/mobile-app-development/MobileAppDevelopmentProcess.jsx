"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function MobileAppDevelopmentProcess() {
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
            name: "Mobile UI/UX & Prototype",
            description:
                "We design high-fidelity Figma screens following Apple HIG and Material Design standards. You tap through a real prototype on your phone before a single line of code is written.",
            tags: ["Figma", "Apple HIG", "Prototype"],
            points: [
                "Mobile-first screen flows & wireframes",
                "High-fidelity UI design in Figma",
                "Clickable prototype on your real device",
                "Design sign-off before development starts",
            ],
            bg: "bg-[#e5f1ff]",
        },
        {
            stepNo: "STEP 03",
            name: "Sprint Builds on Your Phone",
            description:
                "Development happens in focused sprints with regular builds delivered directly to your device. You see real progress throughout the entire development process.",
            tags: ["Agile", "Sprints", "Builds"],
            points: [
                "Feature development in focused sprints",
                "Regular builds delivered to your device",
                "Continuous feedback and improvements",
                "Transparent development process",
            ],
            bg: "bg-[#eee8ff]",
        },
        {
            stepNo: "STEP 04",
            name: "Real-Device QA & Testing",
            description:
                "We test your application across real devices and operating systems to identify performance, usability, compatibility, and functional issues before launch.",
            tags: ["QA", "Testing", "Devices"],
            points: [
                "Real-device testing across platforms",
                "Performance and usability testing",
                "Bug tracking and resolution",
                "Final quality assurance before launch",
            ],
            bg: "bg-[#f2fbe9]",
        },
        {
            stepNo: "STEP 05",
            name: "App Store & Play Store Submission",
            description:
                "We handle the complete submission process for Apple App Store and Google Play, ensuring your application meets platform requirements and review guidelines.",
            tags: ["App Store", "Google Play", "Launch"],
            points: [
                "Store listing and metadata preparation",
                "App screenshots and descriptions",
                "Platform compliance checks",
                "Submission and review support",
            ],
            bg: "bg-[#fff0e5]",
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

                                    <p className="mt-3 max-w-[610px] font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2.5">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-[#d9d9ff] bg-[#f1f1ff] px-4 py-1.5 font-poppins text-[11px] font-medium text-[#000099] sm:px-5 sm:text-[12px]"
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

export default MobileAppDevelopmentProcess;
