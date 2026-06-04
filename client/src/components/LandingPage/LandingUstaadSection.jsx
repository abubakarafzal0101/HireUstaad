import React from "react";

const LandingUstaadSection = () => {
  const ustaads = [
    {
      name: "Ustaad Riaz",
      role: "Senior Electrician",
      quote: `"HireUstaad ne mujhe online kaam milna aasan kar diya hai. Ab mujhe kisi shop par intezar nahi karna parta."`,
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Ustaad Tariq",
      role: "Master Plumber",
      quote: `"Ab customer direct raabta karta hai, bina kisi teesre bande ke commission ke. Ye asli azaadi hai."`,
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section
      id="our-ustaads"
      className="block w-full max-w-full py-16 md:py-24 bg-[#0B132B] overflow-hidden box-border clear-both"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 box-border">
        {/* Header Block: Title + Button Split */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center w-full mb-12 box-border">
          <div className="flex flex-col gap-2 min-w-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Humari Asli Taaqat — Humare Ustaad
            </h2>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Real log, real zindagi.
            </p>
          </div>

          {/* Become an Ustaad Button */}
          <button className="shrink-0 bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10 hover:border-white/20 transition-all px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide backdrop-blur-sm shadow-sm active:scale-95">
            Become an Ustaad
          </button>
        </div>

        {/* Ustaad Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full box-border">
          {ustaads.map((ustaad, index) => (
            <div
              key={index}
              className="group relative w-full h-[280px] sm:h-[350px] md:h-[380px] rounded-[32px] overflow-hidden border border-white/5 shadow-xl min-w-0 box-border"
            >
              {/* Card Background Image */}
              <img
                src={ustaad.image}
                alt={`${ustaad.name} working`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay (Gradient image ke upar text ko readable banata hai) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

              {/* Text Content Overlay Layer */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 text-left w-full box-border">
                {/* Name and Profession */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {ustaad.name},{" "}
                  <span className="text-gray-300 font-medium text-lg md:text-xl">
                    {ustaad.role}
                  </span>
                </h3>

                {/* Quote Text */}
                <p className="text-gray-300/90 text-sm md:text-base italic leading-relaxed mt-2 max-w-xl group-hover:text-white transition-colors duration-300">
                  {ustaad.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingUstaadSection;
