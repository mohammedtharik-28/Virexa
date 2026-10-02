import Link from "next/link";

import {ArrowUpRight} from "lucide-react";

function IndustriesWhatWeBuild() {
    const sectors = [
        {
            title: "Software Development",
            description:
                "Build scalable custom software solutions that streamline business operations, improve productivity, and deliver secure, high-performance applications tailored to your goals.",
        },
        {
            title: "Website Developmente",
            description:
                "Design and develop responsive, SEO-friendly websites that enhance user experience, strengthen your online presence, and drive measurable business growth.",
        },
        {
            title: "Mobile App development",
            description:
                "Create high-performance Android and iOS applications with intuitive interfaces, seamless functionality, and scalable features that engage users effectively.",
        },
        {
            title: "Graphic Design",
            description:
                "Craft impactful visual designs, branding assets, marketing materials, and creative graphics that strengthen brand identity and captivate your audience.",
        },
        {
            title: "E- commerce Store Development",
            description:
                "Develop secure and scalable e-commerce stores with seamless shopping experiences, payment integration, inventory management, and conversion-focused features.",
        },
        {
            title: "Digital Marketing",
            description:
                "Grow your business through strategic SEO, social media marketing, paid advertising, and data-driven campaigns that maximize visibility and lead generation.",
        },
        {
            title: "UI / UX development",
            description:
                "Design intuitive user interfaces and engaging user experiences that improve usability, increase customer satisfaction, and drive higher conversion rates.",
        },
        {
            title: "Software Testing",
            description:
                "Ensure software quality through comprehensive manual and automated testing, identifying issues early to deliver secure, reliable, and high-performing applications.",
        },
        {
            title: "Video Editing",
            description:
                "Produce professional video content with creative editing, motion graphics, color enhancement, and storytelling that strengthens your brand and audience engagement.",
        }
    ];

    return (
        <section className="px-6 pb-20 pt-40 lg:px-20 xl:px-50">

            <div className="text-center">

                <p className="text-[16px] font-baumans font-bold text-[#000099] lg:text-base">
                    Build for Every Sector
                </p>

                <h1 className="mx-auto mt-4 max-w-[700px] text-[40px] font-baumans text-[#000000] font-bold leading-tight">
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


            <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {sectors.map((sector, index) => (
                    <div
                        key={index}
                        className="flex min-h-[280px] flex-col items-center justify-center border border-gray-200 p-8 text-center transition-all duration-300 hover:bg-[#d0eaf8]"
                    >

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                            <img
                                src=""
                                alt=""
                                className="h-8 w-8"
                            />
                        </div>


                        <h2 className="text-[17px] font-baumans font-semibold text-[#54595f]">
                            {sector.title}
                        </h2>

                        <p className="pt-4 text-[13px] font-poppins font-medium leading-6 text-[#54595f]">
                            {sector.description}
                        </p>

                    </div>
                ))}
            </div>

            <div className="bg-[#000099] text-center rounded-2xl py-12 px-50 mt-25">
                <h1 className="text-[40px] font-baumans font-bold text-[#ececec]">Let’s build your next digital product — faster, safer, smarter.</h1>
                <p className="text-[#ececec] font-medium text-[15px] font-poppins pt-6">Have a great idea but not sure how to bring it to life? We’re here to help.</p>
                <Link
                    href="/contact"
                    className="group mx-auto mt-10 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099]"
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