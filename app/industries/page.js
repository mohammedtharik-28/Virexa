import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesOurProcess from "@/components/industries/IndustriesOurProcess";
import IndustriesWeServe from "@/components/industries/IndustriesWeServe";
import IndustriesWhatWeBuild from "@/components/industries/IndustriesWhatWeBuild";


export default function services(){
    return (
        <>
        <Navbar/>
        <IndustriesHero/>
        <Founder/>
        <IndustriesWeServe/>
        <IndustriesOurProcess/>
        <OurTechnology/>
        <IndustriesWhatWeBuild/>
        <Footer/>
        </>
    )
}