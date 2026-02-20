import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"
import MiniCarousel from "../ui/MiniCarousel"
import Navbar from "../layouts/Navbar"

export default function Hero() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(()=>{
    const move = e=>{
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove",move)
    return ()=>window.removeEventListener("mousemove",move)
  },[])

  // responsive safe ranges
  const slowX = useTransform(x,[0,1000],[-20,20])
  const slowY = useTransform(y,[0,800],[-20,20])

  const midX = useTransform(x,[0,1000],[-40,40])
  const midY = useTransform(y,[0,800],[-40,40])

  const fastX = useTransform(x,[0,1000],[-70,70])
  const fastY = useTransform(y,[0,800],[-70,70])

  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  })
}

  return(
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-500">

      <Navbar/>

      {/* FLOATING ITEMS */}
      <ParallaxImg src="/assets/leaf.png" style={{x:slowX,y:slowY}} className="top-24 left-10 md:left-40 w-8 md:w-10"/>
      <ParallaxImg src="/assets/brocalli.png" style={{x:midX,y:midY}} className="top-40 left-0 w-20 md:w-32"/>
      <ParallaxImg src="/assets/tomato.png" style={{x:fastX,y:fastY}} className="bottom-24 left-10 md:left-20 w-16 md:w-24"/>
      <ParallaxImg src="/assets/tomato.png" style={{x:midX,y:midY}} className="top-28 right-10 md:right-28 w-20 md:w-28"/>
      <ParallaxImg src="/assets/brocalli.png" style={{x:slowX,y:slowY}} className="top-64 right-2 md:right-10 w-14 md:w-20"/>
      <ParallaxImg src="/assets/walnut.png" style={{x:fastX,y:fastY}} className="bottom-10 left-[40%] w-16 md:w-24"/>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center px-6 md:px-12 lg:px-24 pt-32 pb-16">

        {/* LEFT TEXT */}
        <div className="text-white text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Good Food. Happy <br className="hidden md:block"/>
            Kids. Zero Worry.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl mx-auto md:mx-0">
            We cook fresh vegetarian meals and deliver them straight to your
            child's school or hostel. You get transparency, safety, and meals
            they'll actually finish.
          </p>

          <div className="mt-8">
            <MiniCarousel/>
          </div>

          <button onClick={() => scrollToSection("menu")} className="mt-10 bg-white text-black px-7 py-4 rounded-tr-2xl rounded-bl-2xl font-semibold shadow hover:bg-black hover:text-white transition">
            Book Your Kid Meal Now →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-12 md:mt-0">
          <img
            src="/assets/boyimage.png"
            className="w-72 sm:w-96 lg:w-[520px] relative z-10"
          />
        </div>

      </div>
      {/* BOTTOM WAVE */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-[120px] md:h-[160px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#f2efe9"  // match next section bg color
      d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,200L0,200Z"
    />
  </svg>
</div>
    </section>
  )
}


function ParallaxImg({src,style,className}){
  return(
    <motion.img
      src={src}
      style={style}
      animate={{y:[-10,10,-10]}}
      transition={{duration:6,repeat:Infinity}}
      className={`absolute pointer-events-none ${className}`}
    />
  )
}