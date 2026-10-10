"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function GraphicDesignProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "Creative Brief & Discovery",
            description:
                "We understand your brand, target audience, business goals, and creative requirements to establish a clear direction for the project.",
            tags: ["Brand Strategy", "Audience", "Creative Brief"],
            points: [
                "Brand goals and audience research",
                "Creative requirements and project scope",
                "Competitor and market research",
                "Visual direction and project planning",
            ],
            bg: "bg-[#e3f9f6]",
        },
        {
            stepNo: "STEP 02",
            name: "Concept Development",
            description:
                "We explore multiple creative directions and present 2–3 distinct concepts for your feedback. You see real options — not one take-it-or-leave-it idea.",
            tags: ["2–3 Concepts", "Rationale", "Direction Vote"],
            points: [
                "2–3 design concepts exploration",
                "Creative rationale for each direction",
                "Style and visual direction voting",
                "Initial layout and composition testing",
            ],
            bg: "bg-[#e6e6f8]",
        },
        {
            stepNo: "STEP 03",
            name: "Refinement & Revisions",
            description:
                "We refine your selected creative direction based on your feedback, polishing every detail until the design aligns with your brand vision.",
            tags: ["Feedback", "Refinement", "Polishing"],
            points: [
                "Feedback review and implementation",
                "Typography and color refinement",
                "Layout and visual consistency checks",
                "Final design approval",
            ],
            bg: "bg-[#fde3eb]",
        },
        {
            stepNo: "STEP 04",
            name: "Final Artwork & Mockups",
            description:
                "We prepare polished artwork and realistic mockups so you can see how your designs will look across print materials, packaging, and digital platforms.",
            tags: ["Artwork", "Mockups", "Preview"],
            points: [
                "High-resolution final artwork",
                "Realistic brand and product mockups",
                "Print and digital layout preparation",
                "Final visual quality checks",
            ],
            bg: "bg-[#ffead9]",
        },
        {
            stepNo: "STEP 05",
            name: "File Delivery & Brand Handoff",
            description:
                "We deliver organized, production-ready design files in the formats your team and vendors need, making future use simple and consistent.",
            tags: ["Source Files", "Export", "Documentation"],
            points: [
                "Editable source files and assets",
                "Print-ready and digital exports",
                "Organized files and folder structure",
                "Brand asset and usage handoff",
            ],
            bg: "bg-[#dcfce9]",
        },
        {
            stepNo: "STEP 06",
            name: "Ongoing Brand Support",
            description:
                "We continue supporting your brand with design updates, campaign creatives, and additional assets as your business and marketing needs evolve.",
            tags: ["Ongoing Design", "Campaigns", "Support"],
            points: [
                "Ongoing creative and design assistance",
                "Campaign and social media assets",
                "Brand consistency across new materials",
                "Design updates as your business grows",
            ],
            bg: "bg-[#fff3d6]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-gray-100 px-4 py-10 sm:px-8 sm:py-16 lg:px-6 xl:px-28">
            <div className="pb-8 text-center sm:pb-10">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    How We Work
                </h2>

                <p className="mx-auto mt-4 max-w-4xl font-baumans text-[30px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    Brief to final files{" "}
                    <span className="text-[#000099]">
                        in 6 clear steps
                    </span>
                </p>
            </div>

            <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-2 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {process.map((item, index) => {
                    const isActive = activeStep === index;

                    return (
                        <button
                            key={item.stepNo}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            aria-expanded={isActive}
                            aria-label={`${item.stepNo}: ${item.name}`}
                            className={`relative w-full shrink-0 overflow-hidden rounded-[10px] text-left transition-[width,min-height] duration-500 ease-in-out lg:min-h-[440px] ${
                                isActive
                                    ? "min-h-0 lg:w-[min(678px,calc(100vw-450px))] lg:min-w-[520px] lg:flex-[1_1_0%]"
                                    : "h-[76px] min-h-[76px] lg:h-auto lg:w-[74px] lg:min-w-[74px] lg:flex-none"
                            } ${item.bg}`}
                        >
                            {isActive ? (
                                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[440px] lg:px-10 lg:py-14 xl:px-14">
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

                                    <div className="hidden h-full min-h-[440px] w-full items-center justify-center lg:flex">
                                        <span
                                            className="whitespace-nowrap font-baumans text-[20px] font-bold text-black"
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

export default GraphicDesignProcess;