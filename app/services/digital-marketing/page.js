import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import DigitalMarketingGetInTouch from "@/components/services/digital-marketing/DigitalMarketingGetInTouch";
import DigitalMarketingHero from "@/components/services/digital-marketing/DigitalMarketingHero";
import DigitalMarketingIndustries from "@/components/services/digital-marketing/DigitalMarketingIndustries";
import DigitalMarketingProcess from "@/components/services/digital-marketing/DigitalMarketingProcess";
import DigitalMarketingQuestionCard from "@/components/services/digital-marketing/DigitalMarketingQuestionCard";
import DigitalMarketingServices from "@/components/services/digital-marketing/DigitalMarketingServices";
import VideoEditingGetInTouch from "@/components/services/video-editing/VideoEditingGetInTouch";
import VideoEditingHero from "@/components/services/video-editing/VideoEditingHero";
import VideoEditingIndustries from "@/components/services/video-editing/VideoEditingIndustries";
import VideoEditingProcess from "@/components/services/video-editing/VideoEditingProcess";
import VideoEditingQuestionCard from "@/components/services/video-editing/VideoEditingQuestionCard";
import VideoEditingServices from "@/components/services/video-editing/VideoEditingServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <DigitalMarketingHero/>
        <Founder/>
        <DigitalMarketingServices/>
        <DigitalMarketingProcess/>
        <WebsiteDevelopmentStats/>
        <DigitalMarketingIndustries/>
        <OurTechnology/>
        <DigitalMarketingQuestionCard/>
        <DigitalMarketingGetInTouch/>
        <Footer/>
        </>
    )
}