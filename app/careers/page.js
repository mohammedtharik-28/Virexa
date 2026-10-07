import CareersHero from "@/components/careers/CareersHero";
import CareersVirexaMindset from "@/components/careers/CareersVirexaMindset";
import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";


export default function services(){
    return (
        <>
        <Navbar/>
        <CareersHero/>
        <Founder/>
        <CareersVirexaMindset/>
        <Footer/>
        </>
    )
}