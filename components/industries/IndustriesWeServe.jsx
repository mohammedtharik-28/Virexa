import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

function IndustriesWeServe() {

    const sectors = [
        {
            title: "Retail & E-commerce",
            description:
                "End-to-end technology solutions for retail and e-commerce platforms, enabling faster transactions, real-time insights, and business growth. From DTC stores to multi-vendor marketplaces built to scale.",
            points: [
                "POS & Inventory",
                "Payment Integration"
            ]
        },
        {
            title: "Health Care",
            description:
                "Technology-driven healthcare solutions enabling secure data management, efficient clinical workflows, and better patient outcomes. HIPAA-compliant systems built for modern healthcare providers.",
            points: [
                "Patient Portal",
                "Appointment Booking"
            ]
        },
        {
            title: "Travel and Hospitality",
            description:
                "Technology-driven solutions for travel and hospitality businesses, enabling smarter property management, better customer engagement, and scalable growth across hotels, tours, and travel agencies.",
            points: [
                "OTA Integration",
                "CRM for Hospitality"
            ]
        },
        {
            title: "Food & Restaurant",
            description:
                "End-to-end technology solutions for restaurants and food businesses, enabling seamless online ordering, real-time kitchen management, delivery integration, and business growth analytics.",
            points: [
                "Delivery Integration",
                "Table Reservation"
            ]
        },
        {
            title: "Logistics & Distribution",
            description:
                "Empowering logistics and distribution businesses with technology to enhance real-time tracking, streamline warehouse operations, and scale efficiently with AI-powered route optimization.",
            points: [
                "Route Optimization",
                "Last-Mile Delivery"
            ]
        },
        {
            title: "Education & E-Learning",
            description:
                "Technology-driven solutions for education and e-learning platforms, enabling interactive content, efficient management, and learner engagement.",
            points: [
                "LMS Development",
                "Assessments"
            ]
        },
        {
            title: "On-Demand Solutions",
            description:
                "End-to-end on-demand technology solutions enabling real-time tracking, automation, and rapid business growth. From gig economy platforms to service marketplaces built for scale.",
            points: [
                "Real-Time Tracking",
                "Push Notifications"
            ]
        },
        {
            title: "Automotive",
            description:
                "Technology-driven solutions for automotive services, dealerships, and platforms, enabling smarter inventory management, service scheduling, vehicle tracking, and seamless customer operations.",
            points: [
                "Parts Inventory",
                "Vehicle Tracking"
            ]
        }
    ];

    return (
        <section className="w-full overflow-hidden px-6 py-40 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="font-baumans font-bold text-[16px] text-[#000099]">
                    Industries We Serve
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[750px] font-bold font-baumans text-[36px] leading-tight text-[#000000] sm:text-[40px]">
                    Smart{" "}
                    <span className="text-[#000099]">
                        technology solutions
                    </span>{" "}
                    designed for real industry growth.
                </h1>

            </div>

            <div className="mt-20 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">

                {sectors.map((item, id) => (

                    <div
                        key={id}
                        className="flex w-full min-w-0 gap-5 rounded-2xl border-b border-t border-[#cecece] py-8 sm:gap-8 lg:gap-12"
                    >

                        <div className="w-10 shrink-0 sm:w-12">
                            <h2 className="font-poppins text-[32px] font-medium text-[#69727d] sm:text-[40px]">
                                {String(id + 1).padStart(2, "0")}
                            </h2>
                        </div>

                        <div className="min-w-0 w-full max-w-[420px]">

                            <h2 className="font-baumans font-bold text-[18px] text-[#000000]">
                                {item.title}
                            </h2>

                            <p className="mt-3 font-poppins text-[14px] font-medium leading-6 text-[#54595f]">
                                {item.description}
                            </p>

                            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">

                                {item.points.map((point, index) => (

                                    <li
                                        key={index}
                                        className="font-poppins text-[14px] font-medium text-[#000099] after:ml-4 after:text-[#cecece] after:content-['|'] last:after:content-none"
                                    >
                                        {point}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default IndustriesWeServe;