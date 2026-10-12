function LogisticsDistributionWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Built for Field Reality",
            description:
                "We build for how logistics actually works — spotty internet, offline requirements, heat-damaged phones, and drivers who need a UI that works with one thumb. Not just what looks good in a demo.",
        },
        {
            number: "02",
            title: "Real-Time at the Core",
            description:
                "Our architecture is built for live data — GPS positions, status events, inventory changes, and alerts delivered in sub-second latency using WebSockets and event-driven infrastructure.",
        },
        {
            number: "03",
            title: "India-Specific Logistics Knowledge",
            description:
                "We understand Indian address formats, pin-code routing, E-Way Bill compliance, FASTag integration, and logistics across Tier 2 and Tier 3 cities.",
        },
        {
            number: "04",
            title: "Scales from 10 to 10,000 Vehicles",
            description:
                "Our platform architecture supports single-city operators and multi-region enterprises equally. We design for your current size and your next 10x without a full rebuild.",
        },
        {
            number: "05",
            title: "Integrates with Your Existing Stack",
            description:
                "We integrate with ERP, accounting software, e-commerce platforms, and portals via APIs — no rip-and-replace.",
        },
        {
            number: "06",
            title: "Ops-First, Not Just Tech",
            description:
                "We spend time understanding your operations, not just your requirements. That's why our solutions solve the actual problem — not just the stated one.",
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
                        Why Logistics Companies{" "}
                        <span className="text-[#000099]">
                            Choose Virexa
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        Logistics software is high-stakes — it runs your operations in real time. We understand the industry’s complexity, and we build accordingly.
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



export default LogisticsDistributionWhyVirexa;