"use client";

function ContactUsLetUsTeamUp() {
    return (
        <section className="px-6 lg:px-10 xl:px-26 mt-20 mb-30">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                <div>
                    <h1 className="font-baumans font-bold text-[#000000] text-[40px]">Got Ideas? Let’s team up.</h1>
                    <p className="font-poppins text-[15px] text-[#54595f] font-medium pt-5">
                        Tell us about your project — we’ll get back within 24 hours
                    </p>

                    <form className="pt-16">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div>
                                <label className="font-poppins text-[15px] text-[#000000]">
                                    Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="mt-6 w-full border-0 border-b-2 border-[#b5b5b5] bg-transparent pb-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-poppins text-[15px] text-[#000000]">
                                    Email <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="email"
                                    className="mt-6 w-full border-0 border-b-2 border-[#b5b5b5] bg-transparent pb-3 outline-none"
                                />
                            </div>

                        </div>

                        <div className="pt-8">

                            <label className="font-poppins text-[15px] text-[#000000]">
                                Phone <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="tel"
                                placeholder="(201) 555-0123"
                                className="mt-6 w-full border-0 border-b-2 border-[#b5b5b5] bg-transparent pb-3 outline-none placeholder:text-[#aaaaaa]"
                            />

                        </div>

                        <div className="pt-8">

                            <label className="font-poppins text-[15px] text-[#000000]">
                                How Can We Help You? <span className="text-red-500">*</span>
                            </label>

                            <textarea
                                rows="4"
                                placeholder="A brief description about your project/request/consultation"
                                className="mt-6 w-full resize-none border-0 border-b-2 border-[#b5b5b5] bg-transparent pb-3 outline-none placeholder:text-[#aaaaaa]"
                            />

                        </div>
                        <button className="bg-[#000099] font-medium text-[17px] text-[#ececec] w-full mt-6 p-2 rounded-full hover:bg-[#b2ff66] hover:text-[#000099]">Submit</button>

                    </form>

                </div>

                <div className="h-[450px] lg:h-[500px] w-full overflow-hidden rounded-3xl mt-20">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3915.674120712929!2d77.0471959!3d11.0630409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9b2d73c1a11%3A0xc33851b7c9c05ac0!2sKP%20TOWERS!5e0!3m2!1sen!2sin!4v1791278304803!5m2!1sen!2sin"
                        className="h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />

                </div>

            </div>

        </section>
    );
}

export default ContactUsLetUsTeamUp;