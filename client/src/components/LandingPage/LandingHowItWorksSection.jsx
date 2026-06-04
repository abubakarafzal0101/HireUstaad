import React from "react";
import { FaStar } from "react-icons/fa";

const LandingHowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Search Karo",
      desc: "Type karein wo service jo aapko chahiye. Hum dikhayenge aapke area ke top rated Ustaads.",
    },
    {
      number: 2,
      title: "Profile Dekho",
      desc: "Pichlay customers ke reviews aur ratings check karein. Mukammal transparency.",
    },
    {
      number: 3,
      title: "Direct Connect",
      desc: "Direct call karein ya chat. Koi middle-man nahi, koi extra fees nahi.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="block w-full max-w-full py-16 md:py-24 bg-white overflow-hidden box-border clear-both"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 box-border">
        {/* Main 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full box-border">
          {/* 📝 Left Side: Content & Steps (Takes 7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full min-w-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              HireUstaad Kaise Kaam Karta Hai?
            </h2>

            {/* Vertical Steps List */}
            <div className="flex flex-col gap-8 w-full">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 md:gap-6 items-start w-full min-w-0"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-base md:text-lg shadow-md shadow-blue-600/10">
                    {step.number}
                  </div>

                  {/* Step Text Content */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🎨 Right Side: The Premium Mockup UI Card (Takes 5 Cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-w-0">
            {/* Soft Blue/Gray Background Container Box */}
            <div className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square bg-blue-50/70 border border-blue-100/50 rounded-[40px] flex items-center justify-center p-6 md:p-8 overflow-hidden shadow-inner">
              {/* Floating Profile Card (Tilted / Rotated precisely like the image) */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-4 transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500 ease-out select-none">
                {/* Header Row: Avatar & Verified Badge */}
                <div className="flex justify-between items-start w-full">
                  {/* Ustaad Avatar Image */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/20 bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
                      alt="Ustaad Riaz Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Verified Mint Badge */}
                  <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-2.5 py-1 rounded-lg uppercase tracking-wider scale-90">
                    Verified
                  </span>
                </div>

                {/* Info Text Block */}
                <div className="flex flex-col gap-0.5 text-left">
                  <h4 className="text-xl font-bold text-gray-800 tracking-tight">
                    Ustaad Riaz
                  </h4>
                  <p className="text-gray-500 text-xs font-medium">
                    Senior Electrician • 12 yrs exp
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-100" />

                {/* Footer Row: Stars & Action Call Button */}
                <div className="flex flex-col gap-4 w-full">
                  {/* 5 Golden Stars */}
                  <div className="flex gap-1 text-amber-500 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  {/* Call Now Action Button */}
                  <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-300 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/10">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHowItWorksSection;
