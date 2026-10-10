"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function IndustriesHero() {
    const [count, setCount] = useState(10);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let current = 10;

        const interval = setInterval(() => {
            current += 1;
            setCount(current);

            if (current >= 20) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [hasStarted]);

    return (
        <section className="w-full overflow-hidden px-6 pt-[170px] pb-40 sm:px-10 sm:pt-[140px] lg:px-4 lg:pt-[220px] xl:px-26 2xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Virexa - Powering Industry-Ready Software Solutions
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[450px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[700px] sm:text-[44px] lg:max-w-[700px] lg:text-[48px]">
                        One Unified Vision Empowering{" "}
                        <span className="text-[#000099]">
                            multiple Industry
                        </span>{" "}
                        Demands
                    </h1>

                    <p className="mx-auto m-3 w-full max-w-[600px] text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px]">
                        We specialize in delivering full-cycle software solutions and AI-driven tools
                        designed to accelerate digital transformation across every sector.
                    </p>

                    <Link
                        href="/contact"
                        className="group mx-auto mt-8 flex w-full max-w-[135px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099] sm:mt-10"
                    >
                        <span className="ps-2">
                            Let's Talk
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                            <ArrowUpRight size={21} />
                        </span>
                    </Link>

                </div>

            </div>

            <div className="pt-20 sm:pt-25">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                    <h1 className="m-0 w-full text-[36px] text-[#000000] font-baumans font-bold leading-tight sm:text-[40px] lg:w-1/2 lg:text-[44px]">
                        One Platform. Endless{" "}
                        <span className="text-[#000099]">
                            Industry
                        </span>{" "}
                        Possibilities.
                    </h1>

                    <p className="m-0 w-full text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px] lg:w-1/2">
                        We bring deep domain expertise and modern technology together to
                        solve real business challenges. From retail and healthcare to logistics
                        and education — our solutions are built for the specific demands of your
                        industry, not a one-size-fits-all template.
                    </p>

                </div>

                <div className="flex w-full flex-col gap-6 pt-12 lg:flex-row">

                    <div className="w-full rounded-4xl bg-[#000099] px-6 py-8 sm:px-10 lg:w-[35%]">

                        <h1
                            ref={counterRef}
                            className="font-baumans text-[48px] font-bold text-[#ececec] sm:text-[56px]"
                        >
                            {count}+
                        </h1>

                        <p className="font-poppins text-[14px] font-medium text-[#ececec] sm:text-[15px]">
                            our happy global clients
                        </p>

                        <img
                            src="/IndustriesImage/group-photo.svg"
                            alt="Image"
                            className="pt-5"
                        />

                    </div>

                    <div className="w-full lg:w-[65%]">

                        <img
                            className="h-[220px] w-full rounded-2xl object-cover sm:h-[260px] lg:h-[250px]"
                            src="/IndustriesImage/group-photo-2.avif"
                            alt=""
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default IndustriesHero;