"use client";

import {
    Users,
    PanelsTopLeft,
    Globe,
    Smartphone,
    LayoutDashboard,
    FileSearch,
} from "lucide-react";

function UiUxDesignServices() {
    const services = [
        {
            title: "User Research & Analysis",
            description:
                "We study user behavior and business goals to design better digital experiences. Our research helps create products that are intuitive and user-focused.",
            icon: Users,
        },
        {
            title: "Wireframing & Prototyping",
            description:
                "We design wireframes and interactive prototypes to visualize product structure. This helps validate ideas and improve usability before development begins.",
            icon: PanelsTopLeft,
        },
        {
            title: "Web UI/UX Design",
            description:
                "We thoroughly test software functionality, usability, security, and compatibility. Our goal is to identify issues early and deliver a stable user experience.",
            icon: Globe,
        },
        {
            title: "Mobile App UI/UX Design",
            description:
                "We create intuitive mobile interfaces that deliver smooth user experiences. Our designs ensure apps are visually appealing and easy to use.",
            icon: Smartphone,
        },
        {
            title: "Product & Dashboard Design",
            description:
                "We design clean and functional dashboards for SaaS and digital platforms. Our UI ensures clear data visualization and effortless user interaction.",
            icon: LayoutDashboard,
        },
        {
            title: "UX Audit & Optimization",
            description:
                "We analyze existing products to identify usability issues and improvements. Our UX optimization helps enhance performance and user satisfaction.",
            icon: FileSearch,
        },
    ];

    return (
        <section className="w-full px-6 py-10 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-15 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Design experiences.{" "}
                        <span className="text-[#000099]">
                            Build better products.
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

export default UiUxDesignServices;
