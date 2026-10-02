"use client";

import Link from "next/link";
import {
    Phone,
    Mail,
    ChevronDown,
    ArrowUpRight,
    Menu,
    X
} from "lucide-react";

import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaThreads
} from "react-icons/fa6";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full">

            <div className="lg:items-center hidden lg:flex lg:justify-between bg-[#000099] px-5 py-2 text-white lg:px-5 xl:px-50">

                <div className="flex items-center gap-8">

                    <Link href="/phone" className="flex items-center gap-2">
                        <Phone size={16} />
                        <span className="font-semibold font-baumans text-[15px]">
                            +91 892-582-6080
                        </span>
                    </Link>

                    <Link href="/mail" className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="font-semibold font-baumans text-[15px]">
                            sales@virexa.in
                        </span>
                    </Link>

                </div>

                <div className="flex items-center gap-4">

                    <Link href="/linkedIn" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white">
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white">
                        <FaFacebookF size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white">
                        <FaInstagram size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-gray-200 text-[#000099] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#000099] hover:text-white">
                        <FaThreads size={16} />
                    </Link>

                </div>

            </div>

            <nav className="hidden mx-5 my-3 lg:flex items-center justify-between rounded-full bg-white py-2 shadow-xl lg:mx-5 xl:mx-50">

                <Link
                    href="/"
                    className="ms-8 text-2xl font-bold text-[#000099]"
                >
                    <img src="/Final-virexa.svg" alt="Virexa" className="w-22"/>
                </Link>

                <div className="flex items-center gap-5">

                    <Link
                        href="/services"
                        className="flex items-center text-[15px] text-[#000000] font-baumans gap-2 font-semibold hover:text-[#000099]"
                    >
                        Service
                        <ChevronDown size={16} />
                    </Link>

                    <Link
                        href="/products"
                        className="flex items-center text-[15px] text-[#000000]  font-baumans gap-2 font-semibold hover:text-[#000099]"
                    >
                        Products
                        <ChevronDown size={16} />
                    </Link>

                    <Link
                        href="/industries"
                        className="flex items-center text-[15px] text-[#000000] font-baumans gap-2 font-semibold hover:text-[#000099]"
                    >
                        Industries
                        <ChevronDown size={16} />
                    </Link>

                    <Link
                        href="/about"
                        className="flex items-center text-[15px] text-[#000000] font-baumans gap-2 font-semibold hover:text-[#000099]"
                    >
                        Who We are
                        <ChevronDown size={16} />
                    </Link>

                </div>

                <Link
                    href="/contact"
                    className="me-10 flex items-center gap-3 rounded-full bg-gray-200 px-3 py-2 transition-all duration-200 hover:scale-110 hover:bg-[#b2ff66] hover:shadow-2xl"
                >
                    <span className="text-sm ps-2 font-semibold text-[13px] font-poppins text-[#000099]">
                        Let's Talk
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-white">
                        <ArrowUpRight size={21} />
                    </span>
                </Link>
            </nav>

            <div className="flex items-center justify-between bg-white px-5 pt-8 pb-3 lg:hidden">
                <Link href="/" className="text-3xl font-bold tracking-tight text-[#000099]">
                    <img src="/Final-virexa.svg" alt="Virexa" className="w-32"/>
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center justify-center text-black transition-all duration-100">
                    {
                        menuOpen ?
                            (<X size={30} className="cursor-pointer"/>)
                            :
                            (<Menu size={30} className="cursor-pointer"/>)
                    }
                </button>
            </div>

            {
                menuOpen && (
                    <div className="w-full bg-white h-60 lg:hidden">
                        <div className="p-10">
                            <Link href="/services" className="flex justify-between ">
                                <p className="text-md">Services</p>
                                <ChevronDown className="bg-gray-100 w-8 h-8 p-1"/>
                            </Link>
                             <Link href="/products" className="flex justify-between pt-5">
                                <p className="text-md">Productss</p>
                                <ChevronDown className="bg-gray-100 w-8 h-8 p-1"/>
                            </Link>
                             <Link href="/industries" className="flex justify-between pt-5">
                                <p className="text-md">Industries</p>
                                <ChevronDown className="bg-gray-100 w-8 h-8 p-1"/>
                            </Link>
                             <Link href="/about" className="flex justify-between pt-5">
                                <p className="text-md">Who We are</p>
                                <ChevronDown className="bg-gray-100 w-8 h-8 p-1"/>
                            </Link>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Navbar;