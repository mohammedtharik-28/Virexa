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
        <section className="px-30 relative z-10 bg-white">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20">

                {mindset.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="max-w-[360px] mx-auto border border-[#ececec] rounded-2xl p-8 transition-all hover:scale-110 duration-200"
                        >

                            <Icon
                                className="text-[#000099] mb-8"
                                size={40}
                            />

                            <h1 className="text-[24px] font-bold font-baumans text-[#000000]">
                                {item.title}
                            </h1>

                            <p className="font-medium text-[15px] font-poppins text-[#54595F] pt-5">
                                {item.description}
                            </p>

                        </div>
                    );
                })}

            </div>

            <div className="bg-[#000099] text-center rounded-2xl py-15 px-80 mt-25 mb-25">

                <p className="font-bold text-[16px] font-baumans text-[#ececec] lg:text-base">
                    Employee first, Employee always
                </p>

                <h1 className="text-[40px] font-baumans font-bold text-[#ececec]">
                    Register Your Profile
                </h1>

                <p className="text-[#ececec] font-medium text-[15px] font-poppins pt-5">
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