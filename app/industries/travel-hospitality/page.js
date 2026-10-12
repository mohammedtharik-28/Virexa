import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import RetailEcommerceDevelopmentProcess from "@/components/industries/retail-ecommerce/RetailEcommerceDevelopmentProcess";
import RetailEcommerceGetInTouch from "@/components/industries/retail-ecommerce/RetailEcommerceGetInTouch";
import RetailEcommerceHero from "@/components/industries/retail-ecommerce/RetailEcommerceHero";
import RetailEcommerceIndustryProblem from "@/components/industries/retail-ecommerce/RetailEcommerceIndustryProblem";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import RetailEcommerceQuestionCard from "@/components/industries/retail-ecommerce/RetailEcommerceQuestionCard";
import RetailEcommerceSolutions from "@/components/industries/retail-ecommerce/RetailEcommerceSolutions";
import RetailEcommerceWhyVirexa from "@/components/industries/retail-ecommerce/RetailEcommerceWhyVirexa";
import TravelDevelopmentProcess from "@/components/industries/travel-hospitality/TravelDevelopmentProcess";
import TravelGetInTouch from "@/components/industries/travel-hospitality/TravelGetInTouch";
import TravelHero from "@/components/industries/travel-hospitality/TravelHero";
import TravelIndustryProblem from "@/components/industries/travel-hospitality/TravelIndustryProblem";
import TravelQuestionCard from "@/components/industries/travel-hospitality/TravelQuestionCard";
import TravelSolutions from "@/components/industries/travel-hospitality/TravelSolutions";
import TravelWhyVirexa from "@/components/industries/travel-hospitality/TravelWhyVirexa";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <TravelHero/>
        <Founder/>
        <TravelIndustryProblem/>
        <TravelSolutions/>
        <WebsiteDevelopmentStats/>
        <TravelWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <TravelDevelopmentProcess/>
        <TravelQuestionCard/>
        <TravelGetInTouch/>
        <Footer/>
        </>
    )
}