import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import SoftwareTestingIndustries from "@/components/services/software-testing/SoftwareTestingIndustries";
import SoftwareTestingHero from "@/components/services/software-testing/SoftwareTestingHero";
import SoftwareTestingProcess from "@/components/services/software-testing/SoftwareTestingProcess";
import SoftwareTestingServices from "@/components/services/software-testing/SoftwareTestingServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";
import SoftwareTestingQuestionCard from "@/components/services/software-testing/SoftwareTestingQuestionCard";
import SoftwareTestingGetInTouch from "@/components/services/software-testing/SoftwareTestingGetInTouch";



export default function services(){
    return (
        <>
        <Navbar/>
        <SoftwareTestingHero/>
        <SoftwareTestingServices/>
        <SoftwareTestingProcess/>
        <WebsiteDevelopmentStats/>
        <SoftwareTestingIndustries/>
        <Founder/>
        <OurTechnology/>
        <SoftwareTestingQuestionCard/>
        <SoftwareTestingGetInTouch/>
        <Footer/>
        </>
    )
}