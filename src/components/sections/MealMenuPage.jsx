import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ALL_MEALS = [
  {
    id: 1,
    name: "Golden Dal & Rice",
    desc: "Fresh dal, turmeric rice, papad",
    tag: "Comfort food",
    bg: "#f4c14f",          // warm yellow
    imgBg: "#f4c14f",
    emoji: "🍛",
  },
  {
    id: 2,
    name: "Mexican Bean Fiesta",
    desc: "Black beans, corn, guacamole",
    tag: "Fun & Tasty",
    bg: "#b07245",          // warm brown
    imgBg: "#b07245",
    emoji: "🌮",
  },
  {
    id: 3,
    name: "Green Veggie Pizza",
    desc: "Multigrain base, fresh toppings",
    tag: "Crowd Favourite",
    bg: "#7bbf6a",          // fresh green
    imgBg: "#7bbf6a",
    emoji: "🍕",
  },
  {
    id: 4,
    name: "Butter Chicken Bowl",
    desc: "Creamy tomato gravy, jeera rice",
    tag: "Kids Favourite",
    bg: "#e8956d",
    imgBg: "#e8956d",
    emoji: "🍗",
  },
  {
    id: 5,
    name: "Rainbow Pasta",
    desc: "Tri-colour pasta, hidden veggies",
    tag: "Fun & Tasty",
    bg: "#9b72cf",
    imgBg: "#9b72cf",
    emoji: "🍝",
  },
  {
    id: 6,
    name: "Paneer Wrap",
    desc: "Grilled paneer, mint chutney, roti",
    tag: "Comfort food",
    bg: "#5fa8d3",
    imgBg: "#5fa8d3",
    emoji: "🫔",
  },
];

// const navigate = useNavigate()

// ─── Food Image Placeholder (emoji-based since no real assets) ────────────────
function FoodImage({ emoji, bg }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: bg }}
    >
      <span style={{ fontSize: "110px", lineHeight: 1 }}>{emoji}</span>
    </div>
  );
}

// ─── Single Meal Card ─────────────────────────────────────────────────────────
function MealCard({ meal, size = "center" }) {
  const isCenter = size === "center";

  return (
    <motion.div
      layout
      className="relative rounded-3xl overflow-hidden flex flex-col cursor-pointer select-none"
      style={{
        backgroundColor: meal.bg,
        width: isCenter ? "320px" : "270px",
        height: isCenter ? "420px" : "370px",
        flexShrink: 0,
      }}
      whileHover={{ y: isCenter ? -6 : -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Tag pill */}
      <div className="absolute top-4 right-4 z-10 bg-white rounded-full px-4 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
        {meal.tag}
      </div>

      {/* Food image area — takes ~70% height */}
      <div className="relative overflow-hidden" style={{ height: isCenter ? "300px" : "260px" }}>
        <FoodImage emoji={meal.emoji} bg={meal.bg} />
      </div>

      {/* Info white card at bottom */}
      <div className="bg-white mx-3 mb-3 rounded-2xl px-5 py-4 flex-1 flex flex-col justify-center">
        <h3 className="font-extrabold text-gray-900" style={{ fontSize: isCenter ? "20px" : "17px" }}>
          {meal.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{meal.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Main MealsMenuPage ───────────────────────────────────────────────────────
export default function MealsMenuPage({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = ALL_MEALS.length;

  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const next = () => setCurrentIndex((i) => (i + 1) % total);

  // Show 3 cards: left, center, right
  const getVisible = () => {
    const left  = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getVisible();

  return (
    <section className="min-h-screen py-20 px-4" style={{ backgroundColor: "#f2efe9" }}>
      <div className="max-w-7xl mx-auto">

        {/* Back button
        {onBack && (
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>
        )} */}

        {/* TAG */}
        <div className="flex justify-center">
          <div className="bg-white px-5 py-2 rounded-full shadow-sm text-sm font-medium flex items-center gap-2 text-gray-700">
            🎁 This Weeks Menu
          </div>
        </div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-extrabold text-gray-900 mt-5"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Meals Kids Actually Love
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed text-base"
        >
          Start by choosing your child&apos;s age group. We&apos;ll show you colorful,
          nutritious, and delicious. Each meal designed to delight taste buds
          and fuel growing minds.
        </motion.p>

        {/* ── CAROUSEL ───────────────────────────────────────────────── */}
        <div className="relative mt-16 flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            style={{ left: "clamp(0px, 3vw, 40px)" }}
          >
            <span className="text-lg">←</span>
          </button>

          {/* CARDS ROW */}
          <div className="flex items-center justify-center gap-5" style={{ minHeight: "440px" }}>

            {/* LEFT card — slightly smaller, peeking */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`left-${leftIdx}`}
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={{ opacity: 0.85, x: 0, scale: 0.95 }}
                exit={{ opacity: 0, x: -40, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <MealCard meal={ALL_MEALS[leftIdx]} size="side" />
              </motion.div>
            </AnimatePresence>

            {/* CENTER card — full size, elevated */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`center-${centerIdx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                style={{ zIndex: 10 }}
              >
                <MealCard meal={ALL_MEALS[centerIdx]} size="center" />
              </motion.div>
            </AnimatePresence>

            {/* RIGHT card */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`right-${rightIdx}`}
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 0.85, x: 0, scale: 0.95 }}
                exit={{ opacity: 0, x: 40, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <MealCard meal={ALL_MEALS[rightIdx]} size="side" />
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 z-20 w-11 h-11 bg-gray-900 text-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            style={{ right: "clamp(0px, 3vw, 40px)" }}
          >
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* ── DOT INDICATORS ─────────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-8">
          {ALL_MEALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="rounded-full transition-all"
              style={{
                width: i === currentIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === currentIndex ? "#1a1a1a" : "#ccc",
              }}
            />
          ))}
        </div>

        {/* ── BOTTOM BUTTONS ─────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
             onClick={onBack}
            className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-gray-900 hover:text-white transition-colors"
          >
            Select Age →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-gray-700 transition-colors"
          >
            See The Menu →
          </motion.button>
        </div>

      </div>
    </section>
  );
}