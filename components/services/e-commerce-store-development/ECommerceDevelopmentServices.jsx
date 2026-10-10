"use client";

import {
    SiShopify,
    SiWoocommerce,
} from "react-icons/si";

import {
    Globe,
    CreditCard,
    Store,
    Network,
} from "lucide-react";

function EcommerceDevelopmentServices() {
    const services = [
        {
            title: "Shopify & Shopify Plus Stores",
            description:
                "Shopify & Shopify Plus Stores Custom Shopify stores built from the ground up — theme design, Liquid development, and app integrations — or Shopify Plus for high-volume brands that need enterprise-grade flexibility.",
            icon: SiShopify,
        },
        {
            title: "WooCommerce Stores on WordPress",
            description:
                "Powerful, flexible WooCommerce stores for brands that want full ownership and control — with custom page builders, plugins, and unlimited scalability on your own infrastructure.",
            icon: SiWoocommerce,
        },
        {
            title: "Custom & Headless Commerce",
            description:
                "Future-ready eCommerce platforms built with scalable architecture and modern frameworks — ensuring fast performance, seamless integrations, and exceptional shopping experiences for growing businesses worldwide.",
            icon: Globe,
        },
        {
            title: "Payment, Logistics & ERP Integrations",
            description:
                "We connect your store to every system it needs — payment gateways, logistics partners, inventory management, and CRM — so your operations run seamlessly from day one.",
            icon: CreditCard,
        },
        {
            title: "Multi-Vendor Marketplace Development",
            description:
                "Build a full marketplace platform where multiple sellers can list and manage their own products — complete with vendor dashboards, commission management, and payout automation.",
            icon: Store,
        },
        {
            title: "Store Redesign, CRO & Platform Migration",
            description:
                "Already have a store but it's not converting? We redesign for conversion, migrate to better platforms, and run systematic CRO improvements that directly increase your revenue per visitor.",
            icon: Network,
        },
    ];

    return (
        <section className="w-full px-6 py-10 sm:px-10 lg:px-20 xl:px-26">
            <div className="flex flex-col items-center text-center">

                <div className="w-full">

                    <p className="font-bold text-[16px] font-baumans text-[#000099] lg:text-base">
                        Our Services
                    </p>

                    <h1 className="mx-auto m-4 pb-15 w-full max-w-[350px] text-[40px] font-baumans font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[650px]">
                        Every Kind of app.{" "}
                        <span className="text-[#000099]">
                            Build to Scale.
                        </span>
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={service.title}
                            className="min-h-[360px] w-full rounded-[20px] border border-[#c8c8c8] bg-[#f8f8ff] p-7 transition-all duration-300 hover:border-[#000099] hover:shadow-[0_10px_30px_rgba(0,0,153,0.08)]"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-[7px] border-2 border-[#000099] text-[#000099]">
                                <Icon size={23} />
                            </div>

                            <h3 className="mt-9 font-baumans text-[20px] font-bold leading-7 text-[#111111]">
                                {service.title}
                            </h3>

                            <p className="mt-2 font-poppins text-[14px] leading-7 text-[#344054]">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default EcommerceDevelopmentServices;