function FoodWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "Zero Commission Direct Ordering",
            description:
                "We build platforms that let you own your ordering channel completely. Every direct order puts more margin back in your pocket — no Zomato cut, no Swiggy cut, ever.",
        },
        {
            number: "02",
            title: "Built for Indian F&B Reality",
            description:
                "GST on food (5% vs 18%), UPI-first payments, Swiggy and Zomato API integrations, and FSSAI compliance — all handled as standard best practices, not as custom extras.",
        },
        {
            number: "03",
            title: "Real-Time Order Synchronisation",
            description:
                "Orders from your app, website, QR table, and third-party platforms all appear on one KDS in real time — no missed tickets, no double-entry, no shouting across the kitchen.",
        },
        {
            number: "04",
            title: "Hardware + Software Together",
            description:
                "We configure and integrate thermal printers, KDS screens, POS tablets, and cash drawers — you don't need to figure out hardware compatibility alone.",
        },
        {
            number: "05",
            title: "Scales from 1 to 100+ Outlets",
            description:
                "Single-restaurant owners and 50-outlet chains use the same platform — just different configurations. Your system grows with your business without a rebuild.",
        },
        {
            number: "06",
            title: "You Own Your Customer Data",
            description:
                "Unlike third-party platforms that keep your customer data, our systems put your customer database in your hands — for CRM, WhatsApp marketing, retargeting.",
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



export default FoodWhyVirexa;