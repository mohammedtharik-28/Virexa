"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    FaLaptopCode,
    FaAward,
    FaRobot,
    FaHeadset,
} from "react-icons/fa6";

import { useEffect, useRef, useState } from "react";

function AboutUsSolutions() {

    const AboutUsPoints = [
        {
            description: "We are a team of passionate technology experts dedicated to transforming businesses through innovation and intelligent solutions.",
            point: [
                "Experienced IT Professionals",
                "Client-Centered Approach",
                "Innovative Mindset & End-to-End Solutions"
            ]
        },
        {
            description: "We focus on building innovative IT solutions designed to improve efficiency, reduce costs, and support long-term business success.",
            point: [
                "Innovation that lasts",
                "Scalable, secure solutions",
                "Streamlined digital operations"
            ]
        }
    ];

    const AboutUs = [
        {
            title: "AI-Crafted Wireframes and Layouts",
            description: "AI-Generated Prototypes allow to bring ideas to instantly.",
            icon: FaLaptopCode
        },
        {
            title: "High Quality-Focused Development",
            description: "Development empowers teams to bring ideas to life faster.",
            icon: FaAward
        },
        {
            title: "AI-Powered Testing Solutions",
            description: "Smart QA Testing ensures your software performs flawlessly.",
            icon: FaRobot
        },
        {
            title: "Seamless Help and Assistance",
            description: "Full Support means dedicated team ready to every step.",
            icon: FaHeadset
        }
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let current = 0;

        const interval = setInterval(() => {
            current += 1;
            setCount(current);

            if (current >= 9) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [hasStarted]);

    return (
        <section className="w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="flex w-full flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">

                <div className="w-full lg:w-[60%]">

                    <div>

                        <h1 className="mt-4 w-full max-w-[650px] text-[36px] text-[#000000] font-baumans font-bold leading-tight sm:text-[40px]">
                            Transforming{" "}
                            <span className="text-[#000099]">
                                ideas
                            </span>{" "}
                            into intelligent{" "}
                            <span className="text-[#000099]">
                                solutions
                            </span>
                        </h1>

                        <p className="mt-5 w-full max-w-[700px] text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px]">
                            We specialize in delivering innovative IT solutions empower businesses to thrive in the digital age. From cloud computing and software development cybersecurity and data analytics.
                        </p>

                    </div>

                    <div className="mt-8 flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:gap-8 lg:ms-5">

                        <div className="w-full sm:w-[40%]">

                            <img
                                className="h-[400px] w-full rounded-3xl object-cover sm:h-[450px]"
                                src="/AboutUsImage/AboutUsImage2.webp"
                                alt=""
                            />

                        </div>

                        <div className="w-full pt-0 text-start sm:w-[60%] sm:pt-10 lg:pt-20">

                            <div className="flex gap-6 sm:gap-8">

                                <button
                                    onClick={() => setActiveTab(0)}
                                    className={`cursor-pointer font-baumans font-bold text-[16px] ${
                                        activeTab === 0
                                            ? "border-b-2 border-[#000099] text-[#000099]"
                                            : "text-[#000000]"
                                    }`}
                                >
                                    Who We Are
                                </button>

                                <button
                                    onClick={() => setActiveTab(1)}
                                    className={`cursor-pointer font-baumans font-bold text-[16px] ${
                                        activeTab === 1
                                            ? "border-b-2 border-[#000099] text-[#000099]"
                                            : "text-[#000000]"
                                    }`}
                                >
                                    Our Goals
                                </button>

                            </div>

                            <div className="pt-5 text-[14px] font-medium font-poppins leading-6 text-[#54595f] sm:text-[15px]">

                                <p>
                                    {AboutUsPoints[activeTab].description}
                                </p>

                                <div className="pt-5">

                                    {AboutUsPoints[activeTab].point.map((point, index) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-3 pt-3 first:pt-0"
                                        >

                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#54595f]"></span>

                                            <span>
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                <Link
                                    href="/contact"
                                    className="group mt-10 flex w-full max-w-[240px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
                                >

                                    <span className="ps-2">
                                        Book a free Consultation
                                    </span>

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                                        <ArrowUpRight size={21} />
                                    </span>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="w-full lg:w-[35%]">

                    <div className="w-full">

                        <img
                            className="h-[400px] w-full rounded-3xl object-cover sm:h-[500px] lg:h-[480px]"
                            src="/AboutUsImage/AboutUsImage1.webp"
                            alt="AboutUsImage"
                        />

                    </div>

                    <div className="mt-5 flex w-full max-w-[360px] items-center gap-5 rounded-4xl bg-[#000099] px-6 py-8">

                        <h1
                            ref={counterRef}
                            className="shrink-0 font-baumans text-[48px] font-bold text-[#ececec] sm:text-[56px]"
                        >
                            {count}+
                        </h1>

                        <p className="font-baumans text-[18px] font-bold text-[#ececec] sm:text-[20px]">
                            Years of experience in IT Solutions
                        </p>

                    </div>

                </div>

            </div>

            <hr className="mt-20 text-[#ececec] lg:mt-30" />

            <div className="mt-16 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">

                {AboutUs.map((items, id) => {

                    const Icon = items.icon;

                    return (
                        <div
                            className="w-full max-w-[250px]"
                            key={id}
                        >

                            <Icon
                                size={48}
                                className="mb-8 text-[#000099]"
                            />

                            <h1 className="font-baumans text-[22px] font-bold text-[#000000] sm:text-[24px]">
                                {items.title}
                            </h1>

                            <p className="mt-5 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                {items.description}
                            </p>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default AboutUsSolutions;