import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import  FeaturedCourses  from "@/components/FeaturedCourses";
import {WhyChooseUs}  from "@/components/WhyChooseUs";
import { TestimonialCards } from "@/components/TestimonialCards";
import { Instructors } from "@/components/Instructors";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"/>
        
      <Navbar />
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <Instructors />
      <Footer />
    </div>
  );
}
