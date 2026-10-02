import Link from "next/link"
import { ArrowUpRight } from "lucide-react";

function OurRecord() {
    return (
        <section className="px-50">
            <div className="text-center bg-[#000099] p-10 rounded-3xl">
                <h1 className="text-[32px] font-baumans font-bold text-[#ffffff]">Trusted by growing businesses</h1>
                <div className="flex justify-center gap-25 pt-20 pb-5 text-gray-100">
                    <div>
                        <h1 className="text-[45px] font-baumans text-[#ffffff] font-bold">40+</h1>
                        <p className="text-[20px] font-poppins text-[#ffffff] font-medium">Projects Delievered</p>
                    </div>
                    <div>
                        <h1 className="text-[45px] font-baumans text-[#ffffff] font-bold">34+</h1>
                        <p className="text-[20px] font-poppins text-[#ffffff] font-medium">Happy Clients</p>
                    </div>
                    <div>
                        <h1 className="text-[45px] font-baumans text-[#ffffff] font-bold">9+</h1>
                        <p className="text-[20px] font-poppins text-[#ffffff] font-medium">Years Experience</p>
                    </div>
                    <div>
                        <h1 className="text-[45px] font-baumans text-[#ffffff] font-bold">14+</h1>
                        <p className="text-[20px] font-poppins text-[#ffffff] font-medium">Team Members</p>
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
        </section >
    )
}

export default OurRecord;