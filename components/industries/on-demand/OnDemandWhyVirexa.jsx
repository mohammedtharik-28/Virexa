function OnDemandWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Real-Time-First Architecture",
            description:
                "Every platform we build is architected for real-time from day one — WebSocket infrastructure, Redis management, and geospatial dispatch that handles millions of location events without falling over.",
        },
        {
            number: "02",
            title: "Three Apps, One Team",
            description:
                "Customer app, provider app, and admin dashboard — all built simultaneously by the same team who understands how they need to work together. No handoff gaps, no integration surprises at launch.",
        },
        {
            number: "03",
            title: "Built for Indian Network Reality",
            description:
                "Offline-tolerant provider apps, UPI-first payments, background GPS that survives Android battery management, and low-bandwidth map rendering — because your providers work where 4G is a luxury.",
        },
        {
            number: "04",
            title: "Configurable, Not Coded",
            description:
                "Pricing rules, matching radius, surge logic, cancellation policies, commission structure — all configurable from the admin dashboard. You change your business model without a code deployment.",
        },
        {
            number: "05",
            title: "Scales from MVP to Millions",
            description:
                "We architect for the scale you're going to, not the scale you're at. Auto-scaling infrastructure, database sharding strategy, and queue-based processing so your platform handles Day 1 and Day 1000.",
        },
        {
            number: "06",
            title: "Compliance & Trust Built In",
            description:
                "Aadhaar KYC, PAN verification, GST receipts, TDS deduction tracking for providers, and PDPA-compliant data handling — all the compliance overhead handled before you launch.",
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
                        Why On-Demand Founders{" "}
                        <span className="text-[#000099]">
                            Build with Virexa
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        We’ve shipped 12+ on-demand platforms across verticals. We know where the hard problems are — and we’ve already solved them.
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



export default OnDemandWhyVirexa;