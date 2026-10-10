import { Check } from "lucide-react";

function AboutUsVirexaAdvantage() {

    const technical = [
        {
            point: "Scalable Architecture",
        },
        {
            point: "Startup-Speed Execution",
        },
        {
            point: "Enterprise-Grade Standards",
        },
        {
            point: "Transparent Communication",
        },
        {
            point: "Cost-Optimised",
        }
    ];

    const technical2 = [
        {
            point: "Product-First Mindset",
        },
        {
            point: "Modern Tech Stack",
        },
        {
            point: "AI-First Engineering",
        },
        {
            point: "Cloud & DevOps Ready",
        },
        {
            point: "Post-Launch Growth Support",
        }
    ];

    const technical3 = [
        {
            point: "Flexible Engagement Model",
        },
        {
            point: "India-Market Expertise",
        }
    ];

    return (
        <section className="mt-20 w-full overflow-hidden bg-gray-100 px-6 py-15 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="font-baumans text-[16px] font-bold text-[#000099]">
                    The Virexa Advantage
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[700px] font-baumans text-[36px] font-bold leading-tight text-[#000000] sm:text-[40px]">
                    What Sets Us{" "}
                    <span className="text-[#000099]">
                        Apart
                    </span>
                </h1>

                <p className="mx-auto w-full max-w-[620px] pt-5 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                    Every agency claims to be different. Here's what actually makes
                    working with Virexa a different experience.
                </p>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-2">

                {technical.map((item, id) => (

                    <div
                        key={id}
                        className="group flex max-w-full items-center gap-3 rounded-full border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099] sm:gap-3"
                    >

                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins text-[13px] font-medium text-[#4a4949] transition-all duration-300 group-hover:text-white sm:text-[14px]">
                            {item.point}
                        </h1>

                    </div>

                ))}

            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-3 sm:mt-5 sm:gap-2">

                {technical2.map((item, id) => (

                    <div
                        key={id}
                        className="group flex max-w-full items-center gap-3 rounded-2xl border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099] sm:gap-4"
                    >

                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins text-[13px] font-medium text-[#4a4949] transition-all duration-300 group-hover:text-white sm:text-[14px]">
                            {item.point}
                        </h1>

                    </div>

                ))}

            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-3 sm:mt-5 sm:gap-5">

                {technical3.map((item, id) => (

                    <div
                        key={id}
                        className="group flex max-w-full items-center gap-3 rounded-full border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099] sm:gap-4"
                    >

                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins text-[13px] font-medium text-[#4a4949] transition-all duration-300 group-hover:text-white sm:text-[14px]">
                            {item.point}
                        </h1>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default AboutUsVirexaAdvantage;