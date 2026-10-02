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
            img: "Testimonial/Poornima.png"
        },
        {
            name: "Gunna",
            words: "The Virexa team brought fresh ideas and technical excellence to our project. Their attention to detail and commitment to quality resulted in a seamless platform that improved navigation, increased user retention, and strengthened our online presence.",
            relation: "Client",
            img: "Testimonial/Gunna.png"
        },
        {
            name: "Sharmila",
            words: "Partnering with Virexa elevated our product experience through intuitive design and seamless navigation. Their collaborative approach and attention to detail resulted in higher user satisfaction and improved engagement metrics across platforms.",
            relation: "Client",
            img: "Testimonial/Sharmila.png"
        },
        {
            name: "Javid",
            words: "Virexa completely redesigned our platform with a thoughtful UX/UI strategy. Their structured process and creative execution improved usability significantly. We noticed stronger customer interaction and measurable growth in conversions after launch.",
            relation: "CEO & FOUNDER",
            img: "Testimonial/Javid.png"
        },
        {
            name: "Sandhiya",
            words: "Working with Virexa was a great experience. Their team understood our requirements clearly and delivered a modern, user-friendly platform. We saw improved engagement, smoother navigation, and a noticeable increase in customer inquiries after launch.",
            relation: "Client",
            img: "Testimonial/Sandhiya.png"
        }
    ];

    const infiniteTestimonials = [
        ...clientsWords,
        ...clientsWords
    ];

    return (
        <section className="overflow-hidden pt-35">

            <div className="text-center">

                <p className="text-[17px] font-figtree font-semibold text-[#000099] lg:text-base">
                    Testimonials
                </p>

                <h1 className="mx-auto m-4 w-full max-w-[350px] text-[48px] font-figtree text-[#000000] font-bold leading-tight sm:max-w-[700px] md:max-w-[450px] lg:max-w-[780px]">
                    What Our,{" "}
                    <span className="text-[#000099]">
                        Clients
                    </span>{" "}
                    Say
                </h1>

            </div>

            <div className="overflow-hidden pt-10 mx-50">

                <div className="testimonial-track">

                    {infiniteTestimonials.map((item, id) => (

                        <div
                            key={id}
                            className="w-[340px] min-w-[340px] shrink-0 rounded-2xl p-10 shadow-xs"
                        >

                            <div className="flex flex-row gap-5">

                                <Quote
                                    size={42}
                                    className="shrink-0 rotate-180 text-[#000099]"
                                />

                                <p className="text-[15px] font-inter font-medium leading-6 text-[#243858]">
                                    {item.words}
                                </p>

                            </div>

                            <div className="flex items-center justify-center gap-5 pt-10">

                                <img
                                    className="h-15 w-15 rounded-full object-cover"
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