import React from "react";

const LandingFounderSection = () => {
  return (
    <section
      id="our-mission"
      className="block w-full max-w-full py-16 md:py-24 bg-slate-50/30 overflow-hidden box-border clear-both"
    >
      {/* Outer White Card Wrapper with rounded corners precisely like image */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 box-border">
        <div className="relative w-full bg-white border border-gray-100 rounded-[32px] sm:rounded-[48px] p-8 md:p-16 lg:p-20 overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] box-border">
          {/* 🔮 Right-Side Soft Radial Backdrop Glow (Like the Mockup) */}
          <div className="absolute top-10 right-[-10%] w-72 h-72 md:w-[450px] md:h-[450px] bg-gradient-to-br from-slate-100 to-blue-50/40 rounded-full blur-[50px] md:blur-[80px] pointer-events-none -z-0" />

          {/* Core Content Block */}
          <div className="relative z-10 flex flex-col gap-6 md:gap-8 max-w-3xl w-full text-left min-w-0 box-border">
            {/* Main Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hum Koi Fancy Company Nahi Hain, Hum Aik Movement Hain!
            </h2>

            {/* Paragraphs Wrapper */}
            <div className="flex flex-col gap-5 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Doston, main koi bari company ka CEO nahi hoon, balkay aap ki
                tarah aik aam Pakistani hoon jo technology ke zariye apne mulk
                ke skilled workers ki life behtar banana chahta hai. Main ne
                dekha ke hamare ustaad (plumbers, electricians, mechanics) kitni
                mehnat karte hain, lekin unhein unka sahi muqam aur direct kaam
                nahi milta.
              </p>

              <p>
                Is platform ko main ne{" "}
                <span className="text-blue-600 font-bold">
                  MERN Stack Developer
                </span>{" "}
                hone ke naate khud code kiya hai aur hum ise 'Publicly' build
                kar rahe hain. Har feature, har upgrade aur har ustaad ka
                verification process hum aapke samne transparent rakhte hain.
              </p>

              <p className="text-slate-900 font-bold mt-2">
                Ye platform kisi foreign investment ke liye nahi, balkay
                Pakistan ke 40 Million workers ke liye banaya gaya hai. Hum se
                juden aur is digital inqilab ka hissa banein.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-slate-100 my-2" />

            {/* 👤 Founder Profile Widget */}
            <div className="flex items-center gap-4 min-w-0 w-full">
              {/* Avatar Initials Circle "HU" */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-base md:text-lg flex items-center justify-center tracking-wider shadow-inner">
                HU
              </div>

              {/* Identity Meta Text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                  Founder, HireUstaad
                </h4>
                <p className="text-slate-400 text-xs md:text-sm font-medium">
                  Full-Stack Developer & Visionary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFounderSection;
