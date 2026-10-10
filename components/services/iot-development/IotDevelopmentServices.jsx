"use client";

import {
    Cpu,
    Code2,
    Radio,
    CloudRain,
    Network,
    MonitorCog,
} from "lucide-react";

function IotDevelopmentServices() {
    const services = [
        {
            title: "IoT Hardware & Device Integration",
            description:
                "We select, prototype, and integrate the right hardware for your use case — from off-the-shelf Arduino/Raspberry Pi to custom PCB designs for production-grade deployments.",
            icon: Cpu,
        },
        {
            title: "Firmware & Embedded Software",
            description:
                "Reliable, optimised firmware for constrained IoT devices — written in C/C++ with low-power design, secure boot, and OTA update capability built in from day one.",
            icon: Code2,
        },
        {
            title: "Connectivity & Communication Protocols",
            description:
                "We implement the right communication stack for your deployment — from Bluetooth and Zigbee to NB-IoT and satellite connectivity for assets.",
            icon: Radio,
        },
        {
            title: "IoT Cloud Backend & Data Platform",
            description:
                "Scalable cloud infrastructure that ingests, stores, and processes millions of device events — with device management and provisioning built in.",
            icon: CloudRain,
        },
        {
            title: "Real-Time Dashboards & Mobile Apps",
            description:
                "Live monitoring dashboards and mobile apps that give teams instant visibility over connected devices — with alerts and controls in one screen.",
            icon: Network,
        },
        {
            title: "IoT Analytics & AI/ML Integration",
            description:
                "Turn raw sensor data into actionable intelligence — predictive maintenance, anomaly detection, demand forecasting, and automated decisions that reduce intervention.",
            icon: MonitorCog,
        },
    ];

    return (
        <section className="w-full px-6 py-10 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-15 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[900px]">
                        Custom IoT Solutions built for{" "}
                        <span className="text-[#000099]">
                            real business growth
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

export default IotDevelopmentServices;
