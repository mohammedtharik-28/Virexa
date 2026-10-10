import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import SoftwareDevelopmentServices from "@/components/services/software-development/SoftwareDevelopmentServices";
import SoftwareDevelopmentHero from "@/components/services/software-development/SoftwareDevelopmentHero";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";
import SoftwareDevelopmentProcess from "@/components/services/software-development/SoftwareDevelopmentProcess";
import OurTechnology from "@/components/home/OurTechnology";
import SoftwareDevelopmentQuestionCard from "@/components/services/software-development/SoftwareDevelopmentQuestionCard";
import SoftwareDevelopmentIndustries from "@/components/services/software-development/SoftwaredevelopmentIndustries";
import SoftwareDevelopmentGetInTouch from "@/components/services/software-development/SoftwareDevelopmentGetInTouch";



export default function services(){
    return (
        <>
        <Navbar/>
        <SoftwareDevelopmentHero/>
        <Founder/>
        <SoftwareDevelopmentServices/>
        <SoftwareDevelopmentProcess/>
        <WebsiteDevelopmentStats/>
        <SoftwareDevelopmentIndustries/>
        <OurTechnology/>
        <SoftwareDevelopmentQuestionCard/>
        <SoftwareDevelopmentGetInTouch/>
        <Footer/>
        </>
    )
}