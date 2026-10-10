import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Navbar from "@/components/home/Navbar";
import OurTechnology from "@/components/home/OurTechnology";
import UiUxDesignGetInTouch from "@/components/services/ui-ux-design/UiUxDesignGetInTouch";
import UiUxDesignHero from "@/components/services/ui-ux-design/UiUxDesignHero";
import UiUxDesignIndustries from "@/components/services/ui-ux-design/UiUxDesignIndusries";
import UiUxDesignProcess from "@/components/services/ui-ux-design/UiUxDesignProcess";
import UiUxDesignQuestionCard from "@/components/services/ui-ux-design/UiUxDesignQuestionCard";
import UiUxDesignServices from "@/components/services/ui-ux-design/UiUxDesignServices";
import WebsiteDevelopmentStats from "@/components/services/website-development/WebsiteDevelopmentStats";



export default function services(){
    return (
        <>
        <Navbar/>
        <UiUxDesignHero/>
        <Founder/>
        <UiUxDesignServices/>
        <UiUxDesignProcess/>
        <WebsiteDevelopmentStats/>
        <UiUxDesignIndustries/>
        <OurTechnology/>
        <UiUxDesignQuestionCard/>
        <UiUxDesignGetInTouch/>
        <Footer/>
        </>
    )
}