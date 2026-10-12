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
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <RetailEcommerceHero/>
        <Founder/>
        <RetailEcommerceIndustryProblem/>
        <RetailEcommerceSolutions/>
        <WebsiteDevelopmentStats/>
        <RetailEcommerceWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <RetailEcommerceDevelopmentProcess/>
        <RetailEcommerceQuestionCard/>
        <RetailEcommerceGetInTouch/>
        <Footer/>
        </>
    )
}