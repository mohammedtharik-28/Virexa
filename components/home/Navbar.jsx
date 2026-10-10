"use client";

import Link from "next/link";

import {
    ChevronDown,
    ChevronUp,
    ArrowUpRight,
    Menu,
    X,
} from "lucide-react";

import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaThreads,
    FaPhone,
    FaEnvelope,
    FaGlobe,
    FaCode,
    FaMagnifyingGlass,
    FaMobileScreenButton,
    FaCartShopping,
    FaBullhorn,
    FaPalette,
    FaServer,
    FaVideo,
    FaPenNib,
    FaStore,
    FaHeartPulse,
    FaGraduationCap,
    FaTruck,
    FaPlane,
    FaUtensils,
    FaCar,
    FaBolt,
} from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const hoverCard =
        "group/item rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[#000099]/20 hover:bg-[#f5f7ff]";

    const services = [
        {
            name: "Website Design & Development",
            href: "/services/website-development",
            description:
                "Custom, mobile-responsive websites built to convert — delivered in as fast as 7 days.",
            icon: FaGlobe,
            iconClass: "bg-[#eef0ff] text-[#000099]",
        },
        {
            name: "Custom Software Development",
            href: "/services/software-development",
            description:
                "Custom software tailored to your needs — scalable, secure, and performance-driven.",
            icon: FaCode,
            iconClass: "bg-[#edf6ff] text-[#008cff]",
        },
        {
            name: "Software Testing",
            href: "/services/software-testing",
            description:
                "Intelligent software testing built for speed, quality, and scale.",
            icon: FaMagnifyingGlass,
            iconClass: "bg-[#fff0f0] text-red-500",
        },
        {
            name: "Mobile App Development",
            href: "/services/mobile-app-development",
            description:
                "Secure, user-centric mobile apps built with modern tech and AI.",
            icon: FaMobileScreenButton,
            iconClass: "bg-[#fff5eb] text-orange-500",
        },
        {
            name: "E-Commerce Store Development",
            href: "/services/e-commerce-store-development",
            description:
                "High-performance eCommerce stores built to boost sales and order value.",
            icon: FaCartShopping,
            iconClass: "bg-[#f4edff] text-purple-600",
        },
        {
            name: "UI/UX Design",
            href: "/services/ui-ux-design",
            description:
                "AI-driven digital experiences built for speed, scale, and conversions.",
            icon: FaPalette,
            iconClass: "bg-[#fff4d6] text-orange-400",
        },
        {
            name: "IoT Services",
            href: "/services/iot-development",
            description:
                "Smart IoT solutions for connected devices and real-time automation.",
            icon: FaServer,
            iconClass: "bg-[#edfff0] text-green-600",
        },
        {
            name: "Video Editing",
            href: "/services/video-editing",
            description:
                "Professional video editing that makes your content engaging, polished, and impactful.",
            icon: FaVideo,
            iconClass: "bg-[#f8edf5] text-[#a0005c]",
        },
        {
            name: "Graphic Design",
            href: "/services/graphic-design",
            description:
                "Creative graphic designs that enhance your brand identity and visual presence.",
            icon: FaPenNib,
            iconClass: "bg-[#fcecff] text-fuchsia-500",
        },
        {
            name: "Digital Marketing",
            href: "/services/digital-marketing",
            description:
                "Result-driven digital marketing strategies to grow your brand and increase conversions.",
            icon: FaBullhorn,
            iconClass: "bg-[#fcecff] text-fuchsia-500",
        },
    ];

    const products = [
        {
            name: "V-One Softwares",
            href: "/products/v-one-softwares",
        },
    ];

    const industries = [
        {
            name: "Retail & E-Commerce",
            href: "/industries/retail-ecommerce",
            description:
                "Technology solutions powering modern retail and e-commerce platforms.",
            icon: FaStore,
            iconClass: "bg-[#f1e5ff] text-purple-600",
        },
        {
            name: "Logistics & Distribution",
            href: "/industries/logistics",
            description:
                "Scalable technology solutions for smarter logistics and distribution.",
            icon: FaTruck,
            iconClass: "bg-[#dcfae8] text-green-600",
        },
        {
            name: "Food & Restaurant",
            href: "/industries/food-restaurant",
            description:
                "End-to-end tech solutions for restaurants and food businesses.",
            icon: FaUtensils,
            iconClass: "bg-[#ffecd4] text-orange-500",
        },
        {
            name: "Health Care",
            href: "/industries/healthcare",
            description:
                "Technology solutions for secure, efficient healthcare systems.",
            icon: FaHeartPulse,
            iconClass: "bg-[#ffe6f1] text-pink-500",
        },
        {
            name: "Education & E-Learning",
            href: "/industries/education",
            description:
                "Digital solutions for modern education and e-learning platforms.",
            icon: FaGraduationCap,
            iconClass: "bg-[#e4eaff] text-blue-600",
        },
        {
            name: "Automotive",
            href: "/industries/automotive",
            description:
                "Smart technology solutions for modern automotive businesses.",
            icon: FaCar,
            iconClass: "bg-[#d8f9fc] text-cyan-600",
        },
        {
            name: "Travel and Hospitality",
            href: "/industries/travel-hospitality",
            description:
                "Smart technology solutions for travel and hospitality businesses.",
            icon: FaPlane,
            iconClass: "bg-[#dceaff] text-blue-500",
        },
        {
            name: "On-Demand Solutions",
            href: "/industries/on-demand",
            description:
                "Real-time, scalable technology for on-demand businesses.",
            icon: FaBolt,
            iconClass: "bg-[#fff8c9] text-yellow-500",
        },
    ];

    const aboutLinks = [
        {
            name: "About Us",
            href: "/about-us",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Careers",
            href: "/careers",
        },
        {
            name: "Contact Us",
            href: "/contact-us",
        },
    ];

    const mobileSections = [
        {
            name: "Services",
            key: "services",
            items: services,
        },
        {
            name: "Products",
            key: "products",
            items: products,
        },
        {
            name: "Industries",
            key: "industries",
            items: industries,
        },
        {
            name: "Who We are",
            key: "about",
            items: aboutLinks,
        },
    ];

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setMobileDropdown(null);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="hidden bg-[#000099] px-5 py-2 text-white lg:flex lg:items-center lg:justify-between xl:px-26 2xl:px-50">
                <div className="flex items-center gap-5 xl:gap-8">
                    <Link
                        href="/phone"
                        className="flex items-center gap-2"
                    >
                        <FaPhone size={15} />
                        <span className="font-baumans text-[14px] font-semibold xl:text-[15px]">
                            +91 892-582-6080
                        </span>
                    </Link>

                    <Link
                        href="/mail"
                        className="flex items-center gap-2"
                    >
                        <FaEnvelope size={15} />
                        <span className="font-baumans text-[14px] font-semibold xl:text-[15px]">
                            sales@virexa.in
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-3 xl:gap-4">
                    <Link
                        href="/linkedIn"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white xl:h-10 xl:w-10"
                    >
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white xl:h-10 xl:w-10"
                    >
                        <FaFacebookF size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white xl:h-10 xl:w-10"
                    >
                        <FaInstagram size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white xl:h-10 xl:w-10"
                    >
                        <FaThreads size={16} />
                    </Link>
                </div>
            </div>

            <nav className="mx-3 my-3 hidden items-center justify-between rounded-full bg-white py-2 shadow-xl lg:flex lg:mx-4 xl:mx-26 2xl:mx-50">
                <Link
                    href="/"
                    className="ms-5 shrink-0 text-2xl font-bold text-[#000099] xl:ms-8"
                >
                    <img
                        src="/Final-virexa.svg"
                        alt="Virexa"
                        className="w-20 xl:w-22"
                    />
                </Link>

                <div className="flex min-w-0 items-center gap-3 lg:gap-4 xl:gap-5">
                    <div className="relative group">
                        <Link
                            href="/services"
                            className="flex items-center gap-1 text-[13px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099] xl:gap-2 xl:text-[15px]"
                        >
                            Services
                            <span className="relative flex items-center">
                                <ChevronDown
                                    size={15}
                                    className="block text-black group-hover:hidden"
                                />
                                <ChevronUp
                                    size={15}
                                    className="hidden text-[#000099] group-hover:block"
                                />
                            </span>
                        </Link>

                        <div className="absolute left-1/2 top-full z-50 hidden w-[min(1200px,90vw)] -translate-x-1/3 pt-7 group-hover:block">
                            <div className="rounded-b-2xl bg-white px-4 py-3 shadow-xl xl:px-5">
                                <div className="grid grid-cols-2 gap-x-2 gap-y-2 xl:grid-cols-3 xl:gap-y-3">
                                    {services.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={hoverCard}
                                            >
                                                <div className="flex gap-3 xl:gap-4">
                                                    <div
                                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl xl:h-11 xl:w-11 ${item.iconClass}`}
                                                    >
                                                        <Icon size={21} />
                                                    </div>

                                                    <div>
                                                        <h3 className="font-baumans text-[16px] font-bold text-[#000000] xl:text-[15px]">
                                                            {item.name}
                                                        </h3>

                                                        <p className="pt-1 font-baumans text-[15px] font-medium leading-5 text-[#54595F] xl:text-[13px]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link
                            href="/products"
                            className="flex items-center gap-1 text-[13px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099] xl:gap-2 xl:text-[15px]"
                        >
                            Products
                            <span className="relative flex items-center">
                                <ChevronDown
                                    size={15}
                                    className="block text-black group-hover:hidden"
                                />
                                <ChevronUp
                                    size={15}
                                    className="hidden text-[#000099] group-hover:block"
                                />
                            </span>
                        </Link>

                        <div className="absolute left-0 top-full z-50 hidden w-56 pt-3 group-hover:block">
                            <div className="rounded-xl bg-white p-3 shadow-xl">
                                {products.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link
                            href="/industries"
                            className="flex items-center gap-1 text-[13px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099] xl:gap-2 xl:text-[15px]"
                        >
                            Industries
                            <span className="relative flex items-center">
                                <ChevronDown
                                    size={15}
                                    className="block text-black group-hover:hidden"
                                />
                                <ChevronUp
                                    size={15}
                                    className="hidden text-[#000099] group-hover:block"
                                />
                            </span>
                        </Link>

                        <div className="absolute left-1/2 top-full z-50 hidden w-[min(1200px,90vw)] -translate-x-1/2 pt-7 group-hover:block">
                            <div className="rounded-b-2xl bg-white px-4 py-3 shadow-xl xl:px-5">
                                <div className="grid grid-cols-2 gap-x-2 gap-y-2 xl:grid-cols-3 xl:gap-y-3">
                                    {industries.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={hoverCard}
                                            >
                                                <div className="flex gap-3 xl:gap-4">
                                                    <div
                                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl xl:h-11 xl:w-11 ${item.iconClass}`}
                                                    >
                                                        <Icon size={21} />
                                                    </div>

                                                    <div>
                                                        <h3 className="font-baumans text-[16px] font-bold text-[#000000] xl:text-[15px]">
                                                            {item.name}
                                                        </h3>

                                                        <p className="pt-1 font-baumans text-[15px] font-medium leading-5 text-[#54595F] xl:text-[13px]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link
                            href="/about-us"
                            className="flex items-center gap-1 text-[13px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099] xl:gap-2 xl:text-[15px]"
                        >
                            Who We are
                            <span className="relative flex items-center">
                                <ChevronDown
                                    size={15}
                                    className="block text-black group-hover:hidden"
                                />
                                <ChevronUp
                                    size={15}
                                    className="hidden text-[#000099] group-hover:block"
                                />
                            </span>
                        </Link>

                        <div className="absolute left-0 top-full z-50 hidden w-56 pt-3 group-hover:block">
                            <div className="rounded-xl bg-white p-3 shadow-xl">
                                {aboutLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="me-5 flex shrink-0 items-center gap-2 rounded-full bg-gray-200 px-2 py-2 transition-all duration-200 hover:scale-105 hover:bg-[#b2ff66] hover:shadow-2xl xl:me-10 xl:gap-3 xl:px-3"
                >
                    <span className="ps-2 text-[12px] font-semibold font-poppins text-[#000099] xl:text-[13px]">
                        Let's Talk
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-white">
                        <ArrowUpRight size={20} />
                    </span>
                </Link>
            </nav>

            <div className="flex items-center justify-between bg-white px-5 pb-3 pt-6 lg:hidden">
                <Link
                    href="/"
                    className="text-2xl font-bold text-[#000099]"
                >
                    <img
                        src="/Final-virexa.svg"
                        alt="Virexa"
                        className="w-20 sm:w-22"
                    />
                </Link>

                <button
                    type="button"
                    onClick={() => {
                        setMenuOpen(!menuOpen);

                        if (menuOpen) {
                            setMobileDropdown(null);
                        }
                    }}
                    className="fixed right-5 top-6 z-[9999] flex h-11 w-11 items-center justify-center rounded-full text-[#54595f] sm:top-8 sm:h-12 sm:w-12"
                >
                    {menuOpen ? <X size={27} /> : <Menu size={27} />}
                </button>
            </div>

            {menuOpen && (
                <div className="w-full bg-white lg:hidden">
                    <div className="px-5 py-5 sm:p-10">
                        {mobileSections.map((section) => {
                            const isOpen =
                                mobileDropdown === section.key;

                            return (
                                <div
                                    key={section.key}
                                    className="border-b border-gray-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileDropdown(
                                                isOpen
                                                    ? null
                                                    : section.key
                                            )
                                        }
                                        className="flex w-full items-center justify-between py-4"
                                    >
                                        <p className="text-md font-baumans">
                                            {section.name}
                                        </p>

                                        {isOpen ? (
                                            <ChevronUp className="h-8 w-8 bg-gray-100 p-1 text-[#000099]" />
                                        ) : (
                                            <ChevronDown className="h-8 w-8 bg-gray-100 p-1" />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="max-h-[70vh] overflow-y-auto pb-4">
                                            {section.items.map((item) => {
                                                const Icon = item.icon;

                                                if (!Icon) {
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={
                                                                closeMobileMenu
                                                            }
                                                            className="block rounded-xl px-3 py-3 font-baumans text-sm text-[#54595F] transition-all duration-200 hover:bg-[#f5f7ff] hover:text-[#000099]"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    );
                                                }

                                                return (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={
                                                            closeMobileMenu
                                                        }
                                                        className="group/item block rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[#000099]/20 hover:bg-[#f5f7ff]"
                                                    >
                                                        <div
                                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
                                                        >
                                                            <Icon size={21} />
                                                        </div>

                                                        <h3 className="mt-3 font-baumans text-[14px] font-bold text-[#111111]">
                                                            {item.name}
                                                        </h3>

                                                        {item.description && (
                                                            <p className="pt-1 font-poppins text-[12px] leading-5 text-[#54595F]">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        )}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;