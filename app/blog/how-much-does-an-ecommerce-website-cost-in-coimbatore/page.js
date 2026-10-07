import Blog1QuestionCard from "@/components/blog/blog1/Blog1QuestionCard";
import Blog2Content from "@/components/blog/blog2/Blog2Content";
import Blog2QuestionCard from "@/components/blog/blog2/Blog2QuestionCard";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";


export default function services(){
    return (
        <>
        <Navbar/>
        <Blog2Content/>
        <Blog2QuestionCard/>
        <Footer/>
        </>
    )
}