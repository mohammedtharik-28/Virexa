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

    const activeProcess = process[processOpen];

    return (
        <section className="pt-20">

            <div className="text-center">

                <p className="text-[16px] font-baumans font-bold text-[#000099] lg:text-base">
                    Our Process
                </p>

                <h1 className="mx-auto m-4 w-full max-w-[350px] text-[#000000] font-bold font-baumans text-[40px] leading-tight sm:max-w-[700px] md:max-w-[450px] lg:max-w-[780px]">
                    A Clear,{" "}
                    <span className="text-[#000099]">
                        proven process
                    </span>{" "}
                    for building powerful{" "}
                    <span className="text-[#000099]">
                        digital products
                    </span>
                </h1>

                <div className="mx-auto mt-20 grid w-full xl:max-w-[1144px] 2xl:max-w-[1200px] grid-cols-2 border-b-2 border-gray-300 lg:grid-cols-4">

                    {process.map((items, id) => (

                        <button
                            key={id}
                            onClick={() => setProcessOpen(id)}
                            className={`
                                cursor-pointer
                                border-b-3
                                px-5 py-6
                                transition-all
                                duration-300
                                ${
                                    processOpen === id
                                        ? "border-[#000099] text-[#000099]"
                                        : "border-transparent text-[#ececec]"
                                }
                            `}
                        >

                            <h1 className="text-[35px] font-bold">
                                {id + 1}
                            </h1>

                            <h1 className="pt-4 text-[22px] font-baumans font-bold">
                                {items.name}
                            </h1>

                        </button>

                    ))}

                </div>

                <div className="mx-auto w-full px-6 py-15 text-start sm:px-10 lg:px-4 xl:px-30 2xl:px-50">

                    <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

                        <div className="w-full max-w-[500px]">

                            <h1 className="text-[16px] font-baumans font-bold text-[#000099]">
                                ({activeProcess.stepNo})
                            </h1>

                            <h1 className="pt-3 text-[24px] font-baumans font-bold text-[#000000]">
                                {activeProcess.name}
                            </h1>

                            <p className="pt-5 font-medium font-poppins text-[15px] text-[#54595F]">
                                {activeProcess.flow}
                            </p>

                            <hr className="mt-3 text-gray-200" />

                            <div className="pt-2 font-medium font-poppins text-[15px] text-[#54595F]">

                                <div className="flex items-center gap-3">
                                    <span className="h-1 w-1 rounded-full bg-[#54595F]"></span>
                                    <span>{activeProcess.point1}</span>
                                </div>

                                <div className="flex items-center gap-3 pt-1">
                                    <span className="h-1 w-1 rounded-full bg-[#54595F]"></span>
                                    <span>{activeProcess.point2}</span>
                                </div>

                                <div className="flex items-center gap-3 pt-1">
                                    <span className="h-1 w-1 rounded-full bg-[#54595F]"></span>
                                    <span>{activeProcess.point3}</span>
                                </div>

                                <div className="flex items-center gap-3 pt-1">
                                    <span className="h-1 w-1 rounded-full bg-[#54595F]"></span>
                                    <span>{activeProcess.point4}</span>
                                </div>

                            </div>

                        </div>

                        <div className="w-full lg:w-auto">

                            <img
                                src={activeProcess.img}
                                alt={activeProcess.name}
                                className="w-full max-w-[520px] rounded-2xl"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default OurProcess;