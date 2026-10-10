"use client";

import {
    FaAndroid,
    FaApple,
    FaReact,
} from "react-icons/fa";

import {
    SiFlutter,
    SiSwift,
} from "react-icons/si";

import { GitBranch } from "lucide-react";

function MobileAppDevelopmentServices() {
    const services = [
        {
            title: "Native Android Apps",
            description:
                "Our team develops robust Android applications built for performance and scalability. We deliver smooth functionality and intuitive user experiences across Android devices.",
            icon: FaAndroid,
        },
        {
            title: "Native iOS Apps",
            description:
                "We build high-quality native iOS applications optimized for Apple devices. Our solutions ensure strong security, smooth performance, and a refined user experience.",
            icon: FaApple,
        },
        {
            title: "React Native Apps",
            description:
                "We develop cross-platform mobile applications using React Native for both Android and iOS. A single codebase helps speed up development while delivering smooth performance.",
            icon: FaReact,
        },
        {
            title: "Flutter Apps",
            description:
                "Our Flutter developers craft visually engaging and responsive mobile applications using a single codebase, ensuring consistency and faster deployment across multiple platforms.",
            icon: SiFlutter,
        },
        {
            title: "Swift Apps",
            description:
                "Using Apple's Swift programming language, we develop modern iOS applications that offer excellent speed, security, reliability, and a seamless user experience.",
            icon: SiSwift,
        },
        {
            title: "Hybrid Apps",
            description:
                "We develop flexible hybrid applications that combine web technologies with mobile capabilities, enabling businesses to launch apps quickly across different platforms.",
            icon: GitBranch,
        },
    ];

    return (
        <section className="px-6 py-20 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 pb-15 w-full max-w-[350px] text-[40px] font-baumans font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Every Kind of app.{" "}
                        <span className="text-[#000099]">
                            Build to Scale.
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
                            className="group min-h-[305px] w-full rounded-[20px] border border-[#c8c8c8] bg-[#f8f8ff] p-7  hover:border-[#000099] hover:bg-[#f8f8ff] hover:shadow-[0_10px_30px_rgba(0,0,153,0.08)]"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-[7px] border-2 border-[#000099] text-[#000099] ">
                                <Icon size={23} />
                            </div>

                            <h3 className="mt-9 font-baumans text-[20px] font-bold text-[#111111]">
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

export default MobileAppDevelopmentServices;