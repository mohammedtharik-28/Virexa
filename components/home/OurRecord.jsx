"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountNumber({ target }) {
    const [count, setCount] = useState(0);
    const sectionRef = useRef(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;

                    const duration = 1500;
                    const startTime = performance.now();

                    const updateCount = (currentTime) => {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        setCount(Math.floor(progress * target));

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={sectionRef}>
            <h2 className="font-baumans text-[40px] font-bold leading-none text-white sm:text-[45px]">
                {count}+
            </h2>
        </div>
    );
}

function OurRecord() {
    return (
        <section className="px-6 py-10 sm:px-10 lg:px-14 xl:px-26">
            <div className="rounded-[22px] bg-gradient-to-b from-[#08089b] via-[#05056b] to-[#000000] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-16">
                <h1 className="text-center font-baumans text-[28px] font-bold text-white sm:text-[32px] lg:text-[34px]">
                    Trusted by growing businesses
                </h1>

                <div className="grid grid-cols-1 gap-y-10 pt-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-0 lg:pt-16">
                    <div className="text-center">
                        <CountNumber target={40} />

                        <p className="mt-4 font-poppins text-[16px] font-medium text-white sm:text-[19px]">
                            Project Delivered
                        </p>
                    </div>

                    <div className="text-center">
                        <CountNumber target={34} />

                        <p className="mt-4 font-poppins text-[16px] font-medium text-white sm:text-[19px]">
                            Happy Clients
                        </p>
                    </div>

                    <div className="text-center">
                        <CountNumber target={9} />

                        <p className="mt-4 font-poppins text-[16px] font-medium text-white sm:text-[19px]">
                            Years Experience
                        </p>
                    </div>

                    <div className="text-center">
                        <CountNumber target={14} />

                        <p className="mt-4 font-poppins text-[16px] font-medium text-white sm:text-[19px]">
                            Team Members
                        </p>
                    </div>
                </div>
            </div>

            <Link
                href="/contact"
                className="group mx-auto mt-10 flex w-full max-w-[220px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-poppins font-semibold text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
            >
                <span className="ps-2">
                    Get Free Consultation
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                    <ArrowUpRight size={21} />
                </span>
            </Link>
        </section>
    );
}

export default OurRecord;