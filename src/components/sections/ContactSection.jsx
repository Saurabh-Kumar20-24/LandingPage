import Wave from "../ui/Wave";

export default function ContactSection() {
  return (
<section id="contact" className="relative bg-[#dcdcdc] pt-20 pb-10 flex justify-center overflow-hidden">
  {/* <Wave position="top" flip color="#ffffff" /> */}
      {/* PAPER CONTAINER */}
      <div className="relative bg-[#e9e9e9] rounded-[30px] w-full max-w-6xl flex flex-col md:flex-row items-center gap-5 px-2 mb-20 py-3 shadow-lg

before:absolute before:-inset-3 before:bg-[#e9e9e9] before:rounded-[40px]
before:blur-[2px] before:opacity-80 before:-z-10

after:absolute after:-inset-1 after:rounded-[34px]
after:border after:border-dashed after:border-gray-400 after:opacity-60 after:-z-10
">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-start items-end relative">
  <img
    src="/assets/girl.png"
    alt="girl"
    className="w-[260px] ml-10 md:w-full translate-y-10 md:translate-y-5 object-contain"
  />
</div>

        {/* RIGHT FORM */}
        <div className="md:w-1/2 w-full">

          {/* HEADING */}
          <h2 className="text-4xl md:text-4xl font-extrabold text-black mb-3">
            We’re Here to Help
          </h2>

          <p className="text-gray-600 mb-8">
            Send us a message and our team will get back to you quickly.
          </p>

          {/* FORM */}
          <form className="space-y-4">

            {/* NAME */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 rounded-xl bg-[#f2f2f2] px-2 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid md:grid-cols-2 gap-3">

              <div>
                <label className="text-sm font-medium">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter your email id..."
                  className="w-full mt-2 rounded-xl bg-[#f2f2f2] px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number..."
                  className="w-full mt-2 rounded-xl bg-[#f2f2f2] px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                rows="4"
                placeholder="Your Message...."
                className="w-full mt-2 rounded-xl bg-[#f2f2f2] px-2 py-2 outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Submit →
            </button>

          </form>
        </div>

      </div>
      {/* BOTTOM WAVE */}
<div className="absolute bottom-0 left-0 w-full leading-none">
  <svg viewBox="0 0 1440 200" className="w-full h-[120px]" preserveAspectRatio="none">
    <path
      fill="#1f1f1f"
      d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,200L0,200Z"
    />
  </svg>
</div>
{/* <Wave color="#1f1f1f" /> */}
    </section>
  );
}