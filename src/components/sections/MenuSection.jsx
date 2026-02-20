import { useState } from "react";
import { motion } from "framer-motion";
import MealsMenuPage from "./MealMenuPage";
 // adjust path as needed

const menus = [
  {
    title: "Little Explorers",
    age: "(6–8 yrs)",
    desc: "Simple, mild, happy meals for small appetites.",
    img: "/assets/boy1.png",
    bg: "bg-[#f4a000]",
  },
  {
    title: "Bright Movers",
    age: "(9–11 yrs)",
    desc: "Tasty combos and veggie-packed dishes.",
    img: "/assets/boy2.png",
    bg: "bg-[#f3d15c]",
  },
  {
    title: "Teen Power Pack",
    age: "(12–14 yrs)",
    desc: "Bigger portions and energy-boosting meals.",
    img: "/assets/boy3.png",
    bg: "bg-[#2f6f73]",
  },
];

export default function WeeklyMenu() {
  // null = show grid; index = show MealsMenuPage for that age group
  const [activePage, setActivePage] = useState(null);

  // ── Show the meals menu page ──────────────────────────────────
  if (activePage !== null) {
    return (
      <MealsMenuPage
        ageGroup={menus[activePage]}
        onBack={() => setActivePage(null)}
      />
    );
  }

  // ── Show the age-group grid ───────────────────────────────────
  return (
    <section id="menu" className="bg-[#f2efe9] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TAG */}
        <div className="flex justify-center">
          <div className="bg-white px-5 py-2 rounded-full shadow-sm text-sm font-medium flex items-center gap-2">
            🎁 This Weeks Menu
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mt-5">
          Meals Kids Actually Love
        </h2>

        {/* SUBTEXT */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Start by choosing your child&apos;s age group. We&apos;ll show you colorful,
          nutritious, and delicious. Each meal designed to delight taste buds
          and fuel growing minds.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {menus.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer text-center"
              onClick={() => setActivePage(i)}
            >
              {/* IMAGE WRAPPER — clickable */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative mx-auto w-[230px] h-[230px] rounded-full flex items-center justify-center ${item.bg}`}
                title={`View ${item.title} meals`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[180px] relative z-10"
                />

                {/* Hover overlay hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-full bg-black/15 flex items-center justify-center"
                >
                  <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    View Meals →
                  </span>
                </motion.div>
              </motion.div>

              {/* TITLE */}
              <h3 className="mt-8 text-xl font-bold">{item.title}</h3>

              {/* AGE */}
              <p className="font-semibold text-lg">{item.age}</p>

              {/* DESC */}
              <p className="mt-3 text-gray-600 text-sm max-w-[230px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
