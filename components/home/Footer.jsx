import Link from "next/link";

import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaThreads
} from "react-icons/fa6";


function Footer() {
    const services = [
        {
            name: "Mobile App Development",
            href: "/services/mobile-app-development",
        },
        {
            name: "Software Development",
            href: "/services/software-development",
        },
        {
            name: "Website Development",
            href: "/services/website-development",
        },
        {
            name: "UI/UX Design",
            href: "/services/ui-ux-design",
        },
        {
            name: "E-Commerce Website Development Company in Coimbatore",
            href: "/services/ecommerce-website-development",
        },
    ];

    const industries = [
        {
            name: "Retail & E-Commerce",
            href: "/industries/retail-ecommerce",
        },
        {
            name: "Logistics & Distribution",
            href: "/industries/logistics-distribution",
        },
        {
            name: "Food & Restaurant",
            href: "/industries/food-restaurant",
        },
        {
            name: "Education & E-Learning",
            href: "/industries/education-e-learning",
        },
        {
            name: "Travel & Hospitality",
            href: "/industries/travel-hospitality",
        },
    ];

    const company = [
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Our Product",
            href: "/product",
        },
        {
            name: "Careers",
            href: "/careers",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Contact Us",
            href: "/contact",
        },
    ];

    return (
        <footer className="bg-gray-200 px-6 py-16 lg:px-50">

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:grid lg:grid-cols-4">

                <div className="max-w-[220px]">
                    <h2 className="mb-6 text-xl font-bold font-baumans">
                        Services
                    </h2>

                    <ul className="space-y-3">
                        {services.map((service) => (
                            <li key={service.name}>
                                <Link
                                    href={service.href}
                                    className="text-[14px] transition-colors duration-200 hover:text-[#000099] font-baumans text-[#54595F] font-normal"
                                >
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="max-w-[220px]">
                    <h2 className="mb-6 text-xl font-bold font-baumans">
                        Industries
                    </h2>

                    <ul className="space-y-3">
                        {industries.map((industry) => (
                            <li key={industry.name}>
                                <Link
                                    href={industry.href}
                                    className="text-[14px] transition-colors duration-200 hover:text-[#000099] text-[#54595F] font-normal font-baumans"
                                >
                                    {industry.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="max-w-[220px]">
                    <h2 className="mb-6 text-xl font-bold font-baumans">
                        Company
                    </h2>

                    <ul className="space-y-3">
                        {company.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-[14px] transition-colors duration-200 hover:text-[#000099] text-[#54595F] font-normal font-baumans"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="max-w-[280px]">
                    <h2 className="mb-8 text-xl font-bold font-baumans">
                        Need Help?
                    </h2>

                    <ul className="space-y-[14px]">

                        <li>
                            <p className="text-[10px] font-medium font-poppins text-[#54595F]">
                                CALL US DIRECTLY
                            </p>

                            <a
                                href="tel:+918925826080"
                                className="text-base font-semibold font-baumans transition-colors duration-200 hover:text-[#000099]"
                            >
                                +91 892-582-6080
                            </a>
                        </li>


                        <li>
                            <p className="text-[10px] font-normal font-poppins text-[#54595F]">
                                MAIL
                            </p>

                            <a
                                href="mailto:sales@virexa.in"
                                className="text-base font-semibold font-baumans transition-colors duration-200 hover:text-[#000099]"
                            >
                                sales@virexa.in
                            </a>
                        </li>


                        <li>
                            <p className="text-[10px] font-medium font-poppins text-[#54595F]">
                                LOCATION
                            </p>

                            <p className="text-base font-semibold font-baumans leading-relaxed wrap-break-word">
                                758/2,759/2A, No 86, 87,
                                Kovai Thirunagar, South,
                                Coimbatore, Tamil Nadu 641014
                            </p>
                        </li>

                    </ul>
                </div>

            </div>

            <div className="flex items-center justify-between pt-20 ">
                <Link href="/">
                    <img src="/Final-virexa.svg" alt="Virexa" className="w-24" />
                </Link>
                <div className="flex gap-8">
                    <Link href="/terms&conditions" className="font-medium font-poppins transition-colors text-[#54595F] duration-200 hover:text-[#000099]"><p>Terms & Conditions</p></Link>
                    <Link href="/privacy-policy" className="font-medium font-poppins transition-colors duration-200 text-[#54595F] hover:text-[#000099]"><p>Privacy Policy</p></Link>
                </div>
            </div>

            <hr className="mt-8 text-gray-400" />

            <div className="flex justify-between pt-10 text-sm font-semibold text-[#54595F]">
                <div className="font-poppins font-medium">
                    <p>© 2026 Virexa Technologies Pvt. Ltd. All rights reserved.</p>
                </div>
                <div className="flex gap-5">
                    <Link href="/linkedIn" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-200 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#0808a8] hover:text-white">
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-200 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#0808a8] hover:text-white">
                        <FaFacebookF size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-200 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#0808a8] hover:text-white">
                        <FaInstagram size={16} />
                    </Link>

                    <Link href="/linkedIn" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-200 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:border-gray-200 hover:bg-[#0808a8] hover:text-white">
                        <FaThreads size={16} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;