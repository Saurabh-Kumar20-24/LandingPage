export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 200" className="w-full h-[120px]" preserveAspectRatio="none">
          <path
            fill="#1f1f1f"
            d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-gradient-to-r from-[#1f1f1f] via-[#232323] to-[#2b2b2b] pt-30 pb-10 px-36">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-2">

          {/* BRAND */}
          <div>
            <img src="/assets/websitelogo.png" className="w-20 mb-6" />

            <p className="text-gray-300 leading-relaxed text-sm">
              Fresh, vegetarian meals designed for growing kids. Delivered daily
              with safety, nutrition, and parent transparency at the core
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-lg cursor-pointer hover:scale-110 transition">
                f
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-lg cursor-pointer hover:scale-110 transition">
                ◎
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-lg cursor-pointer hover:scale-110 transition">
                X
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Weekly Menu</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Locations We Serve</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Schools</li>
              <li>Hostels</li>
              <li>Learning Centers</li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Address</h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Nourished Foods Pvt. Ltd.
              <br />
              Plot No. 24, Evergreen Towers, 5th Floor,
              <br />
              Hitech City, Hyderabad, Telangana – 500081
            </p>

            <p className="mt-4 text-sm text-gray-300">
              Email: support@nourished.com
            </p>

            <p className="text-sm text-gray-300">
              Phone: +91 XXXXXXXXXX
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-600 mt-4 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <p>Copyright © 2025 | Nourished</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>

        </div>
      </div>
    </footer>
  );
}