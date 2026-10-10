import Link from "next/link";

import {
    ArrowUpRight,
    Code2,
    Globe,
    Smartphone,
    Palette,
    ShoppingCart,
    Megaphone,
    PanelsTopLeft,
    TestTube,
    Video,
} from "lucide-react";

function IndustriesWhatWeBuild() {
    const sectors = [
        {
            title: "Software Development",
            icon: Code2,
            iconColor: "#0088FF",
            iconBg: "#EEF7FF",
            description:
                "Build scalable custom software solutions that streamline business operations, improve productivity, and deliver secure, high-performance applications tailored to your goals.",
        },
        {
            title: "Website Developmente",
            icon: Globe,
            iconColor: "#000099",
            iconBg: "#EEF0FF",
            description:
                "Design and develop responsive, SEO-friendly websites that enhance user experience, strengthen your online presence, and drive measurable business growth.",
        },
        {
            title: "Mobile App development",
            icon: Smartphone,
            iconColor: "#FF6B00",
            iconBg: "#FFF5E8",
            description:
                "Create high-performance Android and iOS applications with intuitive interfaces, seamless functionality, and scalable features that engage users effectively.",
        },
        {
            title: "Graphic Design",
            icon: Palette,
            iconColor: "#FF00D4",
            iconBg: "#FBEAFF",
            description:
                "Craft impactful visual designs, branding assets, marketing materials, and creative graphics that strengthen brand identity and captivate your audience.",
        },
        {
            title: "E- commerce Store Development",
            icon: ShoppingCart,
            iconColor: "#8A00FF",
            iconBg: "#F3E8FF",
            description:
                "Develop secure and scalable e-commerce stores with seamless shopping experiences, payment integration, inventory management, and conversion-focused features.",
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            iconColor: "#7B00FF",
            iconBg: "#F2E8FF",
            description:
                "Grow your business through strategic SEO, social media marketing, paid advertising, and data-driven campaigns that maximize visibility and lead generation.",
        },
        {
            title: "UI / UX development",
            icon: PanelsTopLeft,
            iconColor: "#FF9D00",
            iconBg: "#FFF4C7",
            description:
                "Design intuitive user interfaces and engaging user experiences that improve usability, increase customer satisfaction, and drive higher conversion rates.",
        },
        {
            title: "Software Testing",
            icon: TestTube,
            iconColor: "#FF2020",
            iconBg: "#FBE8E8",
            description:
                "Ensure software quality through comprehensive manual and automated testing, identifying issues early to deliver secure, reliable, and high-performing applications.",
        },
        {
            title: "Video Editing",
            icon: Video,
            iconColor: "#A00080",
            iconBg: "#F8E8F4",
            description:
                "Produce professional video content with creative editing, motion graphics, color enhancement, and storytelling that strengthens your brand and audience engagement.",
        },
    ];

    return (
        <section className="w-full overflow-hidden px-6 pb-20 pt-40 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="text-[16px] font-baumans font-bold text-[#000099] lg:text-base">
                    Build for Every Sector
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[700px] text-[36px] font-baumans font-bold leading-tight text-[#000000] sm:text-[40px]">
                    Proven across{" "}
                    <span className="text-[#000099]">
                        industries.
                    </span>{" "}
                    focused on{" "}
                    <span className="text-[#000099]">
                        outcomes.
                    </span>
                </h1>

            </div>

            <div className="mx-auto mt-16 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                {sectors.map((sector, index) => {

                    const Icon = sector.icon;

                    return (
                        <div
                            key={index}
                            className="flex min-h-[280px] min-w-0 flex-col items-center justify-center border border-gray-200 p-6 text-center transition-all duration-300 hover:bg-[#d0eaf8] sm:p-8"
                        >

                            <div
                                className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                                style={{
                                    backgroundColor: sector.iconBg,
                                }}
                            >
                                <Icon
                                    size={30}
                                    strokeWidth={2}
                                    style={{
                                        color: sector.iconColor,
                                    }}
                                />
                            </div>

                            <h2 className="text-[17px] font-baumans font-semibold text-[#54595f]">
                                {sector.title}
                            </h2>

                            <p className="pt-4 text-[13px] font-poppins font-medium leading-6 text-[#54595f]">
                                {sector.description}
                            </p>

                        </div>
                    );
                })}

            </div>

            <div className="mt-20 w-full rounded-2xl bg-[#000099] px-6 py-12 text-center sm:px-10 lg:mt-25 lg:px-20 xl:px-30 2xl:px-50">

                <h1 className="mx-auto max-w-[900px] text-[30px] font-baumans font-bold leading-tight text-[#ececec] sm:text-[36px] lg:text-[40px]">
                    Let’s build your next digital product — faster, safer, smarter.
                </h1>

                <p className="mx-auto max-w-[650px] pt-6 text-[14px] font-medium font-poppins leading-6 text-[#ececec] sm:text-[15px]">
                    Have a great idea but not sure how to bring it to life? We’re here to help.
                </p>

                <Link
                    href="/contact"
                    className="group mx-auto mt-8 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099] sm:mt-10"
                >

                    <span className="ps-2">
                        Get in Touch
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-gray-200 transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                        <ArrowUpRight size={21} />
                    </span>

                </Link>

            </div>

        </section>
    );
}

export default IndustriesWhatWeBuild;