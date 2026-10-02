import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function WhatWeBuild() {

    const solutions = [
        {
            title: "AI Solutions for Real Work",
            description:
                "We build AI-powered applications that automate operations, enhance decision-making, and unlock insights from your data.",
            points: [
                "Custom AI applications",
                "Workflow automation systems",
                "NLP and conversational interfaces",
                "AI dashboards and predictive analytics"
            ],
            technologies: [
                "OpenAI",
                "TensorFlow",
                "LangChain",
                "Python"
            ]
        },
        {
            title: "Custom Software Development",
            description:
                "Scalable web and mobile applications built with clean architecture and modern tech stacks.",
            points: [
                "SaaS platforms",
                "Enterprise applications",
                "API development and integrations",
                "Cloud-native systems"
            ],
            technologies: [
                "Billing Solutions",
                "CRM",
                "ERP",
                "HRM"
            ]
        },
        {
            title: "Website Development",
            description:
                "High-performance websites designed to deliver seamless experiences and support business growth.",
            points: [
                "Business websites",
                "E-commerce platforms",
                "Responsive web applications",
                "CMS development"
            ],
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB"
            ]
        },
        {
            title: "UI/UX Design",
            description:
                "User-focused designs that combine intuitive experiences with a strong and consistent visual identity.",
            points: [
                "User research",
                "Wireframing and prototyping",
                "UI design systems",
                "Usability testing"
            ],
            technologies: [
                "Figma",
                "Adobe XD",
                "Framer",
                "FigJam"
            ]
        }
    ];

    return (
        <section className="bg-gray-100 px-8 pb-20 pt-[170px] sm:pt-[140px] lg:px-20 lg:pt-[100px] xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div>

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        What We Build
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[#000000] text-[40px] font-baumans font-bold leading-tight sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Smart{" "}
                        <span className="text-[#000099]">
                            technology solutions
                        </span>{" "}
                        designed for real business growth.
                    </h1>

                </div>


                <div className="grid w-full grid-cols-1 gap-6 pt-10 md:grid-cols-2">

                    {solutions.map((item, id) => (

                        <div
                            key={id}
                            className="w-full rounded-2xl bg-gray-200 p-10 text-start"
                        >

                            <div>

                                <h1 className="text-[24px] font-baumans text-[#000000] font-bold">
                                    {item.title}
                                </h1>

                                <p className="pt-5 font-medium text-[15px] font-poppins text-[#54595F]">
                                    {item.description}
                                </p>

                            </div>


                            <div className="pt-5 font-medium font-poppins text-[15px] text-[#54595f]">

                                {item.points.map((point, index) => (

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


                            <ul className="flex flex-wrap gap-3 pt-5 text-[14px] font-poppins font-medium text-[#000099]">

                                {item.technologies.map((technology, index) => (

                                    <li key={index}>
                                        {technology}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    ))}

                </div>


                <Link
                    href="/contact"
                    className="group mx-auto mt-15 flex w-full max-w-[190px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-poppins font-semibold text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
                >

                    <span className="ps-2">
                        View all Services
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">

                        <ArrowUpRight size={21} />

                    </span>

                </Link>

            </div>

        </section>
    );
}

export default WhatWeBuild;