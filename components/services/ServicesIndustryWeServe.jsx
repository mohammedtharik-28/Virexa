import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

function ServicesIndustryWeServe() {

    const sectors = [
        {
            title: "Retail & E-commerce",
            description:
                "End-to-end technology solutions for retail and e-commerce platforms, enabling faster transactions, real-time insights, and business growth.",
        },
        {
            title: "Health Care",
            description:
                "Technology-driven healthcare solutions enabling secure data management, efficient workflows, and better patient outcomes.",
        },
        {
            title: "Travel and Hospitality",
            description:
                "Technology-driven solutions for travel and hospitality businesses, enabling smarter management, better customer engagement, and scalable growth.",
        },
        {
            title: "Food & Restaurant",
            description:
                "End-to-end technology solutions for restaurants and food businesses, enabling seamless ordering, real-time management, and business growth.",
        },
        {
            title: "Logistics & Distribution",
            description:
                "Empowering logistics and distribution businesses with technology to enhance tracking, streamline processes, and scale operations efficiently.",
        },
        {
            title: "Education & E-Learning",
            description:
                "Technology-driven solutions for education and e-learning platforms, enabling interactive content, efficient management, and learner engagement.",
        },
        {
            title: "On-Demand Solutions",
            description:
                "End-to-end on-demand technology solutions enabling real-time tracking, automation, and rapid business growth.",
        },
        {
            title: "Automotive",
            description:
                "Technology-driven solutions for automotive services, dealerships, and platforms, enabling smarter management and seamless operations.",
        }
    ];

    return (
        <section className="w-full overflow-hidden px-6 py-40 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="font-baumans text-[16px] font-bold text-[#000099]">
                    Industries We Serve
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[700px] font-baumans text-[36px] font-bold leading-tight text-[#000000] sm:text-[40px]">
                    One Unified Vision Empowering Multiple{" "}
                    <span className="text-[#000099]">
                        Industry Demands
                    </span>
                </h1>

            </div>

            <div className="grid w-full grid-cols-1 gap-3 pt-12 sm:grid-cols-2 lg:grid-cols-4">

                {sectors.map((item, id) => (

                    <div
                        key={id}
                        className="flex min-h-[250px] min-w-0 flex-col rounded-2xl border border-[#ececec] px-5 pb-12 pt-8 transition-all duration-200 hover:border-[#000099]"
                    >

                        <h2 className="font-baumans text-[22px] font-bold text-[#000000] sm:text-[24px]">
                            {item.title}
                        </h2>

                        <p className="pt-4 font-poppins text-[14px] font-medium leading-6 text-[#54595f]">
                            {item.description}
                        </p>

                    </div>

                ))}

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

export default ServicesIndustryWeServe;