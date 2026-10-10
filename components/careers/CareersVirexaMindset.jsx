import Link from "next/link";

import {
    FaUsers,
    FaNetworkWired,
    FaPeopleGroup,
    FaSeedling,
    FaChartLine,
    FaUserAstronaut,
} from "react-icons/fa6";

function CareersVirexaMindset() {

    const mindset = [
        {
            title: "Positive Attitude",
            description:
                "Demonstrate a positive attitude, adhere to organizational culture, uphold core values, and contribute effectively to teamwork",
            icon: FaUsers,
        },
        {
            title: "Core Leadership Traits",
            description:
                "Individuals demonstrating leadership capabilities are encouraged to contribute to the team and develop their potential.",
            icon: FaNetworkWired,
        },
        {
            title: "Strong Team Player",
            description:
                "Possesses a strong team-oriented mindset and the ability to work closely with colleagues.",
            icon: FaPeopleGroup,
        },
        {
            title: "Learn and Grow",
            description:
                "Keen to learn, grow skills, and build a successful career.",
            icon: FaSeedling,
        },
        {
            title: "High Goals",
            description:
                "Big thinkers who set bold goals and take action to make them happen.",
            icon: FaChartLine,
        },
        {
            title: "Self-Motivated",
            description:
                "We love self-starters who bring passion and ownership to their work.",
            icon: FaUserAstronaut,
        }
    ];

    return (
        <section className="relative z-10 w-full overflow-hidden bg-white px-6 sm:px-10 lg:px-4 xl:px-26 2xl:px-50">

            <div className="grid w-full grid-cols-1 gap-5 pt-20 sm:grid-cols-2 lg:grid-cols-3">

                {mindset.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="mx-auto flex w-full max-w-[360px] min-w-0 flex-col rounded-2xl border border-[#ececec] p-6 transition-all duration-200 hover:scale-105 sm:p-8"
                        >

                            <Icon
                                className="mb-8 text-[#000099]"
                                size={40}
                            />

                            <h1 className="text-[24px] font-bold font-baumans text-[#000000]">
                                {item.title}
                            </h1>

                            <p className="pt-5 text-[14px] font-medium font-poppins leading-6 text-[#54595F] sm:text-[15px]">
                                {item.description}
                            </p>

                        </div>
                    );
                })}

            </div>

            <div className="mt-20 mb-20 w-full rounded-2xl bg-[#000099] px-6 py-10 text-center sm:px-10 sm:py-12 lg:mt-25 lg:mb-25 lg:px-20 xl:px-30 2xl:px-50">

                <p className="font-bold text-[16px] font-baumans text-[#ececec] lg:text-base">
                    Employee first, Employee always
                </p>

                <h1 className="mt-2 text-[32px] font-baumans font-bold text-[#ececec] sm:text-[36px] lg:text-[40px]">
                    Register Your Profile
                </h1>

                <p className="mx-auto max-w-[700px] pt-5 text-[14px] font-medium font-poppins leading-6 text-[#ececec] sm:text-[15px]">
                    Register your profile on{" "}
                    <span className="border-b-3 border-[#b2ff66]">
                        hr@virexa.in
                    </span>{" "}
                    to spearhead your career to the next level of excellence.
                </p>

            </div>

        </section>
    );
}

export default CareersVirexaMindset;