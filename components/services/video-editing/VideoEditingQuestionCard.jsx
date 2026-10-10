"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function VideoEditingQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How quickly can you deliver an edited video?",
            answer:
                "Standard delivery is 3–5 working days for most videos. We offer a 48-hour express delivery service for urgent projects at a small premium. Cinematic films, ad films, and complex productions with heavy motion graphics or VFX typically take 7–14 days depending on scope.",
        },
        {
            question: "What video formats and resolutions do you deliver?",
            answer:
                "We deliver in all major formats — MP4, MOV, AVI, and MXF — in resolutions up to 4K Ultra HD. We also export multi-format versions for different platforms: 16:9 for YouTube and TV, 9:16 vertical for Instagram Reels and YouTube Shorts, 1:1 square for Facebook, and custom dimensions for any platform you need.",
        },
        {
            question: "How do I share my raw footage with you?",
            answer:
                "You can share footage through Google Drive, WeTransfer, Dropbox, or any cloud storage. For local Coimbatore clients, you can also drop off a hard drive or pen drive at our office. We handle footage of any size — from a few GBs to multi-terabyte production shoots.",
        },
        {
            question: "Do you also provide videography / shooting services?",
            answer:
                "Yes! WebNest Technologies offers end-to-end video production — from script writing, storyboarding, and professional videography/shooting in and around Coimbatore, all the way to post-production editing and final delivery. You get a single team for the entire production pipeline.",
        },
        {
            question: "Do you provide motion graphics and animations?",
            answer:
                "Yes, we create motion graphics, titles, transitions, and animations to enhance your video and make it more engaging.",
        },
    ];

    return (
        <section className="mt-30 bg-gray-100 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-25 xl:px-28">
            <div className="text-center">
                <h1 className="font-baumans text-[30px] font-bold text-[#000000] sm:text-[34px] lg:text-[36px]">
                    Frequently asked{" "}
                    <span className="text-[#000099]">
                        questions
                    </span>
                </h1>
            </div>

            <div className="mx-auto mt-10 w-full max-w-[1200px]">
                {QuestionAndAnswers.map((items, id) => (
                    <div
                        key={id}
                        className="border-b border-gray-200"
                    >
                        <button
                            onClick={() =>
                                setAnswerOpen(
                                    answerOpen === id ? null : id
                                )
                            }
                            className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6 cursor-pointer"
                        >
                            <p className="font-baumans text-[18px] font-bold text-[#000000] sm:text-[21px] lg:text-[20px]">
                                {items.question}
                            </p>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#000000] transition-transform duration-300">
                                {answerOpen === id ? (
                                    <Minus size={24} strokeWidth={4}  className="text-[#000099]"/>
                                ) : (
                                    <Plus size={24} strokeWidth={4} />
                                )}
                            </span>
                        </button>

                        <div
                            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                                answerOpen === id
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <div className="border-t border-gray-200 pb-6 pt-5 sm:pr-10">
                                    <p className="font-poppins text-[15px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {items.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default VideoEditingQuestionCard;