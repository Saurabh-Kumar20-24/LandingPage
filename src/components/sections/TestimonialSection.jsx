import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "His lunchbox finally comes home empty.",
    desc: "My son actually finishes his meals now, and I get delivery alerts.",
    name: "Ritu",
    role: "Parent of Grade 4",
    img: "/assets/boy.png",
  },
  {
    id: 2,
    quote: "Healthy food my daughter loves!",
    desc: "She used to skip meals, now she waits for lunch time.",
    name: "Anjali",
    role: "Parent of Grade 2",
    img: "/assets/boy.png",
  },
  {
    id: 3,
    quote: "Perfect for busy mornings.",
    desc: "No more packing lunch stress. Meals are fresh and safe.",
    name: "Rahul",
    role: "Parent of Grade 5",
    img: "/assets/boy.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const t = testimonials[index];

  return (
    <section id="about" className="relative  pt-40 pb-32 overflow-hidden bg-white">

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 200" className="w-full h-[160px]" preserveAspectRatio="none">
          <path
            fill="#ded9d3"
            d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* BG IMAGE */}
      <img
        src="/assets/testimonial.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="relative">

          {/* TRAPEZIUM */}
          <div
            className="bg-[#efefef] shadow-2xl px-10 py-16 text-center"
            style={{
              clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
              borderRadius: "40px",
            }}
          >
            {/* LABEL */}
            <span className="bg-white text-sm px-5 py-1 rounded-full shadow">
              Testimonial
            </span>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-extrabold mt-6">
              Parents Trust Us. Kids Love Us.
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-600 mt-3">
              Real stories from families who use Nourished every day.
            </p>

            {/* QUOTE CAROUSEL */}
            <div className="mt-10 relative min-h-[140px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg md:text-xl font-medium">
                    “{t.quote}”
                  </p>

                  <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                    {t.desc}
                  </p>

                  <div className="w-24 h-[1px] bg-gray-300 mx-auto mt-6" />

                  {/* USER */}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <img
                      src={t.img}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* ARROWS */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-black text-white hover:scale-110 transition"
              >
                →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}