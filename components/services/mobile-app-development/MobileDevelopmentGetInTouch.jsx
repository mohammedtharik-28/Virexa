"use client";



import { Phone, ArrowUpRight, ChevronDown } from "lucide-react";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import {

    getCountries,

    getCountryCallingCode,

} from "react-phone-number-input";

import en from "react-phone-number-input/locale/en";

import flags from "react-phone-number-input/flags";

import { getExampleNumber } from "libphonenumber-js";

import examples from "libphonenumber-js/mobile/examples";



function MobileDevelopmentGetInTouch() {

    const [country, setCountry] = useState("IN");

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

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

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

                if (countryListRef.current) {

                    countryListRef.current.scrollTop =

                        scrollPositionRef.current;

                }

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

        <section className="w-full overflow-hidden pb-20">

            <div className="mt-30 w-full px-6 sm:px-10 lg:px-4 xl:px-60 2xl:px-70">

                <div className="mx-auto text-center">

                    <h1 className="mx-auto mt-4 w-full max-w-[700px] font-baumans text-[36px] font-bold leading-tight text-[#000000] sm:text-[40px]">

                        Get in{" "}

                        <span className="text-[#000099]">

                            Touch

                        </span>{" "}

                        with Us

                    </h1>

                </div>



                <div className="mx-auto mt-16 w-full rounded-2xl border-none px-5 py-6 shadow-xl sm:mt-20 sm:px-8">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <h1 className="font-baumans text-[20px] font-semibold text-[#000000]">

                            Send a Message

                        </h1>



                        <div>

                            <h1 className="font-baumans text-[15px] font-semibold text-[#000000]">

                                or Call for Consultation

                            </h1>



                            <Link

                                href="/phone"

                                className="mt-3 flex items-center gap-2"

                            >

                                <Phone

                                    size={25}

                                    className="text-[#000099]"

                                />



                                <span className="font-baumans text-[15px] font-semibold text-[#000000]">

                                    +91 892-582-6080

                                </span>

                            </Link>

                        </div>

                    </div>



                    <form

                        onSubmit={(event) => event.preventDefault()}

                        className="mt-10 flex w-full flex-col gap-10 sm:mt-12 lg:flex-row lg:justify-between"

                    >

                        <div className="w-full lg:max-w-[260px]">

                            <div className="mb-8">

                                <div className="flex">

                                    <h1 className="font-poppins text-[15px] font-medium text-[#000000]">

                                        Name

                                    </h1>



                                    <p className="text-red-500">*</p>

                                </div>



                                <input

                                    type="text"

                                    required

                                    className="mt-2 w-full border-b-2 border-[#c9c9c9] bg-transparent py-1 outline-none focus:border-[#000099]"

                                />

                            </div>



                            <div className="mb-8">

                                <div className="flex">

                                    <h1 className="font-poppins text-[15px] font-medium text-[#000000]">

                                        Email

                                    </h1>



                                    <p className="text-red-500">*</p>

                                </div>



                                <input

                                    type="email"

                                    required

                                    className="mt-2 w-full border-b-2 border-[#c9c9c9] bg-transparent py-1 outline-none focus:border-[#000099]"

                                />

                            </div>



                            <div

                                ref={countryDropdownRef}

                                className="relative mb-8"

                            >

                                <div className="flex">

                                    <h1 className="font-poppins text-[15px] font-medium text-[#000000]">

                                        Phone

                                    </h1>



                                    <p className="text-red-500">*</p>

                                </div>



                                <div className="mt-2 flex items-center border-b-2 border-[#c9c9c9] pb-1 focus-within:border-[#000099]">

                                    <button

                                        ref={countryButtonRef}

                                        type="button"

                                        onClick={handleCountryMenu}

                                        aria-label="Select country"

                                        aria-expanded={countryOpen}

                                        className="flex shrink-0 cursor-pointer items-center gap-1 pl-1 pr-2"

                                    >

                                        <span className="flex h-4.5 w-5.5 items-center justify-center overflow-hidden">

                                            {SelectedFlag && (

                                                <SelectedFlag

                                                    title={en[country]}

                                                    className="h-full w-full"

                                                />

                                            )}

                                        </span>



                                        <ChevronDown

                                            size={15}

                                            className="text-[#777777]"

                                        />

                                    </button>



                                    <input

                                        type="tel"

                                        required

                                        value={phone}

                                        onChange={(event) =>

                                            setPhone(event.target.value)

                                        }

                                        placeholder={phonePlaceholder}

                                        className="ml-2 min-w-0 w-full border-0 bg-transparent py-1 font-poppins text-sm text-[#000000] outline-none placeholder:text-[#b4b4b4]"

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



                                                        <span className="flex min-w-0 items-center gap-1 font-poppins text-[14px] text-[#222222]">

                                                            <span className="truncate">

                                                                {

                                                                    en[

                                                                        countryCode

                                                                    ]

                                                                }

                                                            </span>



                                                            <span className="shrink-0 text-[13px] text-[#777777]">

                                                                (+

                                                                {getCountryCallingCode(

                                                                    countryCode

                                                                )}

                                                                )

                                                            </span>

                                                        </span>



                                                        {isSelected && (

                                                            <span className="ml-auto flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#54595f] text-[12px] text-white">

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



                            <button

                                type="submit"

                                className="w-full min-w-[200px] rounded-full bg-[#000099] px-8 py-3 font-poppins text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#b2ff66] hover:text-[#000099] sm:w-auto"

                            >

                                Submit

                            </button>

                        </div>



                        <div className="w-full lg:max-w-[480px]">

                            <div className="mb-8">

                                <div className="flex">

                                    <h1 className="font-poppins text-[15px] font-medium text-[#000000]">

                                        Message

                                    </h1>



                                    <p className="text-red-500">*</p>

                                </div>



                                <textarea

                                    required

                                    className="mt-2 min-h-[130px] w-full resize-y border-b-2 border-[#c9c9c9] bg-transparent py-1 outline-none focus:border-[#000099]"

                                    placeholder="Let's create something amazing together-send us your project details, and we'll get back to you within 24 hours."

                                />

                            </div>

                        </div>

                    </form>

                </div>

            </div>



            <div className="mt-20 w-full px-6 sm:mt-25 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

                <div className="w-full rounded-3xl bg-[#000099] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-20 xl:px-50 2xl:px-60">

                    <h1 className="mx-auto mt-3 max-w-[900px] font-baumans text-[30px] font-bold leading-tight text-[#ececec] sm:text-[36px] lg:text-[40px]">

                        Have an app idea? let's build it together.

                    </h1>



                    <p className="mx-auto max-w-[750px] pt-4 font-poppins text-[14px] font-medium leading-6 text-[#ececec] sm:text-[15px]">

                        Get a free consultation and project estimate within

                        24 hours. We'll scope your app, recommend the right

                        tech, and show you exactly how we'd build it.

                    </p>



                    <Link

                        href="/contact"

                        className="group mx-auto mt-10 flex w-full max-w-[248px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 font-poppins text-[13px] font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099]"

                    >

                        <span className="ps-2">

                            Get Free App Consultation

                        </span>



                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-gray-200 transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">

                            <ArrowUpRight size={21} />

                        </span>

                    </Link>

                </div>

            </div>

        </section>

    );

}



export default MobileDevelopmentGetInTouch;
