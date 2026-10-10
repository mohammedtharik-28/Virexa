"use client";

import Link from "next/link";

import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import {
    getCountries,
    getCountryCallingCode,
} from "react-phone-number-input";

import en from "react-phone-number-input/locale/en";
import flags from "react-phone-number-input/flags";

import { getExampleNumber } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";

function MobileAppDevelopmentHero() {
    const [country, setCountry] = useState("US");
    const [countryOpen, setCountryOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [menuDirection, setMenuDirection] = useState("down");
    const [menuHeight, setMenuHeight] = useState(240);

    const countryDropdownRef = useRef(null);
    const countryButtonRef = useRef(null);
    const countryListRef = useRef(null);
    const scrollPositionRef = useRef(0);

    const countries = getCountries().sort((a, b) =>
        en[a].localeCompare(en[b])
    );

    const SelectedFlag = flags[country];

    const exampleNumber = getExampleNumber(country, examples);

    const phonePlaceholder = exampleNumber
        ? exampleNumber.formatNational()
        : "Enter phone number";

    const updateMenuPosition = () => {
        if (!countryButtonRef.current) return;

        const rect = countryButtonRef.current.getBoundingClientRect();

        const gap = 8;
        const maxHeight = 240;

        const spaceAbove = rect.top - gap;
        const spaceBelow = window.innerHeight - rect.bottom - gap;

        if (spaceBelow >= maxHeight) {
            setMenuDirection("down");
            setMenuHeight(maxHeight);
        } else if (spaceAbove >= maxHeight) {
            setMenuDirection("up");
            setMenuHeight(maxHeight);
        } else if (spaceBelow >= spaceAbove) {
            setMenuDirection("down");
            setMenuHeight(Math.max(120, spaceBelow));
        } else {
            setMenuDirection("up");
            setMenuHeight(Math.max(120, spaceAbove));
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                countryDropdownRef.current &&
                !countryDropdownRef.current.contains(event.target)
            ) {
                if (countryListRef.current) {
                    scrollPositionRef.current =
                        countryListRef.current.scrollTop;
                }

                setCountryOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!countryOpen) return;

        updateMenuPosition();

        window.addEventListener("resize", updateMenuPosition);
        window.addEventListener("scroll", updateMenuPosition, true);

        return () => {
            window.removeEventListener("resize", updateMenuPosition);
            window.removeEventListener(
                "scroll",
                updateMenuPosition,
                true
            );
        };
    }, [countryOpen]);

    useEffect(() => {
        if (countryOpen && countryListRef.current) {
            requestAnimationFrame(() => {
                countryListRef.current.scrollTop =
                    scrollPositionRef.current;
            });
        }
    }, [countryOpen]);

    const handleCountryMenu = () => {
        if (countryOpen) {
            if (countryListRef.current) {
                scrollPositionRef.current =
                    countryListRef.current.scrollTop;
            }

            setCountryOpen(false);
        } else {
            updateMenuPosition();
            setCountryOpen(true);
        }
    };

    const handleCountrySelect = (countryCode) => {
        if (countryListRef.current) {
            scrollPositionRef.current =
                countryListRef.current.scrollTop;
        }

        setCountry(countryCode);
        setPhone("");
        setCountryOpen(false);
    };

    return (
        <section className="min-h-screen bg-[#f7f7ff] bg-gray-100 px-6 pb-10 mb-15 pt-25 md:pt-45 sm:px-10 lg:px-10 xl:px-26 2xl:px-50">
            <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-12 xl:gap-16">
                <div className="pt-8 lg:pt-10">
                    <p className="font-baumans text-[14px] text-center md:text-left font-bold text-[#000099] sm:text-[14px] lg:text-[16px]">
                        Mobile App Development
                    </p>

                    <h1 className="mt-8 max-w-[700px] font-bold text-center md:text-left font-baumans text-[25px] leading-[1.15] text-black md:text-[44px] lg:text-[50px] xl:text-[52px]">
                        India’s top-rated{" "}
                        <span className="text-[#000099]">
                            mobile app development
                        </span>{" "}
                        company
                    </h1>

                    <p className="mt-6 max-w-[700px] font-poppins text-center md:text-left text-[13px] font-medium leading-6 text-[#54595f] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                        From idea to launch, we design and develop secure,
                        user-centric mobile applications powered by modern
                        tech and AI-driven insights — built for startups and
                        growing businesses.
                    </p>

                    <div className="mt-8 space-y-4 items-center">
                        <div className="flex items-center gap-3">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                <Check size={12} strokeWidth={3} />
                            </span>

                            <p className="font-poppins font-medium text-[12px] text-[#54595f] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                                Mobile-First UI/UX Design — built for delight &
                                conversion
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                <Check size={12} strokeWidth={3} />
                            </span>

                            <p className="font-poppins font-medium text-[12px] text-[#54595f] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                                iOS & Android App Development — native &
                                cross-platform
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                <Check size={12} strokeWidth={3} />
                            </span>

                            <p className="font-poppins font-medium text-[12px] text-[#54595f] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                                Scalable App Architecture — built to grow with
                                your users
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                <Check size={12} strokeWidth={3} />
                            </span>

                            <p className="font-poppins font-medium text-[12px] text-[#54595f] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                                Performance & Speed Optimization — sub-2s launch
                                times
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                <Check size={12} strokeWidth={3} />
                            </span>

                            <p className="font-poppins font-medium text-[12px] text-[#54595f] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                                App Store Optimization (ASO) — rank higher, get
                                downloaded
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/services"
                        className="mt-8 flex w-fit mx-auto md:mx-0 items-center gap-3 rounded-full bg-[#000099] px-4 py-2 font-poppins text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#000077] hover:shadow-lg sm:text-[13px]"
                    >
                        View all Services

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#000099]">
                            <ArrowUpRight size={20} />
                        </span>
                    </Link>
                </div>

                <div className="overflow-visible rounded-[22px] bg-white shadow-[0_5px_25px_rgba(0,0,0,0.10)]">
                    <div className="rounded-t-[22px] bg-[#000099] text-center md:text-left px-5 py-7 sm:px-3">
                        <h2 className="font-baumans text-[21px] font-bold leading-tight text-[#ffffff] sm:text-[23px] md:text-[25px] lg:text-[27px]">
                            Get a Free Website Quote
                        </h2>

                        <p className="mt-1 font-poppins text-[13px] font-medium text-[#ececec] sm:text-[14px] md:text-[15px]">
                            Tell us your idea — we’ll respond within 24 hours
                        </p>
                    </div>

                    <form className="px-5 py-8 sm:px-6">
                        <div className="grid gap-7 sm:grid-cols-2">
                            <div>
                                <label className="font-poppins text-[13px] font-medium text-[#000000] sm:text-[14px] md:text-[15px]">
                                    Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="mt-5 w-full border-0 border-b-2 border-[#c9c9c9] bg-transparent px-0 pb-3 font-poppins text-xs outline-none transition-colors focus:border-[#000099] sm:text-[13px] md:text-sm"
                                />
                            </div>

                            <div>
                                <label className="font-poppins text-[13px] font-medium text-[#000000] sm:text-[14px] md:text-[15px]">
                                    Email{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="email"
                                    className="mt-5 w-full border-0 border-b-2 border-[#c9c9c9] bg-transparent px-0 pb-3 font-poppins text-xs outline-none transition-colors focus:border-[#000099] sm:text-[13px] md:text-sm"
                                />
                            </div>
                        </div>

                        <div
                            ref={countryDropdownRef}
                            className="relative mt-7"
                        >
                            <label className="font-poppins text-[13px] font-medium text-[#000000] sm:text-[14px] md:text-[15px]">
                                Phone{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <div className="mt-5 flex items-center border-b-2 border-[#c9c9c9] pb-3">
                                <button
                                    ref={countryButtonRef}
                                    type="button"
                                    onClick={handleCountryMenu}
                                    className="flex shrink-0 cursor-pointer items-center gap-1 pl-2 pr-3"
                                >
                                    <span className="flex h-4.5 w-5.5 items-center justify-center overflow-hidden">
                                        {SelectedFlag && (
                                            <SelectedFlag
                                                title={en[country]}
                                                className="h-full w-full"
                                            />
                                        )}
                                    </span>

                                    <span className="text-[#777777]">
                                        <ChevronDown size={15} />
                                    </span>
                                </button>

                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    placeholder={phonePlaceholder}
                                    className="ml-3 w-full border-0 bg-transparent font-poppins text-xs text-[#000000] outline-none placeholder:text-[#b4b4b4] sm:text-[13px] md:text-sm"
                                />
                            </div>

                            {countryOpen && (
                                <div
                                    className={`absolute left-0 z-50 w-full overflow-hidden rounded-lg border border-[#dddddd] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] ${
                                        menuDirection === "up"
                                            ? "bottom-[40px]"
                                            : "top-[78px]"
                                    }`}
                                >
                                    <div
                                        ref={countryListRef}
                                        style={{
                                            maxHeight: `${menuHeight}px`,
                                        }}
                                        className="overflow-y-auto"
                                    >
                                        {countries.map((countryCode) => {
                                            const Flag = flags[countryCode];
                                            const isSelected =
                                                country === countryCode;

                                            return (
                                                <button
                                                    key={countryCode}
                                                    type="button"
                                                    onClick={() =>
                                                        handleCountrySelect(
                                                            countryCode
                                                        )
                                                    }
                                                    className={`flex w-full cursor-pointer items-center gap-3 px-4 py-1 text-left transition-colors duration-200 ${
                                                        isSelected
                                                            ? "bg-gray-100"
                                                            : "bg-white hover:bg-gray-100"
                                                    }`}
                                                >
                                                    <span className="flex h-4.5 w-5.5 shrink-0 items-center justify-center overflow-hidden">
                                                        {Flag && (
                                                            <Flag
                                                                title={
                                                                    en[
                                                                        countryCode
                                                                    ]
                                                                }
                                                                className="h-full w-full"
                                                            />
                                                        )}
                                                    </span>

                                                    <span className="flex items-center gap-1 font-poppins text-[12px] text-[#222222] sm:text-[13px] md:text-[14px]">
                                                        <span>
                                                            {en[countryCode]}
                                                        </span>

                                                        <span className="text-[11px] text-[#777777] sm:text-xs md:text-[13px]">
                                                            (+
                                                            {getCountryCallingCode(
                                                                countryCode
                                                            )}
                                                            )
                                                        </span>
                                                    </span>

                                                    {isSelected && (
                                                        <span className="ml-auto flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#54595f] text-[12px] text-white">
                                                            ✓
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-7">
                            <label className="font-poppins text-[12px] font-medium text-[#000000] sm:text-[13px] md:text-[14px]">
                                How Can We Help You?{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <textarea
                                rows={2}
                                placeholder="A brief description about your project/request/consultation"
                                className="mt-5 w-full resize-y border-0 border-b-2 border-[#c9c9c9] bg-transparent px-3 pb-3 font-poppins text-xs outline-none transition-colors placeholder:text-[#b4b4b4] focus:border-[#000099] sm:text-[13px] md:text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-full bg-[#000099] py-3 font-poppins text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#000077] hover:shadow-lg sm:text-[14px] md:text-[15px]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MobileAppDevelopmentHero;