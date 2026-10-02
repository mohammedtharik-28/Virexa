function Founder() {

    const companies = [
        {
            name: "Wacto",
            img: "/Founder/Wacto.webp",
            className: "w-25 h-10"
        },
        {
            name: "Frisbi",
            img: "/Founder/Frisbi.svg",
            className: "w-25 h-10"
        },
        {
            name: "Arunkumari",
            img: "/Founder/Arunkumari.webp",
            className: "w-25 h-30"
        },
        {
            name: "Elixir Bace",
            img: "/Founder/Elixir-Bace.webp",
            className: "w-25 h-10"
        },
        {
            name: "Pinkbu Studios",
            img: "/Founder/PinkbuStudios.webp",
            className: "w-25 h-10"
        },
        {
            name: "Iedeo",
            img: "/Founder/iedeo.png",
            className: "w-25 h-10"
        },
        {
            name: "Vetha Academy",
            img: "/Founder/vethaAcademy.png",
            className: "w-25 h-30"
        }
    ];

    return (
        <section className="max-w-full px-12 py-10 text-center">

            <div className="px-20">

                <div className="pb-12 text-[20px] font-baumans font-bold text-[#000000]">
                    <h1>
                        Trusted by Founders and Growing Teams
                    </h1>
                </div>

                <div className="flex items-center justify-evenly gap-y-10">

                    {companies.map((company, id) => (

                        <img
                            key={id}
                            src={company.img}
                            alt={company.name}
                            className={`${company.className} object-contain`}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Founder;