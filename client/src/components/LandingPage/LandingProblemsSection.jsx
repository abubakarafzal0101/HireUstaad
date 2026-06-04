import { FiAlertTriangle, FiClock, FiShield } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";

const LandingProblemsSection = () => {
  const problems = [
    {
      icon: <FiClock className="text-2xl md:text-3xl text-amber-500" />,
      title: "Hours of Time Waste",
      desc: "Ghar ka nal kharab ho ya short circuit, market ja kar plumber ya electrician dhundne mein ghanton zaya hotay hain.",
      badge: "Slow Process",
    },
    {
      icon: <HiOutlineDocumentReport className="text-3xl text-rose-500" />,
      title: "No Fixed Pricing",
      desc: "Kaam khatam honay ke baad man-marzi ke rates mangay jate hain. Koi standard rate card na honay ki wajah se aksar loot-maar hoti hai.",
      badge: "Hidden Charges",
    },
    {
      icon: <FiShield className="text-2xl md:text-3xl text-red-500" />,
      title: "Security & Trust Issues",
      desc: "Kisi bhi anjan worker ko bagair verification ke ghar ke andar bulana family ke liye aik bohot bada security risk hai.",
      badge: "High Risk",
    },
    {
      icon: (
        <FiAlertTriangle className="text-2xl md:text-3xl text-orange-500" />
      ),
      title: "Unprofessional Behavior",
      desc: "Worker bol kar nahi aate, phone band kar lete hain, ya phir kaam adhoora chodh kar gayab ho jate hain.",
      badge: "Unreliable",
    },
  ];

  return (
    // ✨ FIX 1: max-w-full aur forced overflow-hidden lagaya hai taake screen width leak na ho
    <section
      id="problem"
      className="block w-full max-w-full py-16 md:py-24 bg-slate-50/50 overflow-hidden box-border clear-both"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 box-border">
        {/* 🔮 FIX 2: Background Glows ko wrapper bound ke andar percentage scale par set kiya taake overflow zero ho jaye */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-rose-200/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10 translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-amber-200/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10 -translate-x-10 translate-y-10" />

        <div className="flex flex-col items-center gap-10 md:gap-16 relative z-10 w-full">
          {/* Header Text Block */}
          <div className="flex flex-col items-center text-center gap-4 w-full max-w-3xl mx-auto">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-rose-600 uppercase bg-rose-50 border border-rose-100 px-3 py-1 rounded-md inline-block">
              The Reality
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight w-full">
              Wo Masly Jo Hum Sab <br className="hidden sm:block" />
              <span className="text-rose-600 font-black">Face Krty Hai!</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Pakistan mein kisi local services professional ko dhundna aur unpe
              trust karna aik azaab ban chuka hai. Hum inhi roz marra ke maslon
              ko khatam kar rahe hain.
            </p>
          </div>

          {/* Problems Responsive Grid */}
          {/* ✨ FIX 3: grid-cols-1 lagaya hai aur md size par exact fractional 2 columns split kiye hain min-w-0 safety ke sath */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full box-border">
            {problems.map((prob, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 min-w-0 w-full box-border"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 p-4 bg-slate-50 rounded-2xl group-hover:bg-rose-50 group-hover:scale-110 transition-all duration-300 shadow-sm flex items-center justify-center">
                  {prob.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2 min-w-0 w-full">
                  <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight truncate sm:whitespace-normal">
                      {prob.title}
                    </h3>
                    <span className="text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-gray-400 border border-slate-200 uppercase tracking-widest shrink-0">
                      {prob.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">
                    {prob.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProblemsSection;
