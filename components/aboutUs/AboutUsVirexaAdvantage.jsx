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
        <section className="mt-20 pt-15 pb-15 bg-gray-100">

            <div className="text-center">

                <p className="font-baumans font-bold text-[16px] text-[#000099]">
                    The Virexa Advantage
                </p>

                <h1 className="mx-auto mt-4 max-w-[700px] font-baumans font-bold text-[40px] leading-tight text-[#000000]">
                    What Sets Us{" "}
                    <span className="text-[#000099]">
                        Apart
                    </span>
                </h1>

                <p className="mx-auto max-w-[620px] pt-5 font-poppins font-medium text-[15px] text-[#54595f]">
                    Every agency claims to be different. Here's what actually makes
                    working with Virexa a different experience.
                </p>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-5 px-5">
                {technical.map((item, id) => (
                    <div
                        key={id}
                        className="group flex items-center gap-4 rounded-full border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099]"
                    >
                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins font-medium text-[14px] text-[#4a4949] transition-all duration-300 group-hover:text-white">
                            {item.point}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-5 px-5">
                {technical2.map((item, id) => (
                    <div
                        key={id}
                        className="group flex max-w-[180px] items-center gap-4 rounded-2xl border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099]"
                    >
                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins font-medium text-[14px] text-[#4a4949] transition-all duration-300 group-hover:text-white">
                            {item.point}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-5 px-5">
                {technical3.map((item, id) => (
                    <div
                        key={id}
                        className="group flex items-center gap-4 rounded-full border-2 border-[#ececec] p-[10px] transition-all duration-300 hover:bg-[#000099]"
                    >
                        <Check
                            className="shrink-0 text-[#000099] transition-all duration-300 group-hover:text-white"
                            size={15}
                        />

                        <h1 className="font-poppins font-medium text-[14px] text-[#4a4949] transition-all duration-300 group-hover:text-white">
                            {item.point}
                        </h1>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default AboutUsVirexaAdvantage;