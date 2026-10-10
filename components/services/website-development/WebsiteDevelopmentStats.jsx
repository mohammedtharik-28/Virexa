"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function WebsiteDevelopmentStats() {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef(null);
    const hasStarted = useRef(false);

    const stats = [
        {
            number: 40,
            label: "Project Delivered",
        },
        {
            number: 34,
            label: "Happy Clients",
        },
        {
            number: 9,
            label: "Years Experience",
        },
        {
            number: 14,
            label: "Team Members",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;

                    const duration = 1800;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const easedProgress =
                            1 - Math.pow(1 - progress, 3);

                        setCounts(
                            stats.map((stat) =>
                                Math.floor(
                                    stat.number * easedProgress
                                )
                            )
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCounts(
                                stats.map((stat) => stat.number)
                            );
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white px-6 pb-16 pt-8 sm:px-10 lg:px-10 xl:px-26 2xl:px-50"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="rounded-[20px] bg-gradient-to-b from-[#0808a8] to-[#000000] px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
                    <h2 className="text-center font-baumans text-[30px] font-bold text-white sm:text-[34px]">
                        Trusted by growing businesses
                    </h2>

                    <div className="mt-14 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center"
                            >
                                <h3 className="font-baumans text-[40px] font-bold leading-none text-white sm:text-[44px]">
                                    {counts[index]}+
                                </h3>

                                <p className="mt-4 font-poppins text-[15px] font-semibold text-white sm:text-[17px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center pt-10">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-3 rounded-full bg-[#000099] px-4 py-2 font-poppins text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#000077]"
                    >
                        Get Free Consultation

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#000099]">
                            <ArrowUpRight size={19} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default WebsiteDevelopmentStats;