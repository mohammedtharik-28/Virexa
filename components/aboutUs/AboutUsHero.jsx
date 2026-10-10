"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AboutUsHero() {
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
        <section className="relative w-full overflow-hidden px-6 pt-[170px] pb-20 sm:px-10 sm:pt-[140px] lg:px-4 lg:pt-[220px] xl:px-26 2xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Virexa - Where Ideas Meet Intelligent Technology
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[700px] sm:text-[44px] lg:max-w-[650px] lg:text-[48px]">
                        Building Smarter Solutions for{" "}
                        <span className="text-[#000099]">
                            connected world
                        </span>
                    </h1>

                    <p className="mx-auto m-3 w-full max-w-[700px] text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px]">
                        We specialize in delievering full-cycle software solutions and AI-driven marketing tools designed to accelerate digital transformation.
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

                <div className="relative mt-20 w-full sm:mt-24 lg:mt-24">

                    <img
                        src="/AboutUsImage/AboutUsHeroImage.jpg"
                        alt="Virexa"
                        className="mx-auto block h-auto w-full rounded-3xl object-cover"
                    />

                    <div className="mt-6 w-full sm:mt-8 lg:absolute lg:bottom-5 lg:left-5 lg:mt-0 lg:w-auto xl:left-8">

                        <div className="w-full max-w-[300px] rounded-4xl bg-[#000099] px-8 py-8 text-start sm:px-10">

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

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutUsHero;