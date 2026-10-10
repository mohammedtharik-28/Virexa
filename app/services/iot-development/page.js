import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import IotDevelopmentGetInTouch from "@/components/services/iot-development/IotDevelopmentGetInTouch";
import IotDevelopmentHero from "@/components/services/iot-development/IotDevelopmentHero";
import IotDevelopmentIndustries from "@/components/services/iot-development/IotDevelopmentIndustries";
import IotDevelopmentProcess from "@/components/services/iot-development/IotDevelopmentProcess";
import IotDevelopmentQuestionCard from "@/components/services/iot-development/IotDevelopmentQuestionCard";
import IotDevelopmentServices from "@/components/services/iot-development/IotDevelopmentServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <IotDevelopmentHero/>
        <Founder/>
        <IotDevelopmentServices/>
        <IotDevelopmentProcess/>
        <WebsiteDevelopmentStats/>
        <IotDevelopmentIndustries/>
        <OurTechnology/>
        <IotDevelopmentQuestionCard/>
        <IotDevelopmentGetInTouch/>
        <Footer/>
        </>
    )
}