"use client";

import Link from "next/link"

import { ArrowUpRight } from "lucide-react";

function IndustriesHero() {
    return (
        <section className="px-8 pt-[170px] pb-40 lg:px-20 lg:pt-[220px] sm:pt-[140px] xl:px-50">
            <div className="flex flex-col items-center text-center">
                <div>
                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Virexa - Powering Industry-Ready Software Solutions
                    </p>


                    <h1 className="mx-auto m-4 w-full max-w-[450px] text-[48px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[700px] sm:max-w-[700px] ">
                        One Unified Vision Empowering{" "}
                        <span className="text-[#000099]">
                            multiple Industry
                        </span>{" "}
                        Demands
                    </h1>
                    <p className="mx-auto m-3 w-full max-w-[600px] text-base font-medium text-[15px] font-poppins leading-6 text-gray-600">
                        We specialize in delivering full-cycle software solutions and AI-driven tools
                        designed to accelerate digital transformation across every sector.
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

            <div className="pt-25">
                <div className="flex items-center">
                    <h1 className="mx-auto m-4 w-full max-w-[450px] text-[44px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[700px] sm:max-w-[700px] ">
                        One Platform. Endless{" "}
                        <span className="text-[#000099]">
                            Industry
                        </span>{" "}
                        Possibilities.
                    </h1>
                    <p className="mx-auto m-3 w-full max-w-[600px] text-base font-medium text-[15px] font-poppins leading-6 text-gray-600">
                        We bring deep domain expertise and modern technology together to
                        solve real business challenges. From retail and healthcare to logistics
                        and education — our solutions are built for the specific demands of your
                        industry, not a one-size-fits-all template.
                    </p>
                </div>
                <div className="flex gap-6 w-full pt-12">
                    <div className="bg-[#000099] rounded-4xl max-w-[350px] py-8 px-10">
                        <h1 className="font-baumans font-bold text-[56px] text-[#ececec]">20+</h1>
                        <p className="font-poppins font-medium text-[15px] text-[#ececec]">our happy global clients</p>
                        <img src="/IndustriesImage/group-photo.svg" alt="Image" className="pt-5" />
                    </div>
                    <div >
                        <img className="h-65 rounded-2xl w-200 object-cover" src="/IndustriesImage/group-photo-2.avif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriesHero;