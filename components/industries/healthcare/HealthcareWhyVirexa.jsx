function HealthcareWhyVirexa() {
    const benefits = [
        {
            number: "01",
            title: "ABDM & HIPAA Built In",
            description:
                "Every platform we build is HIPAA-compliant and ABDM-ready from the start — not retrofit after launch. ABHA ID generation, PHR linking, and NHA gateway integration are standard features.",
        },
        {
            number: "02",
            title: "Built for Indian Healthcare",
            description:
                "We understand CGHS, TPA billing, Ayushman Bharat, NABH standards, and how Indian patients and doctors actually use technology — not how Silicon Valley assumes they do.",
        },
        {
            number: "03",
            title: "Doctor-Friendly Interface Design",
            description:
                "Doctors are not typical app users. We design for speed — structured templates, voice-to-text notes, smart autofill, and single-tap prescriptions that don't slow down a busy OPD.",
        },
        {
            number: "04",
            title: "Single Clinic to Hospital Chain",
            description:
                "Same platform, different configurations. A single-doctor clinic and a 10-branch hospital network use the same core system — easily scaled without a rebuild as you grow.",
        },
        {
            number: "05",
            title: "Data Security First",
            description:
                "End-to-end encryption, role-based access control, full audit trails, and encrypted database storage — patient data is protected at every layer, not just the login screen.",
        },
        {
            number: "06",
            title: "Offline-Resilient for Clinics",
            description:
                "Power cuts and poor connectivity are real in Indian clinics. Our systems work offline — OPD continues, data syncs when connectivity returns. No patient turned away due to a system failure.",
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



export default HealthcareWhyVirexa;