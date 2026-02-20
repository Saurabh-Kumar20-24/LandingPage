import React from 'react'
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PricingSection from './components/sections/PricingSection'
import ContactSection from './components/sections/ContactSection'
import TestimonialSection from './components/sections/TestimonialSection'

const App = () => {
  return (
    <Home/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/pricing" element={<PricingSection />} />
    //     <Route path="/contact" element={<ContactSection />} />
    //     <Route path="/about" element={<TestimonialSection />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
