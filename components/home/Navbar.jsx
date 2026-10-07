"use client";

import Link from "next/link";

import {
    ChevronDown,
    ChevronUp,
    ArrowUpRight,
    Menu,
    X
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
    FaBolt
} from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const hoverCard =
        "group/item rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[#000099]/20 hover:bg-[#f5f7ff]";

    return (
        <header className="fixed top-0 left-0 z-50 w-full">

            {/* TOP BAR */}

            <div className="hidden lg:flex lg:items-center lg:justify-between bg-[#000099] px-5 py-2 text-white lg:px-5 xl:px-50">

                <div className="flex items-center gap-8">

                    <Link
                        href="/phone"
                        className="flex items-center gap-2"
                    >
                        <FaPhone size={15} />

                        <span className="font-semibold font-baumans text-[15px]">
                            +91 892-582-6080
                        </span>
                    </Link>

                    <Link
                        href="/mail"
                        className="flex items-center gap-2"
                    >
                        <FaEnvelope size={15} />

                        <span className="font-semibold font-baumans text-[15px]">
                            sales@virexa.in
                        </span>
                    </Link>

                </div>

                <div className="flex items-center gap-4">

                    <Link
                        href="/linkedIn"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white"
                    >
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white"
                    >
                        <FaFacebookF size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white"
                    >
                        <FaInstagram size={16} />
                    </Link>

                    <Link
                        href="/linkedIn"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white"
                    >
                        <FaThreads size={16} />
                    </Link>

                </div>

            </div>


            {/* DESKTOP NAVBAR */}

            <nav className="hidden mx-5 my-3 lg:flex items-center justify-between rounded-full bg-white py-2 shadow-xl lg:mx-5 xl:mx-50">

                {/* LOGO */}

                <Link
                    href="/"
                    className="ms-8 text-2xl font-bold text-[#000099]"
                >
                    <img
                        src="/Final-virexa.svg"
                        alt="Virexa"
                        className="w-22"
                    />
                </Link>


                <div className="flex items-center gap-5">


                    {/* SERVICES */}

                    <div className="relative group">

                        <Link
                            href="/services"
                            className="flex items-center gap-2 text-[15px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099]"
                        >
                            Services

                            <span className="relative flex items-center">

                                <ChevronDown
                                    size={16}
                                    className="block text-black group-hover:hidden"
                                />

                                <ChevronUp
                                    size={16}
                                    className="hidden text-[#000099] group-hover:block"
                                />

                            </span>

                        </Link>


                        <div className="absolute left-1/2 top-full z-50 hidden w-[1200px] -translate-x-1/3 pt-7 group-hover:block">

                            <div className="rounded-b-2xl bg-white px-5 py-3 shadow-xl">

                                <div className="grid grid-cols-3 gap-x-2 gap-y-3">


                                    {/* WEBSITE */}

                                    <Link
                                        href="/services/web-development"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef0ff] text-[#000099]">
                                                <FaGlobe size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Website Design & Development
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Custom, mobile-responsive websites built to
                                                    convert — delivered in as fast as 7 days.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* SOFTWARE */}

                                    <Link
                                        href="/services/software-development"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6ff] text-[#008cff]">
                                                <FaCode size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Custom Software Development
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Custom software tailored to your needs —
                                                    scalable, secure, and performance-driven.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* TESTING */}

                                    <Link
                                        href="/services/software-testing"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f0] text-red-500">
                                                <FaMagnifyingGlass size={20} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Software Testing
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Intelligent software testing built for speed,
                                                    quality, and scale.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* MOBILE */}

                                    <Link
                                        href="/services/mobile-app-development"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5eb] text-orange-500">
                                                <FaMobileScreenButton size={20} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Mobile App Development
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Secure, user-centric mobile apps built with
                                                    modern tech and AI.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* ECOMMERCE */}

                                    <Link
                                        href="/services/ecommerce-development"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4edff] text-purple-600">
                                                <FaCartShopping size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    E-Commerce Store Development
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    High-performance eCommerce stores built to
                                                    boost sales and order value.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* UI UX */}

                                    <Link
                                        href="/services/ui-ux-design"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff4d6] text-orange-400">
                                                <FaPalette size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    UI/UX Design
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    AI-driven digital experiences built for speed,
                                                    scale, and conversions.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* IT */}

                                    <Link
                                        href="/services/it-services"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edfff0] text-green-600">
                                                <FaServer size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    IoT Services
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Smart IoT solutions for connected devices
                                                    and real-time automation.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* VIDEO */}

                                    <Link
                                        href="/services/video-editing"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8edf5] text-[#a0005c]">
                                                <FaVideo size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Video Editing
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Professional video editing that makes your
                                                    content engaging, polished, and impactful.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* GRAPHIC */}

                                    <Link
                                        href="/services/graphic-design"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fcecff] text-fuchsia-500">
                                                <FaPenNib size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Graphic Design
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Creative graphic designs that enhance your
                                                    brand identity and visual presence.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>

                                    <Link
                                        href="/services/graphic-design"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-3">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fcecff] text-fuchsia-500">
                                                <FaBullhorn size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Digital Marketing
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Result-driven digital marketing strategies to
                                                    grow your brand and increase conversions
                                                </p>

                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* PRODUCTS */}

                    <div className="relative group">

                        <Link
                            href="/products"
                            className="flex items-center gap-2 text-[15px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099]"
                        >
                            Products

                            <span className="relative flex items-center">

                                <ChevronDown
                                    size={16}
                                    className="block text-black group-hover:hidden"
                                />

                                <ChevronUp
                                    size={16}
                                    className="hidden text-[#000099] group-hover:block"
                                />

                            </span>

                        </Link>

                        <div className="absolute left-0 top-full z-50 hidden w-56 pt-3 group-hover:block">

                            <div className="rounded-xl bg-white p-3 shadow-xl">

                                <Link
                                    href="/products/v-one-softwares"
                                    className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                >
                                    V-One Softwares
                                </Link>

                            </div>

                        </div>

                    </div>


                    {/* INDUSTRIES */}

                    <div className="relative group">

                        <Link
                            href="/industries"
                            className="flex items-center gap-2 text-[15px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099]"
                        >
                            Industries

                            <span className="relative flex items-center">

                                <ChevronDown
                                    size={16}
                                    className="block text-black group-hover:hidden"
                                />

                                <ChevronUp
                                    size={16}
                                    className="hidden text-[#000099] group-hover:block"
                                />

                            </span>

                        </Link>


                        <div className="absolute left-1/2 top-full z-50 hidden w-[1200px] -translate-x-[50%] pt-7 group-hover:block">

                            <div className="rounded-b-2xl bg-white px-5 py-3 shadow-xl">

                                <div className="grid grid-cols-3 gap-x-2 gap-y-3">


                                    {/* RETAIL */}

                                    <Link
                                        href="/industries/retail-ecommerce"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1e5ff] text-purple-600">
                                                <FaStore size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Retail & E-Commerce
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Technology solutions powering modern retail
                                                    and e-commerce platforms.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* LOGISTICS */}

                                    <Link
                                        href="/industries/logistics"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dcfae8] text-green-600">
                                                <FaTruck size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Logistics & Distribution
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Scalable technology solutions for smarter
                                                    logistics and distribution.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* FOOD */}

                                    <Link
                                        href="/industries/food-restaurant"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffecd4] text-orange-500">
                                                <FaUtensils size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Food & Restaurant
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    End-to-end tech solutions for restaurants
                                                    and food businesses.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* HEALTHCARE */}

                                    <Link
                                        href="/industries/healthcare"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffe6f1] text-pink-500">
                                                <FaHeartPulse size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Health Care
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Technology solutions for secure, efficient
                                                    healthcare systems.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* EDUCATION */}

                                    <Link
                                        href="/industries/education"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e4eaff] text-blue-600">
                                                <FaGraduationCap size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Education & E-Learning
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Digital solutions for modern education and
                                                    e-learning platforms.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* AUTOMOTIVE */}

                                    <Link
                                        href="/industries/automotive"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d8f9fc] text-cyan-600">
                                                <FaCar size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Automotive
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Smart technology solutions for modern
                                                    automotive businesses.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* TRAVEL */}

                                    <Link
                                        href="/industries/travel-hospitality"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dceaff] text-blue-500">
                                                <FaPlane size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    Travel and Hospitality
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Smart technology solutions for travel and
                                                    hospitality businesses.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>


                                    {/* ON DEMAND */}

                                    <Link
                                        href="/industries/on-demand"
                                        className={hoverCard}
                                    >
                                        <div className="flex gap-4">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8c9] text-yellow-500">
                                                <FaBolt size={21} />
                                            </div>

                                            <div>

                                                <h3 className="font-baumans text-[15px] font-bold text-[#111111]">
                                                    On-Demand Solutions
                                                </h3>

                                                <p className="pt-1 font-poppins text-[13px] leading-5 text-[#54595F]">
                                                    Real-time, scalable technology for on-demand
                                                    businesses.
                                                </p>

                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* WHO WE ARE */}

                    <div className="relative group">

                        <Link
                            href="/about-us"
                            className="flex items-center gap-2 text-[15px] font-baumans font-semibold text-black transition-colors duration-200 group-hover:text-[#000099]"
                        >
                            Who We are

                            <span className="relative flex items-center">

                                <ChevronDown
                                    size={16}
                                    className="block text-black group-hover:hidden"
                                />

                                <ChevronUp
                                    size={16}
                                    className="hidden text-[#000099] group-hover:block"
                                />

                            </span>

                        </Link>

                        <div className="absolute left-0 top-full z-50 hidden w-56 pt-3 group-hover:block">

                            <div className="rounded-xl bg-white p-3 shadow-xl">

                                <Link
                                    href="/about-us"
                                    className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/blog"
                                    className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                >
                                    Blog
                                </Link>

                                <Link
                                    href="/careers"
                                    className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                >
                                    Careers
                                </Link>

                                <Link
                                    href="/contact-us"
                                    className="block rounded-lg px-4 py-3 text-sm font-baumans text-black hover:bg-[#f5f7ff] hover:text-[#000099]"
                                >
                                    Contact Us
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>


                {/* LET'S TALK */}

                <Link
                    href="/contact"
                    className="me-10 flex items-center gap-3 rounded-full bg-gray-200 px-3 py-2 transition-all duration-200 hover:scale-110 hover:bg-[#b2ff66] hover:shadow-2xl"
                >

                    <span className="ps-2 text-[13px] font-semibold font-poppins text-[#000099]">
                        Let's Talk
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-white">
                        <ArrowUpRight size={21} />
                    </span>

                </Link>

            </nav>


            {/* MOBILE NAVBAR */}

            <div className="flex items-center justify-between bg-white px-5 pt-8 pb-3 lg:hidden">

                <Link
                    href="/"
                    className="text-2xl font-bold text-[#000099]"
                >
                    <img
                        src="/Final-virexa.svg"
                        alt="Virexa"
                        className="w-22"
                    />
                </Link>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="fixed right-5 top-8 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white"
                >
                    {menuOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>


            {menuOpen && (

                <div className="w-full bg-white lg:hidden">

                    <div className="p-10">

                        <Link
                            href="/services"
                            className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                            <p className="text-md font-baumans">
                                Services
                            </p>

                            <ChevronDown className="h-8 w-8 bg-gray-100 p-1" />
                        </Link>


                        <Link
                            href="/products"
                            className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                            <p className="text-md font-baumans">
                                Products
                            </p>

                            <ChevronDown className="h-8 w-8 bg-gray-100 p-1" />
                        </Link>


                        <Link
                            href="/industries"
                            className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                            <p className="text-md font-baumans">
                                Industries
                            </p>

                            <ChevronDown className="h-8 w-8 bg-gray-100 p-1" />
                        </Link>


                        <Link
                            href="/about-us"
                            className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                            <p className="text-md font-baumans">
                                Who We are
                            </p>

                            <ChevronDown className="h-8 w-8 bg-gray-100 p-1" />
                        </Link>


                        <Link
                            href="/contact"
                            className="mt-6 flex items-center justify-between rounded-full bg-gray-200 px-4 py-3"
                        >

                            <span className="font-semibold font-poppins text-[#000099]">
                                Let's Talk
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000099] text-white">
                                <ArrowUpRight size={20} />
                            </span>

                        </Link>

                    </div>

                </div>

            )}

        </header>
    );
}

export default Navbar;