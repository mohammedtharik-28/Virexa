import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

function WebsiteDevelopmentIncluded() {
    const sections = [
        {
            title: (
                <>
                    <span className="text-[#000099]">100% Custom UI/UX</span>{" "}
                    Built for Your Brand
                </>
            ),
            description:
                "100% custom UI/UX designed specifically for your brand, audience, and conversion goals — no templates or generic layouts.",
            image: "/servicesImage/website-development-Image/image1.webp",
            points: [
                "Figma wireframes & high-fidelity mockups",
                "Brand colours, typography & design system",
                "Conversion-focused layout structure",
                "Design approval before development",
            ],
            imageLeft: true,
        },
        {
            title: (
                <>
                    <span className="text-[#000099]">Mobile-First</span> On
                    Every Screen
                </>
            ),
            description:
                "We design for mobile first and scale up to tablet and desktop, ensuring a smooth experience on every device.",
            image: "/servicesImage/website-development-Image/image2.webp",
            points: [
                "Mobile, tablet & desktop optimisation",
                "Touch-friendly navigation & UI",
                "Cross-browser compatibility",
                "Real-device testing before launch",
            ],
            imageLeft: false,
        },
        {
            title: (
                <>
                    <span className="text-[#000099]">
                        Secure Deployment & Hosting
                    </span>
                </>
            ),
            description:
                "Your website launches on fast, secure infrastructure designed for reliability and scalability.",
            image: "/servicesImage/website-development-Image/image3.webp",
            points: [
                "Global CDN delivery",
                "SSL & HTTPS security",
                "99.9% uptime hosting",
                "Automated backups",
            ],
            imageLeft: true,
        },
    ];

    return (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-10 xl:px-26 2xl:px-50">
            <div className="mx-auto max-w-[1400px]">
                <div className="text-center">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] sm:text-[15px]">
                        What's Included
                    </p>

                    <h2 className="mx-auto mt-5 max-w-[900px] font-baumans font-bold text-[40px] leading-tight text-black sm:text-[40px] lg:text-[42px]">
                        Every website we build comes with{" "}
                        <span className="text-[#000099]">
                            all of this
                        </span>
                    </h2>
                </div>

                <div className="mt-16 space-y-14 lg:mt-20 lg:space-y-14">
                    {sections.map((section) => (
                        <div
                            key={section.description}
                            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-12 ${
                                section.imageLeft
                                    ? ""
                                    : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                            }`}
                        >
                            <div className="relative h-[280px] overflow-hidden rounded-[10px] sm:h-[330px] lg:h-[316px]">
                                <Image
                                    src={section.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/20 px-5 py-4 backdrop-blur-md">
                                    <div className="h-1 w-3/4 rounded-full bg-white/50" />
                                    <div className="mt-3 h-1 w-full rounded-full bg-white/40" />
                                    <div className="mt-3 h-1 w-2/3 rounded-full bg-white/30" />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-baumans text-[22px] font-bold leading-8 text-[#000000] sm:text-[24px]">
                                    {section.title}
                                </h3>

                                <p className="mt-4 max-w-[600px] font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                    {section.description}
                                </p>

                                <div className="mt-7 space-y-4">
                                    {section.points.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                                <Check
                                                    size={13}
                                                    strokeWidth={3}
                                                />
                                            </span>

                                            <p className="font-poppins text-[15px] font-medium text-[#54595f] sm:text-[15px]">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact-us"
                                    className="mt-7 inline-flex items-center gap-2 border-b border-[#000099] pb-1 font-poppins text-[14px] font-semibold text-[#000099]"
                                >
                                    Start with a free design brief

                                    <ArrowUpRight size={17} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WebsiteDevelopmentIncluded;