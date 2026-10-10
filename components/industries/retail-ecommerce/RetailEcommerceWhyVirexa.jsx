function RetailEcommerceWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Deep Retail Domain Knowledge",
            description:
                "We've built 200+ retail and e-commerce solutions. We understand the difference between a fashion store, a grocery business, and a B2B supplier — and we build accordingly, not generically.",
        },
        {
            number: "02",
            title: "Built for the Indian Market",
            description:
                "Indian payment gateways, logistics partners, GST compliance, regional language support, and India-specific buying behaviours are part of every build — not afterthoughts.",
        },
        {
            number: "03",
            title: "Conversion-Focused Design",
            description:
                "Every design and development decision is backed by conversion data. We build stores that look great and sell — not stores that win design awards but lose customers at checkout.",
        },
        {
            number: "04",
            title: "Full-Stack Capability",
            description:
                "Frontend, backend, mobile, integrations, marketing, and SEO — all under one roof. No briefing three agencies and managing communication for you.",
        },
        {
            number: "05",
            title: "Scales With Your Business",
            description:
                "Frontend, backend, mobile, integrations, marketing, and SEO — all under one roof. No briefing three agencies and managing communication for you.",
        },
        {
            number: "06",
            title: "Ongoing Growth Partnership",
            description:
                "Post-launch, we stay available for new features, CRO improvements, marketing technology integrations, and performance optimisation as your business grows.",
        },
    ];

    return (
        <section className="w-full bg-white px-5 py-20 sm:px-8 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Why virexa
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[750px]">
                        Why virexa{" "}
                        <span className="text-[#000099]">
                            Choose Virexa
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        We don’t just build stores. We understand the retail business model — margins, inventory, customer acquisition costs, and lifetime value — and we build technology that improves each one.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1440px] pt-20 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.number}
                        className="min-h-[350px] rounded-[21px] border border-[#c4c4c4] hover:border-[#000099] transition duration-100 px-7 py-10 sm:px-8"
                    >
                        <span className="block text-[52px] font-normal leading-none text-[#e2e2ff]">
                            {benefit.number}
                        </span>

                        <h3 className="mt-12 text-[20px] font-bold font-baumans leading-6 text-[#000000]">
                            {benefit.title}
                        </h3>

                        <p className="mt-2 text-[14px] font-poppins font-normal leading-7 text-[#54595f]">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}



export default RetailEcommerceWhyVirexa;