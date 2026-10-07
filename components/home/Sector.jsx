import {
    FaStore,
    FaHeartPulse,
    FaPlane,
    FaUtensils,
    FaTruck,
    FaGraduationCap,
    FaBolt,
    FaCar
} from "react-icons/fa6";

function Sector() {
    const sectors = [
        {
            title: "Retail & E-commerce",
            icon: FaStore,
            iconBg: "bg-[#f1e5ff]",
            iconColor: "text-purple-600",
            description:
                "Empower retail businesses with smart e-commerce solutions, seamless inventory management, real-time sales tracking, and personalized customer experiences for sustainable business growth.",
        },
        {
            title: "Health Care",
            icon: FaHeartPulse,
            iconBg: "bg-[#ffe6f1]",
            iconColor: "text-pink-500",
            description:
                "Deliver secure healthcare solutions with patient management, digital records, appointment scheduling, and streamlined workflows to improve care and operational efficiency.",
        },
        {
            title: "Travel and Hospitality",
            icon: FaPlane,
            iconBg: "bg-[#dceaff]",
            iconColor: "text-blue-500",
            description:
                "Enhance travel and hospitality services through online booking, guest management, automated operations, and personalized experiences that improve customer satisfaction.",
        },
        {
            title: "Food & Restaurant",
            icon: FaUtensils,
            iconBg: "bg-[#ffecd4]",
            iconColor: "text-orange-500",
            description:
                "Simplify restaurant operations with online ordering, POS integration, kitchen management, delivery tracking, and customer engagement to drive business success.",
        },
        {
            title: "Logistics & Distribution",
            icon: FaTruck,
            iconBg: "bg-[#dcfae8]",
            iconColor: "text-green-600",
            description:
                "Optimize logistics with intelligent fleet management, warehouse automation, shipment tracking, and supply chain visibility for faster and more efficient operations.",
        },
        {
            title: "Education & E-Learning",
            icon: FaGraduationCap,
            iconBg: "bg-[#e4eaff]",
            iconColor: "text-blue-600",
            description:
                "Transform education with interactive e-learning platforms, student management, online assessments, and collaboration tools that enhance learning experiences.",
        }
    ];

    return (
        <section className="px-6 pb-20 pt-40 lg:px-20 xl:px-50">

            <div className="text-center">

                <p className="text-[16px] font-baumans font-bold text-[#000099] lg:text-base">
                    Build for Every Sector
                </p>

                <h1 className="mx-auto mt-4 max-w-[700px] text-[40px] font-baumans text-[#000000] font-bold leading-tight">
                    Proven across{" "}
                    <span className="text-[#000099]">
                        industries.
                    </span>{" "}
                    focused on{" "}
                    <span className="text-[#000099]">
                        outcomes.
                    </span>
                </h1>

            </div>


            <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {sectors.map((sector, index) => {

                    const Icon = sector.icon;

                    return (
                        <div
                            key={index}
                            className="flex min-h-[280px] flex-col items-center justify-center border border-gray-200 p-8 text-center transition-all duration-300 hover:bg-[#d0eaf8]"
                        >

                            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${sector.iconBg} ${sector.iconColor}`}>
                                <Icon size={30} />
                            </div>


                            <h2 className="text-[17px] font-baumans font-semibold text-[#54595f]">
                                {sector.title}
                            </h2>

                            <p className="pt-4 text-[13px] font-poppins font-medium leading-6 text-[#54595f]">
                                {sector.description}
                            </p>

                        </div>
                    );
                })}

            </div>

            <div className="flex text-center justify-center w-full">
                <div className=" border py-10 ps-40 pe-10 border-r-transparent border-gray-200 hover:bg-[#d0eaf8]">

                    <div className="mb-5 flex h-12 w-12 ms-35 items-center justify-center rounded-lg bg-[#fff8c9] text-yellow-500">
                        <FaBolt size={30} />
                    </div>

                    <h1 className="text-[17px] font-baumans font-semibold text-[#54595f] ">
                        On-Demand Solutions
                    </h1>

                    <p className="pt-4 text-[13px] font-poppins font-medium leading-6 text-[#54595f]">
                        Build scalable on-demand platforms with real-time tracking, automated workflows, secure payments, and seamless user experiences for modern service businesses.
                    </p>

                </div>

                <div className=" border py-10 ps-10 pe-40 border-gray-200 hover:bg-[#d0eaf8]">

                    <div className="mb-5 flex h-12 w-12 ms-35 items-center justify-center rounded-lg bg-[#d8f9fc] text-cyan-600">
                        <FaCar size={30} />
                    </div>

                    <h1 className="text-[17px] font-baumans font-semibold text-[#54595f]">
                        Automotive
                    </h1>

                    <p className="pt-4 text-[13px] font-poppins font-medium leading-6 text-[#54595f]">
                        Modernize automotive businesses with dealership management, vehicle tracking, service scheduling, inventory control, and customer engagement for improved operational performance.
                    </p>

                </div>
            </div>
        </section>
    );
}

export default Sector;