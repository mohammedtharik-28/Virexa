"use client";

import { useEffect, useRef, useState } from "react";
import {
    getCountries,
    getCountryCallingCode,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import flags from "react-phone-number-input/flags";
import { getExampleNumber } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";

function ContactUsLetUsTeamUp() {
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
        <section className="mt-20 mb-30 px-6 lg:px-10 xl:px-26">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h1 className="font-baumans text-[40px] font-bold text-[#000000]">
                        Got Ideas? Let’s team up.
                    </h1>

                    <p className="pt-5 font-poppins text-[15px] font-medium text-[#54595f]">
                        Tell us about your project — we’ll get back within 24
                        hours
                    </p>

                    <form className="pt-16">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div>
                                <label className="font-poppins text-[15px] text-[#000000]">
                                    Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="mt-6 w-full border-0 border-b-2 border-[#c9c9c9] bg-transparent pb-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-poppins text-[15px] text-[#000000]">
                                    Email{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="email"
                                    className="mt-6 w-full border-0 border-b-2 border-[#c9c9c9] bg-transparent pb-3 outline-none"
                                />
                            </div>
                        </div>

                        <div
                            ref={countryDropdownRef}
                            className="relative pt-8"
                        >
                            <label className="font-poppins text-[15px] text-[#000000]">
                                Phone{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <div className="mt-6 flex items-center border-b-2 border-[#c9c9c9] bg-transparent pb-3">
                                <button
                                    ref={countryButtonRef}
                                    type="button"
                                    onClick={handleCountryMenu}
                                    className="flex shrink-0 cursor-pointer items-center gap-1 pl-1 pr-3"
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>

                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    placeholder={phonePlaceholder}
                                    className="ml-2 w-full border-0 bg-transparent font-poppins text-sm text-[#000000] outline-none placeholder:text-[#aaaaaa]"
                                />
                            </div>

                            {countryOpen && (
                                <div
                                    className={`absolute left-0 z-50 w-full overflow-hidden rounded-lg border border-[#dddddd] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] ${
                                        menuDirection === "up"
                                            ? "bottom-[40px]"
                                            : "top-[76px]"
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

                                                    <span className="flex items-center gap-1 font-poppins text-[14px] text-[#222222]">
                                                        <span>
                                                            {
                                                                en[
                                                                    countryCode
                                                                ]
                                                            }
                                                        </span>

                                                        <span className="text-[13px] text-[#777777]">
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

                        <div className="pt-8">
                            <label className="font-poppins text-[15px] text-[#000000]">
                                How Can We Help You?{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <textarea
                                rows="4"
                                placeholder="A brief description about your project/request/consultation"
                                className="mt-6 w-full resize-y border-0 border-b-2 border-[#c9c9c9] bg-transparent pb-3 outline-none placeholder:text-[#aaaaaa]"
                            />
                        </div>

                        <button className="mt-6 w-full rounded-full bg-[#000099] p-2 text-[17px] font-medium text-[#ececec] hover:bg-[#b2ff66] hover:text-[#000099]">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="mt-20 h-[450px] w-full overflow-hidden rounded-3xl lg:h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3915.674120712929!2d77.0471959!3d11.0630409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9b2d73c1a11%3A0xc33851b7c9c05ac0!2sKP%20TOWERS!5e0!3m2!1sen!2sin!4v1791278304803!5m2!1sen!2sin"
                        className="h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactUsLetUsTeamUp;