import {
    MonitorCog,
    MonitorCog as CmsIcon,
    ShoppingCart,
    Building2,
    FileCode2,
    Blocks,
} from "lucide-react";

function WebsiteDevelopmentServices() {
    const services = [
        {
            title: "Custom Website Development",
            description:
                "We build tailored websites designed around your brand and business goals. Our solutions ensure scalability, security, and high performance.",
            icon: MonitorCog,
        },
        {
            title: "CMS Website Development",
            description:
                "We develop easy-to-manage CMS websites using platforms like WordPress and Drupal. This allows businesses to update content without technical skills.",
            icon: CmsIcon,
        },
        {
            title: "eCommerce Website Development",
            description:
                "We create secure and scalable online stores optimized for performance and conversions. Our solutions help businesses sell products seamlessly online.",
            icon: ShoppingCart,
        },
        {
            title: "Enterprise Web Applications",
            description:
                "We develop enterprise-grade web applications for complex business operations. These platforms support large data handling, workflows, and integrations.",
            icon: Building2,
        },
        {
            title: "PHP Web Development",
            description:
                "Our developers build dynamic and scalable websites using PHP frameworks. This ensures reliable performance, flexibility, and secure web solutions.",
            icon: FileCode2,
        },
        {
            title: "Python Web Development",
            description:
                "We create powerful web applications using Python frameworks like Django and Flask. These solutions provide fast development, clean architecture, and strong security.",
            icon: Blocks,
        },
    ];

    return (
        <section className="px-6 py-16 sm:px-10 lg:px-10 xl:px-26 2xl:px-50">
            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 pb-15 w-full max-w-[350px] text-[40px] font-baumans font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[700px]">
                        Every type of website{" "}
                        <span className="text-[#000099]">
                            build to perform.
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

export default WebsiteDevelopmentServices;