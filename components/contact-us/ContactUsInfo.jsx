import Link from "next/link";

import {
    FaLocationDot,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaInstagram,
    FaLinkedinIn,
    FaThreads,
    FaFacebookF
} from "react-icons/fa6";

function ContactUsInfo() {

    const contactInfo = [
        {
            title: "Address",
            icon: FaLocationDot,
            content: (
                <>
                    758/2 759/2A, No 86, 87, Kovai
                    <br />
                    Thirunagar, South, Coimbatore,
                    <br />
                    Tamil Nadu 641014
                </>
            )
        },
        {
            title: "Email Address",
            icon: FaEnvelope,
            content: "sales@virexa.in"
        },
        {
            title: "Need Urgent Help?",
            icon: FaPhone,
            content: "+91 8925826080"
        },
        {
            title: "Social Media",
            icon: FaGlobe,
            content: (
                <div className="flex gap-4">
                    <Link
                        href="/linkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:bg-[#0808a8] hover:text-white"
                    >
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link
                        href="/facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:bg-[#0808a8] hover:text-white"
                    >
                        <FaFacebookF size={16} />
                    </Link>

                    <Link
                        href="/instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:bg-[#0808a8] hover:text-white"
                    >
                        <FaInstagram size={16} />
                    </Link>

                    <Link
                        href="/threads"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-[#0808a8] transition-all duration-200 hover:scale-110 hover:bg-[#0808a8] hover:text-white"
                    >
                        <FaThreads size={16} />
                    </Link>
                </div>
            )
        }
    ];

    return (
        <section className="relative mt-30 h-screen overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div
                    className="sticky top-0 h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/HeroImage.jpg')"
                    }}
                />
            </div>

            <div className="absolute inset-0 z-0 bg-black/30" />

            <div className="relative z-10 h-full overflow-y-auto px-6 py-24 lg:px-26">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 pb-24">

                    {contactInfo.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="min-h-[320px] rounded-3xl bg-gray-100 p-8 shadow-xl"
                            >

                                <h2 className="font-baumans text-[22px] font-bold text-[#000000]">
                                    {item.title}
                                </h2>

                                <div className="pt-16">
                                    <Icon className="text-[40px] text-[#000099]" />
                                </div>

                                <div className="pt-8 font-baumans text-[15px] font-medium leading-6 text-[#3c3b3b]">
                                    {item.content}
                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default ContactUsInfo;