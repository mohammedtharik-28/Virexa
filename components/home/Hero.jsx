import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Hero() {
    return (
        <section className="px-8 pt-[170px] pb-20 lg:px-20 lg:pt-[220px] sm:pt-[140px] xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div>

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Build. Scale. Evolve with Technology
                    </p>


                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[48px] text-[#000000] font-baumans font-bold leading-tight md:max-w-[450px] lg:max-w-[600px] sm:max-w-[700px] ">
                        Turning{" "}
                        <span className="text-[#000099]">
                            ideas
                        </span>{" "}
                        into scalable
                        <span className="text-[#000099]">
                            {" "}digital products
                        </span>
                    </h1>


                    <p className="mx-auto m-3 w-full max-w-[700px] text-base font-medium text-[15px] font-poppins leading-6 text-gray-600">
                        We help startups and growing businesses turn ideas into
                        reliable digital products through smart engineering,
                        clean design, and future-ready technology.
                    </p>


                    <Link
                        href="/contact"
                        className="group mx-auto mt-10 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099]"
                    >
                        <span className="ps-2">
                            Get Started
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                            <ArrowUpRight size={21} />
                        </span>
                    </Link>

                </div>


                <div className="mt-24 w-full md:mt-8 sm:mt-20">

                    <img
                        src="/HeroImage.webp"
                        alt="Virexa"
                        className="mx-auto w-full max-w-[1200px] rounded-3xl"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;