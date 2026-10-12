import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import FoodDevelopmentProcess from "@/components/industries/food-restaurant/FoodDevelopmentProcess";
import FoodGetInTouch from "@/components/industries/food-restaurant/FoodGetInTouch";
import FoodHero from "@/components/industries/food-restaurant/FoodHero";
import FoodIndustryProblem from "@/components/industries/food-restaurant/FoodIndustryProblem";
import FoodQuestionCard from "@/components/industries/food-restaurant/FoodQuestionCard";
import FoodSolutions from "@/components/industries/food-restaurant/FoodSolutions";
import FoodWhyVirexa from "@/components/industries/food-restaurant/FoodWhyVirexa";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";


export default function services(){
    return (
        <>
        <Navbar/>
        <FoodHero/>
        <Founder/>
        <FoodIndustryProblem/>
        <FoodSolutions/>
        <WebsiteDevelopmentStats/>
        <FoodWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <FoodDevelopmentProcess/>
        <FoodQuestionCard/>
        <FoodGetInTouch/>
        <Footer/>
        </>
    )
}