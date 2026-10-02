function OurTechnology() {

    const Technology1 = [
        {
            img: "/OurTechnology/react.png",
            name: "React"
        },
        {
            img: "/OurTechnology/vue.webp",
            name: "Vue.js"
        },
        {
            img: "/OurTechnology/Jss-Logo-1.png",
            name: "Javascript"
        },
        {
            img: "/OurTechnology/Angular.webp",
            name: "Angular"
        },
        {
            img: "/OurTechnology/Boot-Logo.webp",
            name: "Bootstrap"
        },
        {
            img: "/OurTechnology/NextJs-logo.webp",
            name: "Next.js"
        },
        {
            img: "/OurTechnology/NestJs.Webp",
            name: "Nest.js"
        },
        {
            img: "/OurTechnology/Js-logo.png",
            name: "Node.js"
        },
        {
            img: "/OurTechnology/Python-logo.webp",
            name: "Python"
        },
        {
            img: "/OurTechnology/Laravel-logo.png",
            name: "Laravel"
        }
    ];

    const Technology2 = [
        {
            img: "/OurTechnology/Typescript.webp",
            name: "Typescript"
        },
        {
            img: "/OurTechnology/Mysql.webp",
            name: "MySql"
        },
        {
            img: "/OurTechnology/Postgre-sql.webp",
            name: "Postresql"
        },
        {
            img: "/OurTechnology/mongo-DB.webp",
            name: "Mongo DB"
        },
        {
            img: "/OurTechnology/Firebase.webp",
            name: "Firebase"
        },
        {
            img: "/OurTechnology/Elastic.webp",
            name: "Elastic"
        },
        {
            img: "/OurTechnology/Swift.webp",
            name: "Swift"
        },
        {
            img: "/OurTechnology/Flutter.webp",
            name: "Flutter"
        },
        {
            img: "/OurTechnology/Android.webp",
            name: "Android"
        },
        {
            img: "/OurTechnology/Graphql.png",
            name: "Graphql"
        },
        {
            img: "/OurTechnology/Scss.webp",
            name: "Scss"
        },
        {
            img: "/OurTechnology/Tailwind.webp",
            name: "Tailwind"
        }
    ];

    const infiniteTechnologies1 = [
        ...Technology1,
        ...Technology1
    ];

    const infiniteTechnologies2 = [
        ...Technology2,
        ...Technology2
    ];

    return (
        <section className="overflow-hidden pt-30">

            <div className="text-center">

                <p className="text-[16px] font-bold text-[#000099] font-baumans lg:text-base">
                    Our Technology
                </p>

                <h1 className="mx-auto m-8 w-full max-w-[350px] font-baumans text-[40px] text-[#000000] font-bold leading-tight sm:max-w-[700px] md:max-w-[600px] lg:max-w-[780px]">
                    Modern{" "}
                    <span className="text-[#000099]">
                        tech
                    </span>{" "}
                    for a{" "}
                    <span className="text-[#000099]">
                        digital-first
                    </span>{" "}
                    world
                </h1>

            </div>


            <div className="overflow-hidden pt-20">

                <div className="Technology1-track flex w-max gap-15">

                    {infiniteTechnologies1.map((item, id) => (

                        <div
                            key={id}
                            className="flex shrink-0 items-center gap-3"
                        >

                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-12 w-12 object-contain"
                            />

                            <p className="font-bold font-baumans text-[16px] text-[#000000]">
                                {item.name}
                            </p>

                        </div>

                    ))}

                </div>


                <div className="Technology2-track flex w-max gap-15 pt-15">

                    {infiniteTechnologies2.map((item, id) => (

                        <div
                            key={id}
                            className="flex shrink-0 items-center gap-3"
                        >

                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-12 w-12 object-contain"
                            />

                            <p className="font-bold font-baumans text-[16px] text-[#000000]">
                                {item.name}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default OurTechnology;