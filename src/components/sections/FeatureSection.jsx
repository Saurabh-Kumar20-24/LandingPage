export default function FeatureSection({ image }) {
  return (
    <section className="relative bg-[#f3f3f3] overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6 md:px-12 py-15">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="inline-block bg-white px-5 py-2 rounded-full text-sm shadow-sm mb-6">
            Why Choose Us
          </div>

          {/* HEADING */}
          <h2 className="text-5xl font-extrabold leading-[1.1]">
            Healthy Meals. Safe
            <br />
            Delivery. Zero
            <br />
            Guesswork.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            We make mealtime fun for kids and stress-free for parents. Every box is
            packed with fresh veggies, clean cooking, and safe delivery—so children eat
            well and parents feel relaxed.
          </p>


          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-10 text-[15px]">

            <Feature icon="😊" text="Super-Nutritious Meals" />
            <Feature icon="✨" text="Sparkling-Clean Kitchens" />
            <Feature icon="📦" text="Safe, Verified Delivery" />
            <Feature icon="📅" text="Flexible Meal Plans" />

          </div>


          {/* BUTTON */}
          <button className="mt-12 bg-black text-white px-7 py-4 rounded-xl shadow-md hover:scale-105 transition">
            Know More... →
          </button>

        </div>



        {/* RIGHT IMAGE SLOT */}
        <div className="relative flex justify-center md:justify-end">

          <img
            src="/public/assets/featureimg.jpg"
            alt="Meal Box"
            className="w-[420px] md:w-[560px] drop-shadow-2xl"
          />

        </div>

      </div>



      {/* CURVED BOTTOM SHAPE */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        fill="none"
      >
        <path
          d="M0 60C240 140 480 140 720 80C960 20 1200 20 1440 80V150H0V60Z"
          fill="#ded9d3"
        />
      </svg>

    </section>
  );
}



/* SMALL FEATURE ITEM */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <p className="font-medium">{text}</p>
    </div>
  );
}