function AutomotiveWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Deep Automotive Domain Knowledge",
            description:
                "We understand the difference between a new car dealership, a used car lot, a two-wheeler service chain, and a fleet operator — and we build accordingly. Not a one-size-fits-all solution.",
        },
        {
            number: "02",
            title: "Built for Indian Automotive Reality",
            description:
                "RC verification via VAHAN, FASTag integration, PUC and insurance tracking, GST on vehicles and services, and Aadhaar-based KYC for finance — all standard, not custom.",
        },
        {
            number: "03",
            title: "WhatsApp-First Customer Communication",
            description:
                "Service updates, booking confirmations, insurance renewals, and follow-up messages all delivered via WhatsApp — because that's what your customers actually respond to.",
        },
        {
            number: "04",
            title: "Multi-Brand & Multi-Outlet Ready",
            description:
                "One platform for multiple brands, multiple locations, and multiple business units — with centralized consolidated reporting at the top and granular visibility at the outlet level.",
        },
        {
            number: "05",
            title: "Integrates with Your Existing DMS/ERP",
            description:
                "We integrate with existing OEM portals, Tally, SAP, and dealership management systems already in use — so you don't have to rip and replace what's working.",
        },
        {
            number: "06",
            title: "Scales as Your Business Grows",
            description:
                "From a single outlet to a 50-branch dealership group — the same platform scales with you. Add branches, brands, and users without a rebuild or per-seat fee shock.",
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
                        Why Automotive Businesses{" "}
                        <span className="text-[#000099]">
                            Choose Virexa
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        We’ve built 60+ automotive technology platforms across dealerships, service chains, marketplaces, and fleet operators. We understand how the Indian automotive business actually works — from walk-in leads to RC transfers.
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



export default AutomotiveWhyVirexa;