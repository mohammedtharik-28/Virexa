import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import ServicesOurProcess from "@/components/services/ServicesOurProcess";
import ServicesOurTechnology from "@/components/services/ServicesOurTechnology";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOurServices from "@/components/services/ServicesOurServices";
import ServicesIndustryWeServe from "@/components/services/ServicesIndustryWeServe";

export default function services(){
    return (
        <>
        <Navbar/>
        <ServicesHero/>
        <Founder/>
        <ServicesOurServices/>
        <ServicesOurProcess/>
        <ServicesOurTechnology/>
        <ServicesIndustryWeServe/>
        <Footer/>
        </>
    )
}