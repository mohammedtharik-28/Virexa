import AboutUsGetInTouch from "@/components/aboutUs/AboutUsGetInTouch";
import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import AboutUsInfo from "@/components/aboutUs/AboutUsInfo";
import AboutUsSolutions from "@/components/aboutUs/AboutUsSolutions";
import AboutUsVirexaAdvantage from "@/components/aboutUs/AboutUsVirexaAdvantage";
import AboutUsVirexaApproach from "@/components/aboutUs/AboutUsVirexaApproach";
import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";


export default function services(){
    return (
        <>
        <Navbar/>
        <AboutUsHero/>
        <AboutUsSolutions/>
        <AboutUsInfo/>
        <AboutUsVirexaApproach/>
        <Founder/>
        <AboutUsVirexaAdvantage/>
        <AboutUsGetInTouch/>
        <Footer/>
        </>
    )
}