import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import MobileAppDevelopmentHero from "@/components/services/mobile-app-development/MobilAppDevelopmentHero";
import MobileAppDevelopmentIndustries from "@/components/services/mobile-app-development/MobileAppDevelopmentIndustries";
import MobileAppDevelopmentProcess from "@/components/services/mobile-app-development/MobileAppDevelopmentProcess";
import MobileAppDevelopmentQuestionCard from "@/components/services/mobile-app-development/MobileAppDevelopmentQuestionCard";
import MobileAppServices from "@/components/services/mobile-app-development/MobileAppDevelopmentServices";
import MobileDevelopmentGetInTouch from "@/components/services/mobile-app-development/MobileDevelopmentGetInTouch";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <MobileAppDevelopmentHero/>
        <Founder/>
        <MobileAppServices/>
        <MobileAppDevelopmentProcess/>
        <WebsiteDevelopmentStats/>
        <MobileAppDevelopmentIndustries/>
        <OurTechnology/>
        <MobileAppDevelopmentQuestionCard/>
        <MobileDevelopmentGetInTouch/>
        <Footer/>
        </>
    )
}