import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Hero() {
    return (
        <section className="px-6 pt-[130px] pb-16 sm:px-10 sm:pt-[150px] sm:pb-20 lg:mx-4 lg:px-0 lg:pt-[220px] xl:mx-26 2xl:mx-50">

            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Build. Scale. Evolve with Technology
                    </p>

                    <h1 className="mx-auto mt-4 w-full max-w-[350px] text-[40px] text-[#000000] font-baumans font-bold leading-tight sm:max-w-[550px] sm:text-[44px] lg:max-w-[600px] lg:text-[48px]">
                        Turning{" "}
                        <span className="text-[#000099]">
                            ideas
                        </span>{" "}
                        into scalable
                        <span className="text-[#000099]">
                            {" "}digital products
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 w-full max-w-[700px] text-[14px] font-medium font-poppins leading-6 text-gray-600 sm:text-[15px]">
                        We help startups and growing businesses turn ideas into
                        reliable digital products through smart engineering,
                        clean design, and future-ready technology.
                    </p>

                    <Link
                        href="/contact"
                        className="group mx-auto mt-8 flex w-full max-w-[155px] items-center justify-center gap-3 rounded-full bg-[#000099] px-3 py-2 text-[13px] font-semibold font-poppins text-gray-200 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:text-[#000099] sm:mt-10"
                    >
                        <span className="ps-2">
                            Get Started
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[#000099] transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
                            <ArrowUpRight size={21} />
                        </span>
                    </Link>

                </div>

                <div className="mt-14 w-full sm:mt-20 lg:mt-24">

                    <img
                        src="/HeroImage.webp"
                        alt="Virexa"
                        className="block w-full rounded-2xl sm:rounded-3xl"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;