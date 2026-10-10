import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import RetailEcommerceHero from "@/components/industries/retail-ecommerce/RetailEcommerceHero";
import RetailEcommerceIndustryProblem from "@/components/industries/retail-ecommerce/RetailEcommerceIndustryProblem";
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
        <OurTechnology/>
        <Footer/>
        </>
    )
}