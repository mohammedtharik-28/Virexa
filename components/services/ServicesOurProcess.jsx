"use client";

import { useState } from "react";

function OurProcess() {

    const process = [
        {
            stepNo: "Step 1",
            name: "Wireframe & design",
            flow: "We begin by transforming ideas into a clear visual structure. In this stage, we design detailed wireframes and user-centric UI layouts that define how the product will look, feel, and function.",
            point1: "Clean and structured layouts",
            point2: "Intuitive user flow and navigation",
            point3: "Consistent visual design aligned with your brand",
            point4: "Responsive design planning for all devices",
            img: "/processImage1.webp"
        },
        {
            stepNo: "Step 2",
            name: "Research & Discover",
            flow: "We dive deep into understanding your business, target audience, and market landscape. This phase helps us define the right strategy before development begins.",
            point1: "Business & requirement analysis",
            point2: "User behavior and journey mapping",
            point3: "Competitor and market research",
            point4: "Feature planning and scope finalization",
            img: "/processImage2.webp"
        },
        {
            stepNo: "Step 3",
            name: "Testing & Development",
            flow: "Once the design is finalized, we bring it to life through clean, scalable development—followed by rigorous testing to ensure performance and reliability.",
            point1: "Frontend & backend development",
            point2: "Responsive and performance optimization",
            point3: "Functional and usability testing",
            point4: "Bug fixing and quality assurance",
            img: "/processImage3.webp"
        },
        {
            stepNo: "Step 4",
            name: "Deliver & Results",
            flow: "After final validation, we deliver a fully functional product ready for launch. Our focus doesn’t stop at delivery—we ensure real results.",
            point1: "Final deployment and go-live support",
            point2: "Performance checks and optimization",
            point3: "Client handover & documentation",
            point4: "Ongoing support and future scalability",
            img: "/processImage4.webp"
        }
    ];

    const [processOpen, setProcessOpen] = useState(0);

    return (
        <section className="w-full overflow-hidden pt-20">

            <div className="w-full text-center">

                <p className="text-[16px] font-baumans font-bold text-[#000099] lg:text-base">
                    Our Process
                </p>

                <h1 className="mx-auto m-4 w-full max-w-[350px] text-[40px] font-bold font-baumans leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[780px]">
                    A Proven,{" "}
                    <span className="text-[#000099]">
                        Easy-to-Follow
                    </span>{" "}
                    Process for Developing Powerful{" "}
                    <span className="text-[#000099]">
                        digital Solutions
                    </span>
                </h1>

                <div className="mx-auto mt-20 w-full px-6 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

                    <div className="grid w-full grid-cols-2 border-b-2 border-gray-300 lg:grid-cols-4">

                        {process.map((items, id) => (

                            <button
                                key={id}
                                onClick={() => setProcessOpen(id)}
                                className={`
                                    min-w-0 cursor-pointer
                                    border-b-3
                                    px-2 py-5
                                    transition-all
                                    duration-300
                                    sm:px-5 sm:py-6
                                    lg:px-3
                                    xl:px-5
                                    ${
                                        processOpen === id
                                            ? "border-[#000099] text-[#000099]"
                                            : "border-transparent text-[#ececec]"
                                    }
                                `}
                            >

                                <h1 className="text-[30px] font-bold sm:text-[35px]">
                                    {id + 1}
                                </h1>

                                <h1 className="pt-3 text-[17px] font-baumans font-bold sm:text-[20px] lg:text-[22px]">
                                    {items.name}
                                </h1>

                            </button>

                        ))}

                    </div>

                </div>

                <div className="w-full px-6 py-15 text-start sm:px-10 lg:px-4 xl:px-30 2xl:px-50">

                    {process.map((item, id) => (

                        processOpen === id && (

                            <div
                                key={id}
                                className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12"
                            >

                                <div className="w-full max-w-[500px]">

                                    <h1 className="text-[16px] font-baumans font-bold text-[#000099]">
                                        ({item.stepNo})
                                    </h1>

                                    <h1 className="pt-3 text-[24px] font-baumans font-bold text-[#000000]">
                                        {item.name}
                                    </h1>

                                    <p className="pt-5 text-[14px] font-medium font-poppins leading-6 text-[#54595F] sm:text-[15px]">
                                        {item.flow}
                                    </p>

                                    <hr className="mt-3 text-gray-200" />

                                    <div className="pt-2 text-[14px] font-medium font-poppins text-[#54595F] sm:text-[15px]">

                                        <div className="flex items-start gap-3">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#54595F]"></span>
                                            <span>{item.point1}</span>
                                        </div>

                                        <div className="flex items-start gap-3 pt-1">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#54595F]"></span>
                                            <span>{item.point2}</span>
                                        </div>

                                        <div className="flex items-start gap-3 pt-1">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#54595F]"></span>
                                            <span>{item.point3}</span>
                                        </div>

                                        <div className="flex items-start gap-3 pt-1">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#54595F]"></span>
                                            <span>{item.point4}</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="w-full min-w-0 lg:w-1/2">

                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="block h-auto w-full rounded-2xl"
                                    />

                                </div>

                            </div>

                        )

                    ))}

                </div>

            </div>

        </section>
    );
}

export default OurProcess;