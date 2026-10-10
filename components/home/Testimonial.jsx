"use client";

import { Quote } from "lucide-react";

function Testimonial() {

    const clientsWords = [
        {
            name: "Vishnu",
            words: "Virexa transformed our platform with strategic UX/UI improvements and a refined visual identity. Their creative direction and precise execution enhanced usability, strengthened engagement, and delivered a seamless digital experience for our audience worldwide successfully.",
            relation: "Client",
            img: "/Testimonial/Vishnu.png"
        },
        {
            name: "Poornima",
            words: "Virexa transformed our platform with strategic UX/UI improvements and a refined visual identity. Their creative direction and precise execution enhanced usability, strengthened engagement, and delivered a seamless digital experience for our audience worldwide successfully.",
            relation: "Client",
            img: "/Testimonial/Poornima.png"
        },
        {
            name: "Gunna",
            words: "The Virexa team brought fresh ideas and technical excellence to our project. Their attention to detail and commitment to quality resulted in a seamless platform that improved navigation, increased user retention, and strengthened our online presence.",
            relation: "Client",
            img: "/Testimonial/Gunna.png"
        },
        {
            name: "Sharmila",
            words: "Partnering with Virexa elevated our product experience through intuitive design and seamless navigation. Their collaborative approach and attention to detail resulted in higher user satisfaction and improved engagement metrics across platforms.",
            relation: "Client",
            img: "/Testimonial/Sharmila.png"
        },
        {
            name: "Javid",
            words: "Virexa completely redesigned our platform with a thoughtful UX/UI strategy. Their structured process and creative execution improved usability significantly. We noticed stronger customer interaction and measurable growth in conversions after launch.",
            relation: "CEO & FOUNDER",
            img: "/Testimonial/Javid.png"
        },
        {
            name: "Sandhiya",
            words: "Working with Virexa was a great experience. Their team understood our requirements clearly and delivered a modern, user-friendly platform. We saw improved engagement, smoother navigation, and a noticeable increase in customer inquiries after launch.",
            relation: "Client",
            img: "/Testimonial/Sandhiya.png"
        }
    ];

    const infiniteTestimonials = [
        ...clientsWords,
        ...clientsWords
    ];

    return (
        <section className="overflow-hidden pt-24 sm:pt-28 lg:pt-35">

            <div className="px-6 text-center sm:px-10">

                <p className="text-[17px] font-figtree font-semibold text-[#000099] lg:text-base">
                    Testimonials
                </p>

                <h1 className="mx-auto mt-4 w-full max-w-[350px] text-[40px] font-figtree font-bold leading-tight text-[#000000] sm:max-w-[600px] sm:text-[44px] lg:max-w-[780px] lg:text-[48px]">
                    What Our,{" "}
                    <span className="text-[#000099]">
                        Clients
                    </span>{" "}
                    Say
                </h1>

            </div>

            <div className="mx-0 overflow-x-auto pt-10 touch-pan-x scrollbar-hide sm:mx-6 lg:mx-20 xl:mx-26">

                <div className="testimonial-track">

                    {infiniteTestimonials.map((item, id) => (

                        <div
                            key={id}
                            className="w-[calc(100vw-48px)] min-w-[calc(100vw-48px)] shrink-0 rounded-2xl p-6 shadow-xs sm:w-[340px] sm:min-w-[340px] sm:p-8 lg:p-10"
                        >

                            <div className="flex flex-row gap-4 sm:gap-5">

                                <Quote
                                    size={38}
                                    className="shrink-0 rotate-180 text-[#000099] sm:size-[42px]"
                                />

                                <p className="text-[14px] font-inter font-medium leading-6 text-[#243858] sm:text-[15px]">
                                    {item.words}
                                </p>

                            </div>

                            <div className="flex items-center justify-center gap-4 pt-8 sm:gap-5 sm:pt-10">

                                <img
                                    className="h-14 w-14 rounded-full object-cover sm:h-15 sm:w-15"
                                    src={item.img}
                                    alt={item.name}
                                />

                                <div>

                                    <h1 className="text-[15px] font-figtree font-bold text-[#000000]">
                                        {item.name}
                                    </h1>

                                    <p className="text-[13px] font-bold font-figtree text-[#8c8c8c]">
                                        {item.relation}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonial;