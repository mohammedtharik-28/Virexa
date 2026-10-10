import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
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
        <VideoEditingHero/>
        <Founder/>
        <VideoEditingServices/>
        <VideoEditingProcess/>
        <WebsiteDevelopmentStats/>
        <VideoEditingIndustries/>
        <OurTechnology/>
        <VideoEditingQuestionCard/>
        <VideoEditingGetInTouch/>
        <Footer/>
        </>
    )
}