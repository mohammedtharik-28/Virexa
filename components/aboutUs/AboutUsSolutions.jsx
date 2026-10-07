"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    FaLaptopCode,
    FaAward,
    FaRobot,
    FaHeadset,
} from "react-icons/fa6";

import { useState } from "react";

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

    return (
        <section className="px-28">

            <div className="flex justify-between">

                <div>

                    <div>

                        <h1 className="mt-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[650px] sm:max-w-[700px]">
                            Transforming{" "}
                            <span className="text-[#000099]">
                                ideas
                            </span>{" "}
                            into intelligent{" "}
                            <span className="text-[#000099]">
                                solutions
                            </span>
                        </h1>

                        <p className="mx-auto m-3 w-full max-w-[700px] text-base font-medium text-[15px] font-poppins leading-6 text-gray-600">
                            We specialize in delivering innovative IT solutions empower businesses to thrive in the digital age. From cloud computing and software development cybersecurity and data analytics.
                        </p>

                    </div>

                    <div className="flex ms-5">

                        <div>

                            <img
                                className="w-70 h-100 object-cover rounded-3xl mt-10"
                                src="/AboutUsImage/AboutUsImage2.webp"
                                alt=""
                            />

                        </div>

                        <div className="pt-20 ps-8 max-w-[400px] text-start">

                            <div className="flex gap-8">

                                <h1
                                    onClick={() => setActiveTab(0)}
                                    className={`cursor-pointer font-baumans font-bold text-[16px] ${activeTab === 0
                                        ? "text-[#000099] border-b-2"
                                        : "text-[#000000]"
                                        }`}
                                >
                                    Who We Are
                                </h1>

                                <h1
                                    onClick={() => setActiveTab(1)}
                                    className={`cursor-pointer font-baumans font-bold text-[16px] ${activeTab === 1
                                        ? "text-[#000099] border-b-2"
                                        : "text-[#000000]"
                                        }`}
                                >
                                    Our Goals
                                </h1>

                            </div>

                            <div className="pt-5 font-medium font-poppins text-[15px] text-[#54595f]">

                                <p>
                                    {AboutUsPoints[activeTab].description}
                                </p>

                                <div className="pt-5 font-medium font-poppins text-[15px] text-[#54595f]">

                                    {AboutUsPoints[activeTab].point.map((point, index) => (

                                        <div
                                            key={index}
                                            className="flex items-center gap-3 pt-3 first:pt-0"
                                        >

                                            <span className="h-2 w-2 rounded-full bg-[#54595f]"></span>

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

                <div>

                    <div>

                        <img
                            className="w-90 h-120 object-cover rounded-3xl"
                            src="/AboutUsImage/AboutUsImage1.webp"
                            alt="AboutUsImage"
                        />

                    </div>

                    <div className="bg-[#000099] flex items-center gap-5 rounded-4xl max-w-[360px] mt-5 py-8 px-6">

                        <h1 className="font-baumans font-bold text-[56px] text-[#ececec]">
                            9+
                        </h1>

                        <p className="font-baumans font-bold text-[20px] text-[#ececec]">
                            Years of experience in IT Solutions
                        </p>

                    </div>

                </div>

            </div>

            <hr className="mt-30 text-[#ececec]" />

            <div className="flex justify-between mt-20">

                {AboutUs.map((items, id) => {

                    const Icon = items.icon;

                    return (
                        <div
                            className="max-w-[250px]"
                            key={id}
                        >

                            <Icon
                                size={48}
                                className="text-[#000099] mb-8"
                            />

                            <h1 className="font-baumans font-bold text-[24px] text-[#000000]">
                                {items.title}
                            </h1>

                            <p className="font-poppins font-medium text-[15px] text-[#54595f] mt-5">
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