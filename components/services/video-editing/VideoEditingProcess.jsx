"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function VideoEditingProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "Brief & Footage Transfer",
            description:
                "We understand your video goals, target audience, brand guidelines, and creative direction. You share your footage and assets, and we organize everything for a smooth editing workflow.",
            tags: ["Creative Brief", "Footage", "Brand Assets"],
            points: [
                "Project brief and creative direction",
                "Footage and asset collection",
                "Brand guidelines and references",
                "Editing scope and delivery timeline",
            ],
            bg: "bg-[#eee5ff]",
        },
        {
            stepNo: "STEP 02",
            name: "Test Plan & Strategy",
            description:
                "We write a detailed editing plan covering video structure, pacing, transitions, audio, and delivery requirements. We establish the creative direction and workflow before editing begins.",
            tags: ["Editing Plan", "Creative Strategy", "Workflow Setup"],
            points: [
                "Video structure and pacing definition",
                "Editing style and visual references",
                "Audio and transition planning",
                "Editing workflow and timeline setup",
            ],
            bg: "bg-[#e5f1ff]",
        },
        {
            stepNo: "STEP 03",
            name: "Rough Cut & First Edit",
            description:
                "We assemble your footage into a clear, engaging first cut, refining the sequence, pacing, and storytelling to bring your creative vision to life.",
            tags: ["Rough Cut", "Storytelling", "First Draft"],
            points: [
                "Footage selection and sequencing",
                "Initial cuts and scene arrangement",
                "Pacing and storytelling refinement",
                "First edit for your review",
            ],
            bg: "bg-[#ffe8e2]",
        },
        {
            stepNo: "STEP 04",
            name: "Colour Grade & Sound Mix",
            description:
                "We enhance your video with consistent colour grading, balanced audio, music, and sound effects to create a polished and professional viewing experience.",
            tags: ["Colour Grading", "Audio Mix", "Sound Design"],
            points: [
                "Colour correction and grading",
                "Dialogue cleanup and audio balancing",
                "Music and sound effect integration",
                "Final visual and audio refinement",
            ],
            bg: "bg-[#dcfff1]",
        },
        {
            stepNo: "STEP 05",
            name: "Motion Graphics & Captions",
            description:
                "We add motion graphics, titles, subtitles, and visual effects that strengthen your message and make your videos more engaging and accessible.",
            tags: ["Motion Graphics", "Captions", "Visual Effects"],
            points: [
                "Animated titles and lower thirds",
                "Captions and subtitle integration",
                "Transitions and visual effects",
                "Branding and graphic consistency",
            ],
            bg: "bg-[#fff3a6]",
        },
        {
            stepNo: "STEP 06",
            name: "Final Export & Multi-Format Delivery",
            description:
                "We export your finished videos in the required resolutions, aspect ratios, and formats, optimized for your target platforms and distribution channels.",
            tags: ["Final Export", "Multi-Format", "Delivery"],
            points: [
                "Platform-specific export settings",
                "Vertical, square, and landscape formats",
                "Final quality and playback checks",
                "Organized delivery of finished files",
            ],
            bg: "bg-[#fff3d4]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-gray-100 px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    How We Edit
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    Footage In,{" "}
                    <span className="text-[#000099]">
                       Final Video Out
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

export default VideoEditingProcess;
