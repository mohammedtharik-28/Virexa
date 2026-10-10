"use client";

import {
    CirclePlay,
    PanelsTopLeft,
    Clapperboard,
    AudioLines,
    RectangleEllipsis,
} from "lucide-react";

import { FaYoutube } from "react-icons/fa";

function VideoEditingServices() {
    const services = [
        {
            title: "Reels, Shorts & TikTok Edits",
            description:
                "We create engaging short-form videos optimized for social media platforms. Our edits focus on fast pacing, captions, and trending styles to boost viewer retention.",
            icon: Clapperboard,
        },
        {
            title: "YouTube & Long-form Video Editing",
            description:
                "We craft professional long-form videos that keep viewers engaged from start to finish.",
            icon: FaYoutube,
        },
        {
            title: "Corporate & Brand Videos",
            description:
                "We produce professional corporate videos that represent your brand identity. Perfect for company stories, product launches, and business presentations.",
            icon: PanelsTopLeft,
        },
        {
            title: "Motion Graphics & Animated Explainers",
            description:
                "We design animated videos that simplify complex ideas with engaging visuals. Ideal for explainers, brand animations, and dynamic storytelling.",
            icon: CirclePlay,
        },
        {
            title: "Colour Grading & Sound Design",
            description:
                "We enhance your videos with cinematic color grading and clear audio balance. This ensures professional visuals and immersive high-quality sound experience for viewers.",
            icon: AudioLines,
        },
        {
            title: "Video Ad Creatives for Paid Campaigns",
            description:
                "We create high-impact video ads designed for digital marketing campaigns. Optimized for platforms like YouTube, Facebook, and Instagram ads.",
            icon: RectangleEllipsis,
        },
    ];

    return (
        <section className="w-full px-6 py-10 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        What We Edit
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-15 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Every Video Format.{" "}
                        <span className="text-[#000099]">
                            Every Platform.
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
                            className="min-h-[305px] w-full rounded-[20px] border border-[#c8c8c8] bg-[#f8f8ff] p-7 transition-all duration-300 hover:border-[#000099] hover:shadow-[0_10px_30px_rgba(0,0,153,0.08)]"
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

export default VideoEditingServices;
