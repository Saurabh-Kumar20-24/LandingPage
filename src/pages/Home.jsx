import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"
import Hero from "../components/sections/Hero"
import Features from "../components/sections/FeatureSection"
import Pricing from "../components/sections/PricingSection"
import MenuSection from "../components/sections/MenuSection"
// import WeeklyMenu from "../components/sections/WeeklyMenu"
import FeatureSection from "../components/sections/FeatureSection"
import PricingSection from "../components/sections/PricingSection"
import TestimonialSection from "../components/sections/TestimonialSection"
import FAQsection from "../components/sections/FAQsection"
import ContactSection from "../components/sections/ContactSection"

export default function Home(){
  return(
    <>
      {/* <Navbar/> */}
      <Hero/>
      <MenuSection/>
      {/* <WeeklyMenu/> */}
      <FeatureSection/>
      <PricingSection/>
      <TestimonialSection/>
      <FAQsection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}