import {
    ScrollText,
    Box,
    Network,
    Workflow,
    Building2,
    FileCog,
} from "lucide-react";

function SoftwareDevelopmentServices() {
    const services = [
        {
            title: "Tailored Software Solutions",
            description:
                "We build software designed specifically for your business needs. Our solutions improve efficiency, streamline workflows, and support business growth.",
            icon: ScrollText,
        },
        {
            title: "Software Product Development",
            description:
                "We deliver complete product development services from idea to launch. Our team creates scalable, user-friendly software ready for real-world use.",
            icon: Box,
        },
        {
            title: "System Migration & Integration",
            description:
                "We help businesses move from outdated systems to modern platforms smoothly. Our process ensures secure data transfer and seamless system integration.",
            icon: Network,
        },
        {
            title: "Workflow Automation",
            description:
                "We develop automation solutions that simplify repetitive business tasks. This helps companies improve productivity and reduce manual effort.",
            icon: Workflow,
        },
        {
            title: "Enterprise Software Solutions",
            description:
                "We build powerful enterprise applications for large-scale business operations. Our systems enhance collaboration, efficiency, and overall performance.",
            icon: Building2,
        },
        {
            title: "(MVP) Development",
            description:
                "We help startups and businesses quickly launch MVPs to validate their ideas. This allows faster testing, feedback collection, and product improvement.",
            icon: FileCog,
        },
    ];

    return (
        <section className="px-6 py-20 sm:px-10 lg:px-10 xl:px-26 2xl:px-50">
            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 pb-15 w-full max-w-[350px] text-[40px] font-baumans font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[980px]">
                        Custom software solutions built for{" "}
                        <span className="text-[#000099]">
                            real business growth
                        </span>
                    </h1>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={service.title}
                            className={`min-h-[305px] rounded-[20px] border border-[#c4c4c4] bg-[#f8f8ff] p-7 transition-all duration-300 hover:border-[#000099] ${
                                index === 1 || index === 3
                                    ? "border-[#0000ff]"
                                    : ""
                            }`}
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-[#0000aa] text-[#0000aa]">
                                <Icon size={23} strokeWidth={1.8} />
                            </div>

                            <h3 className="mt-9 font-baumans text-[18px] font-bold leading-6 text-[#111111]">
                                {service.title}
                            </h3>

                            <p className="mt-3 font-poppins text-[14px] leading-7 text-[#344054]">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SoftwareDevelopmentServices;