import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import EducationDevelopmentProcess from "@/components/industries/education-e-learning/EducationDevelopmentProcess";
import EducationGetInTouch from "@/components/industries/education-e-learning/EducationGetInTouch";
import EducationHero from "@/components/industries/education-e-learning/EducationHero";
import EducationIndustryProblem from "@/components/industries/education-e-learning/EducationIndustryProblem";
import EducationQuestionCard from "@/components/industries/education-e-learning/EducationQuestionCard";
import EducationSolutions from "@/components/industries/education-e-learning/EducationSolutions";
import EducationWhyVirexa from "@/components/industries/education-e-learning/EducationWhyVirexa";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <EducationHero/>
        <Founder/>
        <EducationIndustryProblem/>
        <EducationSolutions/>
        <WebsiteDevelopmentStats/>
        <EducationWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <EducationDevelopmentProcess/>
        <EducationQuestionCard/>
        <EducationGetInTouch/>
        <Footer/>
        </>
    )
}