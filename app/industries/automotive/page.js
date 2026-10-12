import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import AutomotiveDevelopmentProcess from "@/components/industries/automotive/AutomotiveDevelopmentProcess";
import AutomotiveGetInTouch from "@/components/industries/automotive/AutomotiveGetInTouch";
import AutomotiveHero from "@/components/industries/automotive/AutomotiveHero";
import AutomotiveIndustryProblem from "@/components/industries/automotive/AutomotiveIndustryProblem";
import AutomotiveQuestionCard from "@/components/industries/automotive/AutomotiveQuestionCard";
import AutomotiveSolutions from "@/components/industries/automotive/AutomotiveSolutions";
import AutomotiveWhyVirexa from "@/components/industries/automotive/AutomotiveWhyVirexa";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <AutomotiveHero/>
        <Founder/>
        <AutomotiveIndustryProblem/>
        <AutomotiveSolutions/>
        <WebsiteDevelopmentStats/>
        <AutomotiveWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <AutomotiveDevelopmentProcess/>
        <AutomotiveQuestionCard/>
        <AutomotiveGetInTouch/>
        <Footer/>
        </>
    )
}