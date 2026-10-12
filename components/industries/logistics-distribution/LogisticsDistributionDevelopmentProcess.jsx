
"use client";

const processSteps = [
    {
        number: "1",
        title: "Operations Discovery",
        description:
            "We spend time in your warehouse, on your routes, and with your dispatchers before we design anything. We map every workflow, pain point, and exception case — then design technology around your operation, not around a template.",
    },
    {
        number: "2",
        title: "Solution Architecture",
        description:
            "We design the full technical architecture — data models, API integrations, real-time infrastructure, and mobile app offline strategy — and review it with your team before development begins.",
    },
    {
        number: "3",
        title: "UI/UX Design",
        description:
            "We design both the web dashboard for dispatchers/management and the mobile app for field teams — with real drivers testing prototypes before a line of code is written. Field usability is non-negotiable.",
    },
    {
        number: "4",
        title: "Development & Integration",
        description:
            "We build in 2-week sprints — real-time backend first, then driver app, then management dashboard. Every two weeks you see a working, testable build on real devices and with live GPS data.",
    },
    {
        number: "5",
        title: "Pilot & Scale",
        description:
            "We go live on one route or one warehouse first — fix any field issues — then roll out to the full operation. This eliminates launch-day chaos and builds driver confidence before full deployment.",
    },
];

export default function LogisticsDistributionDevelopmentProcess() {
    return (
        <section className="w-full overflow-hidden bg-white px-5 pt-15 pb-10 sm:px-8 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        How We Work
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Our Logistics Tech{" "}
                        <span className="text-[#000099]">
                            Delivery Process
                        </span>
                    </h1>

                    <p className="font-poppins mx-auto text-[14px] font-normal text-[#54595f] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[730px]">
                        We spend more time understanding your operations before writing code than most agencies spend on the entire project. That’s the difference.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl pt-20">
                <div className="relative">
                    <div className="flex flex-col md:gap-0">
                        {processSteps.map((step, index) => {
                            const isLeft = index % 2 === 1;

                            return (
                                <div
                                    key={step.number}
                                    className="relative grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4 py-6 md:min-h-[175px] md:grid-cols-[1fr_100px_1fr] md:items-center md:gap-0 md:py-0"
                                >
                                    {/* Mobile connecting line */}
                                    {index < processSteps.length - 1 && (
                                        <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute bottom-[-24px] left-[27px] top-[48px] z-0 w-px bg-gray-200 md:hidden"
                                        />
                                    )}

                                    {/* Step content */}
                                    <div
                                        className={`col-start-2 row-start-1 min-w-0 ${
                                            isLeft
                                                ? "md:col-start-1 md:row-start-1 md:pr-10 lg:pr-16"
                                                : "md:col-start-3 md:row-start-1 md:pl-10 lg:pl-16"
                                        } ${
                                            isLeft
                                                ? "md:text-right"
                                                : "md:text-left"
                                        }`}
                                    >
                                        {/* Mobile title */}
                                        <h3 className="mb-3 font-baumans text-[20px] font-bold text-[#000000] md:hidden">
                                            {step.title}
                                        </h3>

                                        {/* Desktop title */}
                                        <h3 className="mb-3 hidden font-baumans text-[20px] font-bold text-[#000000] md:block">
                                            {step.title}
                                        </h3>

                                        <p className="font-poppins text-[14px] font-medium leading-6 text-[#54595f] md:mt-0 md:text-base">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Mobile numbered circle */}
                                    <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:hidden">
                                        <button
                                            type="button"
                                            aria-label={`Step ${step.number}: ${step.title}`}
                                            className="timeline-circle relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f7fc] text-lg font-bold text-black transition-colors duration-300"
                                        >
                                            {step.number}

                                            <span
                                                aria-hidden="true"
                                                className="timeline-dotted-ring pointer-events-none absolute -inset-3 rounded-full"
                                            />
                                        </button>
                                    </div>

                                    {/* Desktop timeline */}
                                    <div className="relative z-10 hidden h-full items-center justify-center md:col-start-2 md:row-start-1 md:flex">
                                        {/* Line above the circle */}
                                        {index > 0 && (
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute bottom-1/2 left-1/2 top-0 w-px -translate-x-1/2 bg-gray-200"
                                            />
                                        )}

                                        {/* Line below the circle */}
                                        {index < processSteps.length - 1 && (
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute bottom-0 left-1/2 top-1/2 w-px -translate-x-1/2 bg-gray-200"
                                            />
                                        )}

                                        {/* Desktop numbered circle */}
                                        <button
                                            type="button"
                                            aria-label={`Step ${step.number}: ${step.title}`}
                                            className="timeline-circle relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f6f7fc] text-2xl font-bold text-black transition-colors duration-300"
                                        >
                                            {step.number}

                                            <span
                                                aria-hidden="true"
                                                className="timeline-dotted-ring pointer-events-none absolute -inset-3 rounded-full"
                                            />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
