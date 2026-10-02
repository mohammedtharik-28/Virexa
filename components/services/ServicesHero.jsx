"use client";

import Link from "next/link"

import { ArrowUpRight } from "lucide-react";

function ServicesHero() {
    return (
        <section className="px-8 pt-[170px] pb-40 lg:px-20 lg:pt-[220px] sm:pt-[140px] xl:px-50">
            <div className="flex flex-col items-center text-center">
                <div>
                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Virexa - where Ideas Meet Intelligent Technology
                    </p>


                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[48px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[600px] sm:max-w-[700px] ">
                        Innovate I{" "}
                        <span className="text-[#000099]">
                            Develop
                        </span>{" "}
                        I Deploy
                    </h1>
                    <p className="mx-auto m-3 w-full max-w-[700px] text-base font-medium text-[15px] font-poppins leading-6 text-gray-600">
                        We specialize in delivering full-cycle software solutions and AI-driven marketing
                        tools designed to accelerate digital transformation.
                    </p>

                    <Link
                        href="/contact"
                        className="group mx-auto mt-10 flex w-full max-w-[135px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
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

            <div className="pt-25 flex gap-5">
                <div >
                    <img className="w-250 h-180 rounded-2xl" src="/ServicesImage/serviceHero/serviceHeroImage1.webp" alt="Image1" />
                </div>
                <div>
                    <img className="rounded-xl" src="/ServicesImage/serviceHero/serviceHeroImage2.webp" alt="Image2" />
                    <div className=" bg-[#000099] text-start rounded-2xl px-6 pt-16 h-80 mt-6">
                        <h1 className="text-[26px] font-baumans font-bold text-[#ececec]">Turning Data Into Insights That Empower Your Business</h1>
                        <p className="text-[#ececec] font-medium text-[15px] font-poppins pt-5">Everything you need to launch fast, scale confidently, and succeed.</p>
                        <Link
                            href="/contact"
                            className="group flex w-full max-w-[165px] mt-10 items-center justify-end gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099]"
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
    )
}

export default ServicesHero;