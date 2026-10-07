import { Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";


function AboutUsGetInTouch() {
	return (
		<section className="pb-20">
			<div className="mt-30 px-6 sm:px-10 md:px-58">
				<div className="mx-auto text-center">
					<h1 className="mx-auto mt-4 w-full max-w-[700px] text-[40px] font-baumans font-bold leading-tight text-[#000000]">
						Get in{" "}
						<span className="text-[#000099]">
							Touch
						</span>{" "}
						with Us
					</h1>
				</div>

				<div className="mx-auto mt-20 max-w-[1200px] border-none rounded-2xl shadow-xl px-8 py-6">

					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

						<h1 className="font-baumans font-semibold text-[20px] text-[#000000]">
							Send a Message
						</h1>

						<div>
							<h1 className="font-baumans font-semibold text-[15px] text-[#000000]">
								or Call for Consultation
							</h1>

							<Link
								href="/phone"
								className="mt-3 flex items-center gap-2"
							>
								<Phone
									size={25}
									className="text-[#000099]"
								/>

								<span className="font-semibold font-baumans text-[15px] text-[#000000]">
									+91 892-582-6080
								</span>
							</Link>
						</div>

					</div>

					<div className="mt-12 flex flex-col gap-10 lg:flex-row  justify-between ">

						<div className="w-full max-w-[260px]">

							<div className="mb-8">
								<div className="flex">
									<h1 className="font-poppins text-[15px] font-medium text-[#000000]">
										Name
									</h1>

									<p className="text-red-500">
										*
									</p>
								</div>

								<input
									type="text"
									className="mt-2 w-full border-b-2 border-[#54595f] bg-transparent py-1 outline-none"
								/>
							</div>

							<div className="mb-8">
								<div className="flex">
									<h1 className="font-poppins text-[15px] font-medium text-[#000000]">
										Email
									</h1>

									<p className="text-red-500">
										*
									</p>
								</div>

								<input
									type="email"
									className="mt-2 w-full border-b-2 border-[#54595f] bg-transparent py-1 outline-none"
								/>
							</div>

							<div className="mb-8">
								<div className="flex">
									<h1 className="font-poppins text-[15px] font-medium text-[#000000]">
										Phone
									</h1>

									<p className="text-red-500">
										*
									</p>
								</div>

								<input
									type="tel"
									className="mt-2 w-full border-b-2 border-[#54595f] bg-transparent py-1 outline-none"
								/>
							</div>

							<button
								type="submit"
								className="min-w-[200px] rounded-full bg-[#000099] px-8 py-3 font-poppins text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#b2ff66] hover:text-[#000099]"
							>
								Submit
							</button>

						</div>

						<div className="w-full max-w-[480px]">

							<div className="mb-8">
								<div className="flex">
									<h1 className="font-poppins text-[15px] font-medium text-[#000000]">
										Message
									</h1>

									<p className="text-red-500">
										*
									</p>
								</div>

								<textarea
									className="mt-2 min-h-[130px] w-full resize-none border-b-2 border-[#54595f] bg-transparent py-1 outline-none"
									placeholder="Let's create something amazing together-send us your project details, and we'll get back to you within 24 hours."
								/>

							</div>

						</div>

					</div>

				</div>
			</div>
			<div className="bg-[#000099] text-center rounded-3xl py-18 px-28 mt-25 mx-26">
				<h1 className="font-baumans font-bold text-[16px] text-[#ffffff]">Get Started Today</h1>
				<h1 className="text-[40px] font-baumans font-bold text-[#ececec]">Ready to Grow Your Business Online in Coimbatore?</h1>
				<p className="text-[#ececec] font-medium text-[15px] font-poppins pt-2 px-12">Talk to our web development experts for a FREE consultation — no strings attached. We'll help you plan the perfect website for your business.</p>
				<Link
					href="/contact"
					className="group mx-auto mt-10 flex w-full max-w-[220px] items-center justify-center gap-3 rounded-full bg-[#b2ff66] px-3 py-2 text-[13px] font-poppins font-semibold text-[#000099] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#000099]"
				>
					<span className="ps-2">
						Get Free Consultation
					</span>

					<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000099] text-gray-200 transition-all duration-200 group-hover:bg-[#000099] group-hover:text-white">
						<ArrowUpRight size={21} />
					</span>
				</Link>
			</div>

		</section>
	);
}

export default AboutUsGetInTouch;