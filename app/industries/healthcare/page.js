import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import HealthcareDevelopmentProcess from "@/components/industries/healthcare/HealthcareDevelopmentProcess";
import HealthcareGetInTouch from "@/components/industries/healthcare/HealthcareGetInTouch";
import HealthcareHero from "@/components/industries/healthcare/HealthcareHero";
import HealthcareIndustryProblem from "@/components/industries/healthcare/HealthcareIndustryProblem";
import HealthcareQuestionCard from "@/components/industries/healthcare/HealthcareQuestionCard";
import HealthcareSolutions from "@/components/industries/healthcare/HealthcareSolutions";
import HealthcareWhyVirexa from "@/components/industries/healthcare/HealthcareWhyVirexa";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <HealthcareHero/>
        <Founder/>
        <HealthcareIndustryProblem/>
        <HealthcareSolutions/>
        <WebsiteDevelopmentStats/>
        <HealthcareWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <HealthcareDevelopmentProcess/>
        <HealthcareQuestionCard/>
        <HealthcareGetInTouch/>
        <Footer/>
        </>
    )
}