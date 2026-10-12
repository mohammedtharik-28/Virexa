function TravelWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Direct Booking = More Margin",
            description:
                "Every direct booking saves you 15–25% OTA commission. We build booking engines that convert visitors at the same rate as OTAs — with best-rate-guarantee messaging and a frictionless checkout.",
        },
        {
            number: "02",
            title: "Real-Time Availability at the Core",
            description:
                "Inventory that goes out of sync causes double-bookings and guest complaints. Our channel managers and PMS are built for sub-second availability sync — across all channels simultaneously.",
        },
        {
            number: "03",
            title: "Built for Indian Travel Nuances",
            description:
                "GST on hotel stays (12% vs 18% based on tariff), INR pricing, UPI and EMI support for package bookings, and Aadhaar-based guest ID verification — all standard, not extras.",
        },
        {
            number: "04",
            title: "You Own Your Guest Data",
            description:
                "OTAs keep your guests. We build platforms where every guest profile, preference, and stay history is yours — enabling personalised WhatsApp campaigns, loyalty rewards, and anniversary offers.",
        },
        {
            number: "05",
            title: "Multi-Property & Multi-Brand Ready",
            description:
                "One platform, multiple properties, brands. Centralised rate and inventory management with reporting — whether you have 2 resorts or 50 hotels in a chain.",
        },
        {
            number: "06",
            title: "Covers the Full Guest Journey",
            description:
                "From discovery and booking to check-in, in-stay requests, checkout, and post-stay review — we build technology that touches every moment of the guest experience, not just the booking widget.",
        },
    ];

    return (
        <section className="w-full bg-white px-5 py-20 sm:px-8 lg:px-26">
            <div className="flex flex-col items-center text-center">
                <div className="w-full">
                    <p className="font-baumans text-[16px] font-bold text-[#000099] lg:text-base">
                        Why virexa
                    </p>

                    <h1 className="mx-auto m-4 w-full max-w-[350px] pb-2 font-baumans text-[40px] font-bold leading-tight text-[#000000] sm:max-w-[700px] md:max-w-[450px] lg:max-w-[900px]">
                        Why Travel & Hospitality{" "}
                        <span className="text-[#000099]">
                            Businesses Choose Virexa
                        </span>
                    </h1>
                    <p className="font-poppins font-normal text-[14px] text-[#54595f] mx-auto sm:max-w-[700px] md:max-w-[450px] lg:max-w-[760px]">
                        We’ve built 70+ platforms across hotels, resorts, tour operators, and travel agencies. We understand the booking journey, the OTA ecosystem, and what it takes to convert a traveller browsing at midnight into a confirmed guest
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



export default TravelWhyVirexa;