import Link from "next/link";
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
        <section className="mt-20">

            <div className="text-center">

                <p className="font-baumans font-bold text-[16px] text-[#000099]">
                    Virexa Approach
                </p>

                <h1 className="mx-auto mt-4 max-w-[700px] font-baumans font-bold text-[40px] leading-tight text-[#000000]">
                    More reasons{" "}
                    <span className="text-[#000099]">
                        clients
                    </span>{" "}
                    choose Virexa
                </h1>

                <p className="font-poppins font-medium text-[15px] text-[#54595f] mx-auto max-w-[620px] pt-5">
                    We specialize in delivering full-cycle software solutions and AI-driven marketing
                    tools designed to accelerate digital transformation.
                </p>

            </div>

            <div className="px-6 py-15 sm:px-10 lg:px-20 xl:px-30 bg-[#000099] mt-30 mb-15">

                <div className="grid grid-cols-1 gap-3 pt-12 sm:grid-cols-2 lg:grid-cols-3">

                    {sectors.map((item, id) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={id}
                                className="flex min-h-[250px] flex-col rounded-2xl bg-[#000095] px-5 pt-8 pb-12 hover:border hover:border-[#54595f]"
                            >

                                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2525A8]">
                                    <Icon
                                        size={21}
                                        strokeWidth={1.7}
                                        className="text-white"
                                    />
                                </div>

                                <h2 className="font-baumans font-bold text-[20px] text-[#FFFFFF]">
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