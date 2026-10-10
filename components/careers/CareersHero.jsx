import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function CareersHero() {
    return (
        <section className="relative z-10 w-full overflow-hidden px-6 pt-[170px] pb-36 sm:px-10 sm:pt-[140px] lg:px-4 lg:pt-[220px] xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                    Careers at Virexa
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[700px] sm:text-[44px] lg:max-w-[600px] lg:text-[48px]">
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
    );
}

export default CareersHero;