import Link from "next/link";
import {
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Globe,
    ShoppingCart,
    Smartphone,
    Palette,
    TestTube,
    Megaphone,
    PenTool,
    Video,
} from "lucide-react";

function servicesOurServices() {

    const solutions = [
        {
            title: "AI Solutions Built for Real Business Growth",
            icon: BrainCircuit,
            description:
                "We help startups and growing businesses build practical AI solutions — from intelligent chatbots and automation tools to custom ML models — designed to reduce costs, improve efficiency, and unlock new revenue opportunities.",
            points: [
                "Custom LLM & AI Applications",
                "Business Process Automation",
                "Predictive Analytics & Insights",
                "AI-Powered Web & Mobile Apps"
            ],
            technologies: [
                "OpenAI",
                "TensorFlow",
                "LangChain",
                "Python"
            ]
        },
        {
            title: "Custom Software Development",
            icon: Code2,
            description:
                "Custom-built software solutions tailored to your business needs. From system design to deployment, we deliver scalable, secure, and performance-driven applications.",
            points: [
                "Tailor-Made Business Solutions",
                "Scalable & Secure Architecture",
                "API & System Integrations",
                "Automation & Performance Optimized"
            ],
            technologies: [
                "Billing Solutions",
                "CRM",
                "ERP",
                "HRM"
            ]
        },
        {
            title: "Website Design & Development",
            icon: Globe,
            description:
                "Custom, mobile-responsive websites designed to convert. From corporate websites to high-impact landing pages, we deliver in as fast as 7 days.",
            points: [
                "Custom UI/UX Design",
                "Mobile-First Responsive",
                "SEO & Schema Optimized",
                "Fast Hosting & CDN"
            ],
            technologies: [
                "Webflow",
                "Framer",
                "Figma"
            ]
        },
        {
            title: "E-Commerce Store Development",
            icon: ShoppingCart,
            description:
                "Full-featured online stores, multi-vendor marketplaces, and quick-commerce apps built to maximize sales and average order value.",
            points: [
                "DTC, B2B, and marketplace business models",
                "Payment & Shipping Integration",
                "Inventory Management",
                "Mobile Commerce Optimized"
            ],
            technologies: [
                "Shopify",
                "WordPress",
                "eCommerce"
            ]
        },
        {
            title: "Mobile App Development",
            icon: Smartphone,
            description:
                "From idea to launch, we design and develop secure, user-centric mobile applications powered by modern tech and AI-driven insights — built for startups and growing businesses.",
            points: [
                "Mobile-First UI/UX Design",
                "iOS & Android App Development",
                "Scalable App Architecture",
                "Performance & Speed Optimization",
                "App Store Optimization (ASO)"
            ],
            technologies: [
                "BReact Native",
                "Flutter",
                "iOS & Android"
            ]
        },
        {
            title: "UI/UX Design",
            icon: Palette,
            description:
                "We design modern, conversion-focused digital experiences using AI-powered systems—delivering fast, scalable, high-performance UI/UX for startups to enterprises.",
            points: [
                "AI-Driven UX Research",
                "Mobile-First Experience Design",
                "Scalable UI Systems",
                "Real User Behavior Tracking",
                "SEO-Friendly UX"
            ],
            technologies: [
                "Webflow",
                "Framer",
                "Figma",
                "Ai-Focused"
            ]
        },
        {
            title: "Software Testing",
            icon: TestTube,
            description:
                "AI-enabled testing built to ship faster, safer, and at scale. We combine automation, real-device testing, and intelligent QA systems to eliminate bugs before they reach users.",
            points: [
                "Automated & Manual Testing",
                "AI-Assisted Test Case Generation",
                "API & Integration Testing",
                "Cross-Browser & Device Testing",
                "Bug Tracking & QA Reporting",
                "Scalable QA Pipelines"
            ],
            technologies: [
                "Selenium",
                "Cypress",
                "Postman",
                "Playwright"
            ]
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            description:
                "AI-powered digital marketing strategies designed to attract, engage, and convert—at scale. We blend data, creativity, and automation to help startups and growing brands achieve measurable growth across every digital touchpoint.",
            points: [
                "Performance-Driven Ad Campaigns",
                "SEO + AI Content Optimization",
                "High-Intent Lead Generation",
                "Real-Time Analytics & AI Insights",
                "Scalable Marketing Systems"
            ],
            technologies: [
                "Google",
                "Meta",
                "SEMrush",
                "Surfer SEO"
            ]
        },
        {
            title: "Graphic Design",
            icon: PenTool,
            description:
                "Designs that don’t just look good — they drive attention, trust, and action. We craft high-impact visuals using modern design systems and AI tools to help brands stand out consistently across every digital touchpoint.",
            points: [
                "Logo Design & Brand Identity",
                "Social Media Creatives & Ads",
                "Marketing Collaterals (Posters, Flyers, Banners)",
                "Presentation & Pitch Deck Design",
                "Print & Digital Asset Design"
            ],
            technologies: [
                "Adobe creative suites",
                "Coral Draw",
                "AI Tools"
            ]
        },
        {
            title: "Video Editing",
            icon: Video,
            description:
                "High-impact video editing that helps your brand attract attention, drive engagement, and convert viewers into customers. We create visually compelling, platform-optimized videos that strengthen your marketing campaigns and boost brand visibility.",
            points: [
                "Ad & Promotional Video Editing for digital campaigns",
                "Social Media Videos optimized for Reels, Shorts, YouTube & Ads",
                "Clear Audio & Music Sync to enhance message delivery",
                "Marketing-Driven Video Editing focused on audience retention and conversions",
            ],
            technologies: [
                "Premiere Pro",
                "After Effects",
                "DaVinci Resolve",
                "Final Cut Pro"
            ]
        },
    ];

    return (
        <section className="bg-gray-100 px-8 pb-20 pt-[170px] sm:pt-[140px] mt-15 lg:px-20 lg:pt-[100px] xl:px-50">

            <div className="flex flex-col items-center text-center">

                <div>

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] text-[#000000] text-[40px] font-baumans font-bold leading-tight sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Building{" "}
                        <span className="text-[#000099]">
                            engineering
                        </span>{" "}
                        excellence for the{" "}
                        <span className="text-[#000099]">
                            digital world
                        </span>
                    </h1>

                </div>

                <div className="grid w-full grid-cols-1 gap-6 pt-10 md:grid-cols-2">

                    {solutions.map((item, id) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={id}
                                className="w-full rounded-2xl bg-gray-200 p-10 text-start"
                            >

                                <div>

                                    <Icon
                                        size={35}
                                        strokeWidth={2}
                                        className="text-[#000099]"
                                    />

                                    <h1 className="pt-4 text-[24px] font-baumans text-[#000000] font-bold">
                                        {item.title}
                                    </h1>

                                    <p className="pt-5 font-medium font-poppins text-[15px] text-[#54595F]">
                                        {item.description}
                                    </p>

                                </div>

                                <div className="pt-5 font-medium font-poppins text-[15px] text-[#54595f]">

                                    {item.points.map((point, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 pt-3 first:pt-0"
                                        >

                                            <span className="h-2 w-2 rounded-full bg-[#54595f]"></span>

                                            <span>
                                                {point}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                                <ul className="flex flex-wrap gap-3 pt-5 text-[14px] font-poppins font-medium text-[#000099]">

                                    {item.technologies.map((technology, index) => (
                                        <li key={index}>
                                            {technology}
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default servicesOurServices;