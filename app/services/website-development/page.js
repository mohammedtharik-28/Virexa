import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import WebsiteDevelopmentGetInTouch from "@/components/services/website-development/WebsiteDevelopmentGetInTouch";
import WebsiteDevelopmentHero from "@/components/services/website-development/WebsiteDevelopmentHero";
import WebsiteDevelopmentIncluded from "@/components/services/website-development/WebsiteDevelopmentIncluded";
import WebsiteDevelopmentIndustries from "@/components/services/website-development/WebsiteDevelopmentIndustries";
import WebsiteDevelopmentQuestionCard from "@/components/services/website-development/WebsiteDevelopmentQuestionCard";
import WebsiteDevelopmentServices from "@/components/services/website-development/WebsiteDevelopmentServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <WebsiteDevelopmentHero/>
        <Founder/>
        <WebsiteDevelopmentServices/>
        <WebsiteDevelopmentIncluded/>
        <WebsiteDevelopmentStats/>
        <WebsiteDevelopmentIndustries/>
        <OurTechnology/>
        <WebsiteDevelopmentQuestionCard/>
        <WebsiteDevelopmentGetInTouch/>
        <Footer/>
        </>
    )
}