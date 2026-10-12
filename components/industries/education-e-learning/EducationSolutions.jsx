"use client";

import { useState } from "react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

function EducationSolutions() {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            tab: "LMS Platform",
            label: "Solution 01 — Core Platform",
            title: "Custom Learning Management System (LMS)",
            description:
                "Your fully branded, white-label LMS — course creation, video hosting, structured learning paths, progress tracking, and automated certificates. Built on your domain, with no per-student licensing fees to third-party platforms ever.",
            points: [
                "Course builder — video, PDF, quiz, and assignment modules",
                "Structured learning paths with prerequisites and milestones",
                "Video hosting with adaptive streaming and playback controls",
                "Auto-generated certificates on course completion",
                "Razorpay & UPI — one-time, subscription, and instalment billing",
                "Instructor dashboard — manage courses, students, and revenue",
            ],
            button: "Build Your LMS",
            href: "/contact",
        },
        {
            tab: "Student Mobile App",
            label: "Solution 02 — Mobile Learning",
            title: "Student Mobile App for iOS & Android",
            description:
                "A dedicated learning app for your students — available on iOS and Android with offline video downloads, push notification reminders, live class access, doubt submission, and gamification to keep learners coming back daily.",
            points: [
                "Offline video downloads — learn without internet",
                "Daily streak tracking and progress gamification",
                "Push notifications — class reminders, assignment deadlines",
                "In-app doubt submission and Q&A with instructors",
                "Leaderboards, badges, and achievement system",
                "App Store & Play Store submission included",
            ],
            button: "Build Your Learning App",
            href: "/contact",
        },
        {
            tab: "Live Class & Webinar",
            label: "Solution 03 — Live Learning",
            title: "Live Class Platform & Webinar System",
            description:
                "An integrated live teaching environment — schedule and host live classes, webinars, and workshops directly within your platform. No Zoom links, no WhatsApp scheduling. Fully recorded and available for replay inside the student dashboard.",
            points: [
                "HD video live classes with up to 10,000 concurrent students",
                "Interactive whiteboard, screen sharing, and polls",
                "Auto-recording and next-day replay for enrolled students",
                "Live Q&A, chat moderation, and raise-hand feature",
                "Attendance tracking and participation analytics",
                "Paid webinar ticketing and free trial class support",
            ],
            button: "Build Your Live Class Platform",
            href: "/contact",
        },
        {
            tab: "Assessment & Testing",
            label: "Solution 04 — Assessment & Testing",
            title: "Online Assessment, Quiz & Mock Test Platform",
            description:
                "A full-featured assessment engine — timed mock tests, adaptive quizzes, question banks, detailed performance analytics, and anti-cheating measures — built for competitive exam preparation, school assessments, and corporate training certifications.",
            points: [
                "Timed tests with multiple question types (MCQ, subjective, coding)",
                "Question bank management with topic and difficulty tagging",
                "Adaptive tests — harder questions serve high scorers automatically",
                "Detailed rank lists, percentile scores, and topic-wise analysis",
                "Anti-cheating — tab switch detection, fullscreen enforcement",
                "Instant auto-grading and solution review with explanations",
            ],
            button: "Build Your Test Platform",
            href: "/contact",
        },
    ];

    const selectedSolution = solutions[activeTab];

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-26">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        Solutions We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-black sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Technology Built for{" "}
                        <span className="text-[#000099]">
                            Education & E-Learning
                        </span>
                    </h1>

                    <p className="mx-auto font-poppins text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We build digital learning solutions that help
                        educators, institutions, and businesses deliver
                        engaging, accessible, and measurable learning
                        experiences.
                    </p>
                </div>
            </div>

            {/* Tabs and content */}
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 pt-16 sm:pt-20 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:pt-30">
                {/* Left navigation */}
                <div className="flex flex-col gap-2">
                    {solutions.map((solution, index) => (
                        <button
                            key={solution.tab}
                            type="button"
                            onClick={() => setActiveTab(index)}
                            aria-pressed={activeTab === index}
                            className={`w-full cursor-pointer rounded-md px-6 py-5 text-left font-baumans text-[20px] font-bold transition-colors duration-200 sm:px-8 sm:py-6 sm:text-[22px] ${
                                activeTab === index
                                    ? "bg-[#f1f0f8] text-[#000099]"
                                    : "bg-transparent text-[#e8e8e8] hover:text-[#000099]"
                            }`}
                        >
                            {solution.tab}
                        </button>
                    ))}
                </div>

                {/* Right content */}
                <div key={activeTab} className="min-w-0">
                    <p className="font-baumans text-[16px] font-bold text-[#000099]">
                        {selectedSolution.label}
                    </p>

                    <h2 className="mt-6 font-baumans text-[22px] font-bold leading-tight tracking-tight text-black sm:text-[24px]">
                        {selectedSolution.title}
                    </h2>

                    <p className="mt-4 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                        {selectedSolution.description}
                    </p>

                    <ul className="mt-10 space-y-4">
                        {selectedSolution.points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:gap-4"
                            >
                                <CircleCheck
                                    className="mt-[3px] h-[16px] w-[16px] shrink-0 fill-[#000099] text-white"
                                    strokeWidth={2.5}
                                />

                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={selectedSolution.href}
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1000b5] py-1.5 pl-5 pr-2 font-poppins text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#000099]"
                    >
                        {selectedSolution.button}

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1000b5]">
                            <ArrowUpRight size={21} strokeWidth={3.5} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EducationSolutions;
