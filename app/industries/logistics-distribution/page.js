import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import LogisticsDistributionHero from "@/components/industries/logistics-distribution/LogisticsDistributionHero";
import LogisticsDistributionIndustryProblem from "@/components/industries/logistics-distribution/LogisticsDistributionIndustryProblem";
import LogisticsDistributionDevelopmentProcess from "@/components/industries/logistics-distribution/LogisticsDistributionDevelopmentProcess";
import LogisticsDistributionSolutions from "@/components/industries/logistics-distribution/LogisticsDistributionSolutions";
import LogisticsDistributionWhyVirexa from "@/components/industries/logistics-distribution/LogisticsDistributionWhyVirexa";
import RetailEcommerceOurTechnology from "@/components/industries/retail-ecommerce/RetailEcommerceOurTechnology";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";
import LogisticsDistributionQuestionCard from "@/components/industries/logistics-distribution/LogisticsDistributionQuestionCard";
import LogisticsDistributionGetInTouch from "@/components/industries/logistics-distribution/LogisticsDistributionGetInTouch";


export default function services(){
    return (
        <>
        <Navbar/>
        <LogisticsDistributionHero/>
        <Founder/>
        <LogisticsDistributionIndustryProblem/>
        <LogisticsDistributionSolutions/>
        <WebsiteDevelopmentStats/>
        <LogisticsDistributionWhyVirexa/>
        <RetailEcommerceOurTechnology/>
        <LogisticsDistributionDevelopmentProcess/>
        <LogisticsDistributionQuestionCard/>
        <LogisticsDistributionGetInTouch/>
        <Footer/>
        </>
    )
}