import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import ECommerceDevelopmentGetInTouch from "@/components/services/e-commerce-store-development/ECommerceDevelopmentGetInTouch";
import ECommerceDevelopmentHero from "@/components/services/e-commerce-store-development/ECommerceDevelopmentHero";
import ECommerceDevelopmentIndustries from "@/components/services/e-commerce-store-development/ECommerceDevelopmentIndustries";
import ECommerceDevelopmentProcess from "@/components/services/e-commerce-store-development/ECommerceDevelopmentProcess";
import ECommerceDevelopmentQuestionCard from "@/components/services/e-commerce-store-development/ECommerceDevelopmentQuestionCard";
import EcommerceDevelopmentServices from "@/components/services/e-commerce-store-development/ECommerceDevelopmentServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <ECommerceDevelopmentHero/>
        <Founder/>
        <EcommerceDevelopmentServices/>
        <ECommerceDevelopmentProcess/>
        <WebsiteDevelopmentStats/>
        <ECommerceDevelopmentIndustries/>
        <OurTechnology/>
        <ECommerceDevelopmentQuestionCard/>
        <ECommerceDevelopmentGetInTouch/>
        <Footer/>
        </>
    )
}