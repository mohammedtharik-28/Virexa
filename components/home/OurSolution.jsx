import Link from "next/link";
import {
    ArrowUpRight,
    UsersRound,
    PenTool,
    FileClock,
} from "lucide-react";

function OurSolution() {
    return (
        <section className="px-6 pt-[100px] pb-20 sm:px-10 sm:pt-[120px] lg:px-12 lg:pt-[120px] xl:px-30">

            <div className="flex flex-col items-center text-center">

                <div>

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Great software changes everything
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[500px] md:max-w-[600px] lg:max-w-[680px]">
                        Transforming{" "}
                        <span className="text-[#000099]">
                            technology solutions
                        </span>{" "}
                        into scalable growth
                    </h1>

                    <p className="mx-auto m-3 w-full max-w-[600px] text-base font-medium font-poppins text-[15px] leading-6 text-gray-600">
                        We deliver end-to-end technology solutions that help businesses innovate and
                        grow. Custom software development to cloud integration
                    </p>

                    <Link
                        href="/about"
                        className="group mx-auto mt-10 flex w-full max-w-[170px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
                    >
                        <span className="ps-2">
                            Learn More Us
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                            <ArrowUpRight size={21} />
                        </span>
                    </Link>

                </div>

            </div>

            <hr className="mt-15 text-gray-200" />

            <div className="grid grid-cols-1 gap-14 pt-20 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:pt-20 xl:gap-20">

                <div className="mx-auto w-full max-w-[330px]">

                    <UsersRound
                        size={48}
                        strokeWidth={2}
                        className="mx-auto mb-8 text-[#000099]"
                    />

                    <h1 className="text-[24px] font-bold font-baumans text-[#000000]">
                        Dedicated Product Team
                    </h1>

                    <p className="pt-5 font-medium text-[15px] font-poppins text-[#54595F]">
                        You work with engineers and designers who think like product owners. Clear communication. Structured execution. Zero guesswork.
                    </p>

                </div>

                <div className="mx-auto w-full max-w-[330px]">

                    <PenTool
                        size={48}
                        strokeWidth={2}
                        className="mx-auto mb-8 text-[#000099]"
                    />

                    <h1 className="text-[24px] font-bold font-baumans text-[#000000]">
                        High-Impact UI UX Design
                    </h1>

                    <p className="pt-5 font-medium text-[15px] font-poppins text-[#54595F]">
                        Good design is not decoration. It drives adoption. We design intuitive, conversion-focused interfaces that users understand instantly.
                    </p>

                </div>

                <div className="mx-auto w-full max-w-[330px]">

                    <FileClock
                        size={48}
                        strokeWidth={2}
                        className="mx-auto mb-8 text-[#000099]"
                    />

                    <h1 className="text-[24px] font-bold font-baumans text-[#000000]">
                        Fast, Disciplined Delivery
                    </h1>

                    <p className="pt-5 font-medium text-[15px] font-poppins text-[#54595F]">
                        We move fast, but with structure. Agile sprints, transparent timelines, and production-ready code from day one.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default OurSolution;