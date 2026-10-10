import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import GraphicDesignGetInTouch from "@/components/services/graphic-design/GraphicDesignGetInTouch";
import GraphicDesignHero from "@/components/services/graphic-design/GraphicDesignHero";
import GraphicDesignIndustries from "@/components/services/graphic-design/GraphicDesignIndustries";
import GraphicDesignProcess from "@/components/services/graphic-design/GraphicDesignProcess";
import GraphicDesignQuestionCard from "@/components/services/graphic-design/GraphicDesignQuestionCard";
import GraphicDesignServices from "@/components/services/graphic-design/GraphicDesignServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <GraphicDesignHero/>
        <Founder/>
        <GraphicDesignServices/>
        <GraphicDesignProcess/>
        <WebsiteDevelopmentStats/>
        <GraphicDesignIndustries/>
        <OurTechnology/>
        <GraphicDesignQuestionCard/>
        <GraphicDesignGetInTouch/>
        <Footer/>
        </>
    )
}