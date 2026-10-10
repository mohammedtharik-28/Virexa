import {
    Layers3,
    Clock3,
    Shield,
    MessageSquare,
    DollarSign,
    Star,
} from "lucide-react";

function AboutUsVirexaApproach() {
    const sectors = [
        {
            title: "Scalable Architecture",
            description:
                "Every system we build is designed for 10× your current scale from day one — auto-scaling infrastructure, modular codebases, and database architectures that don't require rebuilding.",
            icon: Layers3,
        },
        {
            title: "Startup-Speed Execution",
            description:
                "We move fast — 2-week sprints, weekly demos, and a bias for shipping. We've launched websites in 7 days and production apps in 6 weeks without compromising quality.",
            icon: Clock3,
        },
        {
            title: "Enterprise-Grade Standards",
            description:
                "Security, compliance, code quality, and testing standards that would pass enterprise scrutiny — applied to every project, not just the ones with enterprise budgets.",
            icon: Shield,
        },
        {
            title: "Transparent Communication",
            description:
                "No black-box development. You get Jira access, weekly standups, fortnightly demos, and a direct line to your PM — always knowing what's been built and what's next.",
            icon: MessageSquare,
        },
        {
            title: "Cost-Optimised Development",
            description:
                "We design systems that are efficient to build, cheap to run, and easy to maintain. No over-engineered solutions that cost a fortune to operate after launch.",
            icon: DollarSign,
        },
        {
            title: "Post-Launch Growth Support",
            description:
                "91% of our clients continue with us after launch. We stay as your technology partner for new features, optimisation, and ongoing growth — not just the delivery.",
            icon: Star,
        }
    ];

    return (
        <section className="w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="text-center">

                <p className="font-baumans text-[16px] font-bold text-[#000099]">
                    Virexa Approach
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[700px] font-baumans text-[36px] font-bold leading-tight text-[#000000] sm:text-[40px]">
                    More reasons{" "}
                    <span className="text-[#000099]">
                        clients
                    </span>{" "}
                    choose Virexa
                </h1>

                <p className="mx-auto w-full max-w-[620px] pt-5 font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                    We specialize in delivering full-cycle software solutions and AI-driven marketing
                    tools designed to accelerate digital transformation.
                </p>

            </div>

            <div className="mt-20 mb-15 w-full rounded-2xl bg-[#000099] py-10 sm:py-12 lg:mt-30">

                <div className="grid w-full grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-6">

                    {sectors.map((item, id) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={id}
                                className="flex min-h-[250px] min-w-0 flex-col rounded-2xl bg-[#000095] px-5 pb-12 pt-8 transition-all duration-200 hover:border hover:border-[#54595f]"
                            >

                                <div className="mb-8 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2525A8]">

                                    <Icon
                                        size={21}
                                        strokeWidth={1.7}
                                        className="text-white"
                                    />

                                </div>

                                <h2 className="font-baumans text-[20px] font-bold text-[#FFFFFF]">
                                    {item.title}
                                </h2>

                                <p className="pt-4 font-poppins text-[14px] font-normal leading-6 text-[#ececec]">
                                    {item.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default AboutUsVirexaApproach;