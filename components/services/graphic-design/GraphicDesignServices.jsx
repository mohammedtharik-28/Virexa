"use client";

import {
    ContactRound,
    Printer,
    ListTodo,
    Presentation,
    PackageCheck,
    ChartNoAxesColumn,
} from "lucide-react";

function GraphicDesignServices() {
    const services = [
        {
            title: "Logo & Brand Identity",
            description:
                "We create memorable logos and complete brand identity systems that reflect your business values. Our designs ensure consistency across all digital and print platforms.",
            icon: ContactRound,
        },
        {
            title: "Marketing & Print Design",
            description:
                "We design professional marketing materials that strengthen your brand presence. From brochures to banners, our designs help businesses communicate effectively.",
            icon: Printer,
        },
        {
            title: "Social Media Graphics & Templates",
            description:
                "We design engaging social media creatives optimized for every platform. Our visuals help brands attract attention and increase audience engagement.",
            icon: ListTodo,
        },
        {
            title: "Pitch Decks & Presentations",
            description:
                "We create visually compelling presentations that communicate ideas clearly. Perfect for investor pitches, proposals, and corporate presentations.",
            icon: Presentation,
        },
        {
            title: "Packaging & Product Design",
            description:
                "We design attractive packaging that enhances product appeal and brand identity. Our designs help products stand out on shelves and online marketplaces.",
            icon: PackageCheck,
        },
        {
            title: "Infographics & Data Visualization",
            description:
                "We transform complex data into clear and visually engaging graphics. Our infographics make information easier to understand and share.",
            icon: ChartNoAxesColumn,
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
                        Creative Design Solutions.{" "}
                        <span className="text-[#000099]">
                            Built for Your Brand.
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

export default GraphicDesignServices;
