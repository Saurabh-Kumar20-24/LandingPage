import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  })
}

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 py-4">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <img src="/assets/websitelogo.png" className="w-16 md:w-20" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">

          <button
  className="text-white font-medium hover:text-black transition"
>
  Home
</button>

          <button
  onClick={() => scrollToSection("pricing")}
  className="text-white font-medium hover:text-black transition"
>
  Pricing
</button>

<button
  onClick={() => scrollToSection("contact")}
  className="text-white font-medium hover:text-black transition"
>
  Contact
</button>

<button
  onClick={() => scrollToSection("about")}
  className="text-white font-medium hover:text-black transition"
>
  About
</button>

          <button  onClick={() => scrollToSection("pricing")} className="bg-white text-black px-6 py-3 rounded-tr-2xl rounded-bl-2xl font-semibold shadow hover:bg-black hover:text-white transition">
            Book Now →
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 mt-6" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-5 bg-white/90 backdrop-blur rounded-2xl p-6 text-center">

          

          <button
  
  className="text-gray-800 font-medium hover:text-yellow-500 transition"
>
  Home
</button>
          <button
  onClick={() => scrollToSection("pricing")}
  className="text-gray-800 font-medium hover:text-yellow-500 transition"
>
  Pricing
</button>

<button
  onClick={() => scrollToSection("contact")}
  className="text-gray-800 font-medium hover:text-yellow-500 transition"
>
  Contact
</button>

<button
  onClick={() => scrollToSection("about")}
className="text-gray-800 font-medium hover:text-yellow-500 transition">
  About
</button>

          <button className="text-gray-800 font-medium hover:text-yellow-500 transition">
            Book Now →
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar