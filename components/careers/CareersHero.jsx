import Link from "next/link";
import {ArrowUpRight}  from "lucide-react";

function CareersHero() {
    return (
        <section className="px-30 pt-50 pb-36 relative z-10 ">
            <div className="text-center">

                <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                    Careers at Virexa
                </p>


                <h1 className="mx-auto m-4 w-full max-w-[350px] text-[48px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[600px] sm:max-w-[700px] ">
                    Come Build Your Career at Virexa
                </h1>

                <Link
                    href="/contact"
                    className="group mx-auto mt-10 flex w-full max-w-[145px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
                >
                    <span className="ps-2">
                        Apply Now
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                        <ArrowUpRight size={21} />
                    </span>
                </Link>

            </div>
        </section>
    )
}

export default CareersHero;