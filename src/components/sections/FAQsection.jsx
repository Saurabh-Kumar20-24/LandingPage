import { useState } from "react";

const faqs = [
  {
    q: "How does the meal subscription work?",
    a: "We prepare fresh meals daily and deliver them directly to your child’s school."
  },
  {
    q: "Are all meals vegetarian?",
    a: "Yes, all meals are vegetarian and made with fresh ingredients."
  },
  {
    q: "Can I change or swap meals?",
    a: "Yes, you can customize meals anytime from your dashboard."
  },
  {
    q: "How do I know my child received the meal?",
    a: "You receive real-time delivery notifications once the meal is handed over."
  },
  {
    q: "What if my child has allergies?",
    a: "You can mention allergies while subscribing and we will customize meals."
  },
  {
    q: "Can I pause or modify the plan?",
    a: "Yes, you can pause or modify your plan anytime from your account settings."
  }
];

export default function FAQsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#f6f5f3] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <span className="bg-[#ece9e4] text-sm px-4 py-1 rounded-full inline-block mb-4">
          FAQs
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Got Questions? We’ve Got You Covered.
        </h1>

        <p className="text-gray-600 mb-12">
          Quick answers to the things parents ask most.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-2 border-black rounded-full overflow-hidden bg-white transition-all"
            >

              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium"
              >
                {i + 1}. {item.q}

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-6 text-gray-600 text-left transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                {item.a}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}