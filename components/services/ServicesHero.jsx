"use client";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

function ServicesHero() {
    return (
        <section className="px-6 pt-[170px] pb-40 sm:px-10 sm:pt-[140px] lg:px-4 lg:pt-[220px] xl:px-26 2xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div>

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Virexa - where Ideas Meet Intelligent Technology
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[700px] sm:text-[44px] md:max-w-[500px] lg:max-w-[600px] lg:text-[48px]">
                        Innovate I{" "}
                        <span className="text-[#000099]">
                            Develop
                        </span>{" "}
                        I Deploy
                    </h1>

                    <p className="mx-auto m-3 w-full max-w-[700px] text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px]">
                        We specialize in delivering full-cycle software solutions and AI-driven marketing
                        tools designed to accelerate digital transformation.
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

            <div className="flex flex-col gap-5 pt-20 sm:pt-25 lg:flex-row">

                <div className="w-full lg:w-1/2">

                    <img
                        className="h-auto w-full rounded-2xl object-cover lg:h-full"
                        src="/ServicesImage/serviceHero/serviceHeroImage1.webp"
                        alt="Image1"
                    />

                </div>

                <div className="flex w-full flex-col gap-5 lg:w-1/2">

                    <div className="flex-1">

                        <img
                            className="h-full min-h-[250px] w-full rounded-xl object-cover"
                            src="/ServicesImage/serviceHero/serviceHeroImage2.webp"
                            alt="Image2"
                        />

                    </div>

                    <div className="flex flex-1 flex-col justify-center rounded-2xl bg-[#000099] px-6 py-10 text-start sm:px-8 lg:px-6">

                        <h1 className="text-[24px] font-baumans font-bold text-[#ececec] sm:text-[26px]">
                            Turning Data Into Insights That Empower Your Business
                        </h1>

                        <p className="pt-5 text-[14px] font-medium font-poppins text-[#ececec] sm:text-[15px]">
                            Everything you need to launch fast, scale confidently, and succeed.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-8 flex w-full max-w-[165px] items-center justify-end gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099] sm:mt-10"
                        >
                            <span className="ps-2">
                                Request a call
                            </span>

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-gray-200 transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                                <ArrowUpRight size={21} />
                            </span>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ServicesHero;