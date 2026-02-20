

export default function PricingSection() {
  const plans = [
    {
      title: "Daily Plan",
      tag: "Flexible",
      price: "₹2,800",
      meals: "20 meals/week",
      highlight: false,
      tagColor: "bg-orange-400",
    },
    {
      title: "Weekly Plan",
      tag: "Best Value",
      price: "₹850",
      meals: "5 meals/week",
      highlight: true,
      tagColor: "bg-green-400",
    },
    {
      title: "Monthly Plan",
      tag: "Best Value",
      price: "₹2,800",
      meals: "20 meals/week",
      highlight: false,
      tagColor: "bg-purple-400",
    },
  ];

  return (
    <section id='pricing' className="relative bg-[#ded9d3] pt-10 pb-40 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-12 px-4">
        <span className="bg-white px-5 py-1 rounded-full text-sm shadow">
          Pricing
        </span>

        <h2 className="text-4xl font-bold mt-6">
          Simple Plans. Fresh Meals.
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Pick a plan that fits your child's routine. Every option comes with
          fresh vegetarian meals, meal tracking, and complete delivery safety.
        </p>
      </div>

      {/* CARD WRAPPER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#efefef] rounded-[30px] shadow-xl p-8 grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
  <div key={i} className="relative group flex justify-center">

    {/* FLOATING BOWL IMAGE */}
    <img
      src="/assets/bowl.png"
      alt=""
      className="
        absolute
        -top-16
        w-72
        opacity-0
        translate-y-10
        scale-90
        transition-all
        duration-500
        ease-out
        pointer-events-none
        group-hover:opacity-100
        group-hover:translate-y-0
        group-hover:scale-150
        z-0
      "
    />

    {/* CARD */}
    <div
      className={`
      relative z-10 w-full
      rounded-3xl p-8 text-center transition duration-500 transform
      hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl
      ${plan.highlight
        ? "bg-gradient-to-b from-black to-zinc-800 text-white border-[3px] border-black"
        : "bg-gray-200"}
      `}
    >

      {/* TAG */}
      <span
        className={`
        absolute -top-4 left-1/2 -translate-x-1/2
        text-white text-sm px-4 py-1 rounded-full shadow-md
        ${plan.tagColor}
        `}
      >
        {plan.tag}
      </span>

      {/* TITLE */}
      <h3 className="text-2xl font-bold mt-4">{plan.title}</h3>

      <p className="text-sm mt-2 opacity-80">
        Most popular among parents
      </p>

      {/* PRICE BOX */}
      <div
        className={`
        mt-6 rounded-xl py-6 text-2xl font-bold
        ${plan.highlight
          ? "bg-gray-200 text-black"
          : "bg-black text-white"}
        `}
      >
        {plan.price}
        <p className="text-sm mt-1 font-normal">{plan.meals}</p>
      </div>

      {/* FEATURES */}
      <ul className="mt-6 space-y-3 text-sm text-left max-w-[200px] mx-auto">
        <li>✔ All Daily Plan features</li>
        <li>✔ Save ₹100/week</li>
        <li>✔ Meal customization</li>
        <li>✔ Priority support</li>
        <li>✔ Nutrition tracking</li>
      </ul>

      {/* BUTTON */}
      <button
        className={`
        mt-8 w-full py-3 rounded-xl font-semibold transition
        ${plan.highlight
          ? "bg-white text-black hover:bg-gray-200"
          : "bg-black text-white hover:bg-gray-800"}
        `}
      >
        Subscribe Now
      </button>

    </div>
  </div>
))}
</div>
</div>
      {/* WAVE BOTTOM */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-[160px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,200L0,200Z"
    />
  </svg>
</div>
{/* <Wave color="#ffffff" /> */}
    </section>
  );
}