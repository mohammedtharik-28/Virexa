"use client";

import { useEffect, useRef, useState } from "react";

function AboutUsInfo() {
    const contactInfo = [
        {
            title: "Project Delivered",
            number: 40,
            content: "We take pride in delivering wide range of IT solutions."
        },
        {
            title: "Happy clients",
            number: 34,
            content: "Exceeding expectations with reliable innovation"
        },
        {
            title: "Years Of Experience",
            number: 9,
            content: "Successfully delivering innovative solutions."
        },
        {
            title: "Team Members",
            number: 14,
            content: "A dedicated team committed to excellence"
        }
    ];

    const [counts, setCounts] = useState(
        contactInfo.map(() => 0)
    );

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
                threshold: 0.3
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

        const intervals = contactInfo.map((item, index) => {
            let current = 0;

            return setInterval(() => {
                current += 1;

                setCounts((previous) => {
                    const updated = [...previous];
                    updated[index] = current;
                    return updated;
                });

                if (current >= item.number) {
                    clearInterval(intervals[index]);
                }
            }, 10);
        });

        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, [hasStarted]);

    return (
        <section className="relative mt-30 h-screen overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div
                    className="sticky top-0 h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/HeroImage.jpg')"
                    }}
                />
            </div>

            <div className="absolute inset-0 z-0 bg-black/30" />

            <div
                ref={counterRef}
                className="relative z-10 h-full overflow-y-auto px-6 py-24 lg:px-26"
            >

                <div className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 xl:grid-cols-4">

                    {contactInfo.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="min-h-[320px] rounded-3xl bg-gray-100 p-8 shadow-xl"
                            >

                                <h2 className="font-baumans text-[22px] font-bold text-[#000000]">
                                    {item.title}
                                </h2>

                                <div className="pt-10 font-baumans text-[45px] font-bold text-[#000000]">
                                    {counts[index] }{"+"}
                                </div>

                                <div className="pt-8 font-baumans text-[15px] font-medium leading-6 text-[#3c3b3b]">
                                    {item.content}
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default AboutUsInfo;