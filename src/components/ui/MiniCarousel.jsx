import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Move } from "lucide-react"

const slides = [
  {
    icon: <Move size={26} />,
    title: "Parent Control Panel",
    desc: "Track meals, manage plans, and update preferences."
  },
  {
    icon: "🥗",
    title: "Healthy Meals",
    desc: "Fresh nutritious meals your child will actually enjoy."
  },
  {
    icon: "🚚",
    title: "Safe Delivery",
    desc: "Meals delivered securely only after QR verification."
  }
]

export default function MiniCarousel(){

  const [index,setIndex] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex(prev => (prev+1)%slides.length)
    },3500)
    return ()=>clearInterval(timer)
  },[])

  return(
    <div className="mt-10">

      {/* CONTENT ONLY */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{opacity:0,x:40}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-40}}
          transition={{duration:.45}}
          className="flex items-start gap-6"
        >

          {/* ICON */}
          <div className="mt-1 text-black">
            {slides[index].icon}
          </div>

          {/* DIVIDER */}
          <div className="w-[2px] h-14 bg-white/70"/>

          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="font-bold text-xl text-black">
              {slides[index].title}
            </h3>

            <p className="text-black/80 mt-1 leading-snug">
              {slides[index].desc}
            </p>
          </div>

        </motion.div>
      </AnimatePresence>


      {/* DOTS */}
      <div className="flex gap-3 mt-6 ml-10">
        {slides.map((_,i)=>(
          <button
            key={i}
            onClick={()=>setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all
              ${i===index ? "bg-white" : "bg-white/50"}
            `}
          />
        ))}
      </div>

    </div>
  )
}