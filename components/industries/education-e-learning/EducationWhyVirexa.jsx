function EducationWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "You Own Everything — No Licence Fees",
            description:
                "We build and hand over the full platform — codebase, database, infrastructure. You pay no per-student fee and no recurring SaaS licence as your learner base grows from 100 to 100,000.",
        },
        {
            number: "02",
            title: "Built for Indian EdTech Reality",
            description:
                "Slow 2G connections in Tier 3 cities, UPI-first payments, WhatsApp-based engagement, and Hindi/regional language support — all seamlessly built in from day one, not bolted on as extras. Designed for real users, real conditions, and real-world scale.",
        },
        {
            number: "03",
            title: "Engagement-First Design",
            description:
                "We design for completion, not just enrolment. Streaks, gamification, progress nudges, and automated WhatsApp reminders are baked into every platform we build because idle students don't convert.",
        },
        {
            number: "04",
            title: "Scalable from Day 1",
            description:
                "We build for your first 100 students and your first 100,000 simultaneously. Video CDN, auto-scaling infrastructure, and load-tested live class systems that don't break during your busiest exam season.",
        },
        {
            number: "05",
            title: "DRM & Content Protection",
            description:
                "Your video content is your core asset. We implement screen-capture prevention, watermarking, time-limited streaming URLs, and download encryption so your content stays protected.",
        },
        {
            number: "06",
            title: "Multi-Instructor & Multi-Batch Ready",
            description:
                "One platform, unlimited instructors, batches, courses. Role-based access for teachers, batch managers, and admins — with no additional per-seat cost.",
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



export default EducationWhyVirexa;