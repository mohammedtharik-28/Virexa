import ContactUsHero from "@/components/contact-us/ContactUsHero";
import ContactUsInfo from "@/components/contact-us/ContactUsInfo";
import ContactUsLetUsTeamUp from "@/components/contact-us/ContactUsLetsTeamUp";
import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";


export default function services() {
    return (
        <>
            <div className="relative z-[9999]">
                <Navbar />
            </div>
            <ContactUsHero />
            <Founder />
            <ContactUsInfo />
            <ContactUsLetUsTeamUp />
            <Footer />
        </>
    )
}