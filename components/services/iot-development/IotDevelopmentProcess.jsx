"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function IotDevelopmentProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "IoT Discovery & Architecture",
            description:
                "We define your IoT use case, select the right technology stack, and design a scalable architecture connecting devices, data, and cloud infrastructure.",
            tags: ["Requirements", "Architecture", "Planning"],
            points: [
                "Business use case and requirements",
                "Hardware and connectivity planning",
                "System architecture design",
                "Project scope and roadmap",
            ],
            bg: "bg-[#e5faf7]",
        },
        {
            stepNo: "STEP 02",
            name: "Hardware Prototyping",
            description:
                "We select hardware, build a working prototype, and get your first device sending real data to the cloud — typically within 2 weeks of kick-off.",
            tags: ["BOM & Hardware", "Firmware v0", "First Data Packet"],
            points: [
                "Hardware component selection",
                "Firmware development setup",
                "Sensor & device integration",
                "First live data transmission",
            ],
            bg: "bg-[#e6e6f8]",
        },
        {
            stepNo: "STEP 03",
            name: "Platform & Dashboard Build",
            description:
                "We build the IoT platform, cloud backend, and dashboards needed to collect device data, monitor operations, and manage connected devices.",
            tags: ["Cloud Backend", "Dashboard", "Integration"],
            points: [
                "Cloud infrastructure and data ingestion",
                "Device management and provisioning",
                "Real-time dashboard development",
                "Alerts and device controls",
            ],
            bg: "bg-[#fde5ed]",
        },
        {
            stepNo: "STEP 04",
            name: "Pilot Deployment & Testing",
            description:
                "We deploy your IoT solution in a controlled environment, validate device connectivity, and test reliability, performance, and data accuracy before rollout.",
            tags: ["Pilot", "Testing", "Validation"],
            points: [
                "Pilot device installation",
                "Connectivity and data validation",
                "Performance and reliability testing",
                "Issue tracking and resolution",
            ],
            bg: "bg-[#ffead9]",
        },
        {
            stepNo: "STEP 05",
            name: "Deployment & Go-Live",
            description:
                "We roll out your validated IoT solution to production, configure devices and cloud services, and verify that your connected systems are running reliably.",
            tags: ["Deployment", "Production", "Launch"],
            points: [
                "Production device provisioning",
                "Cloud platform deployment",
                "End-to-end system verification",
                "Go-live monitoring",
            ],
            bg: "bg-[#dcfce9]",
        },
        {
            stepNo: "STEP 06",
            name: "Rollout & Ongoing Support",
            description:
                "We support your IoT deployment with monitoring, firmware updates, maintenance, and continuous improvements as your connected device network grows.",
            tags: ["Monitoring", "Maintenance", "Growth"],
            points: [
                "Device health monitoring",
                "Firmware and OTA updates",
                "Troubleshooting and maintenance",
                "Scaling and ongoing optimization",
            ],
            bg: "bg-[#fff3d4]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-[#f7f7f8] px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    Our Process
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    A clear, proven process for{" "}
                    <span className="text-[#000099]">
                        predictable delivery
                    </span>
                </p>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-2 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {process.map((item, index) => {
                    const isActive = activeStep === index;

                    return (
                        <button
                            key={item.stepNo}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            aria-expanded={isActive}
                            aria-label={`${item.stepNo}: ${item.name}`}
                            className={`relative w-full shrink-0 overflow-hidden rounded-[10px] text-left transition-[width,min-height] duration-500 ease-in-out lg:min-h-[430px] ${
                                isActive
                                    ? "min-h-0 lg:w-[678px]"
                                    : "h-[76px] min-h-[76px] lg:h-auto lg:w-[74px]"
                            } ${item.bg}`}
                        >
                            {isActive ? (
                                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[430px] lg:px-14 lg:py-14">
                                    <div className="flex items-center gap-3">
                                        <span className="h-[3px] w-4 shrink-0 bg-[#000099]" />

                                        <span className="font-poppins text-[12px] font-medium text-[#000099] sm:text-[13px]">
                                            {item.stepNo}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-baumans text-[22px] font-bold leading-snug text-black sm:text-[24px]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 max-w-[610px] font-poppins text-[14px] font-medium leading-6 text-[#344054] sm:text-[15px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2.5">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="whitespace-nowrap rounded-full border border-[#dedfff] bg-[#f1f1ff] px-4 py-1.5 font-poppins text-[11px] font-medium text-[#000099] sm:px-5 sm:text-[12px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 space-y-3">
                                        {item.points.map((point, pointIndex) => (
                                            <div
                                                key={`${point}-${pointIndex}`}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                                    <Check
                                                        size={11}
                                                        strokeWidth={3}
                                                    />
                                                </span>

                                                <span className="font-poppins text-[13px] font-medium leading-5 text-[#344054] sm:text-[14px]">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex h-[76px] w-full items-center justify-center px-4 text-center lg:hidden">
                                        <span className="line-clamp-2 w-full font-baumans text-[16px] font-bold leading-5 text-black sm:text-[18px]">
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="hidden h-full min-h-[430px] w-full items-center justify-center lg:flex">
                                        <span
                                            className="whitespace-nowrap font-baumans text-[22px] font-bold text-black"
                                            style={{
                                                writingMode: "vertical-rl",
                                                transform: "rotate(180deg)",
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default IotDevelopmentProcess;