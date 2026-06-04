import React, { useState } from "react";
import { motion } from "motion/react";

export default function LandingCTAFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    role: "Customer (Looking for service)",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.phone) {
      alert("Please fill out all fields.");
      return;
    }

    // WhatsApp Configuration (Converting 03296042791 to international format 923296042791)
    const phoneNumber = "923296042791";

    // Message template
    const message =
      `*New Lead from Digital Pakistan Landing Page*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `💼 *Join As:* ${formData.role}`;

    // URL encoding for WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="join-waitlist"
      className="bg-[#0056f5] min-h-[600px] flex items-center justify-center px-6 py-16 md:py-24 font-sans selection:bg-white selection:text-[#0056f5]"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white space-y-6 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            Kya Aap Aik Behtar Aur Digital Pakistan Ke Liye Tayyar Hain?
          </h1>

          <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
            Limited slots available for the first alpha batch of users and
            ustaads. Secure your spot now and be among the first to experience
            the future of home services.
          </p>

          {/* Social Proof / Avatars */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <span className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm block"></span>
              <span className="w-10 h-10 rounded-full bg-white/40 border border-white/30 backdrop-blur-sm block"></span>
              <span className="w-10 h-10 rounded-full bg-white/60 border border-white/30 backdrop-blur-sm block"></span>
            </div>
            <p className="text-sm md:text-base font-medium text-white">
              +500 people joined this week
            </p>
          </div>
        </motion.div>

        {/* Right Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 w-full max-w-[540px] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-[#333333] font-medium text-sm block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056f5] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800 text-sm md:text-base"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label className="text-[#333333] font-medium text-sm block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 XXX XXXXXXX"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056f5] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800 text-sm md:text-base"
                  required
                />
              </div>

              {/* Dropdown Field */}
              <div className="space-y-2">
                <label className="text-[#333333] font-medium text-sm block">
                  Join as a:
                </label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056f5] focus:border-transparent transition-all text-gray-700 text-sm md:text-base appearance-none bg-white cursor-pointer"
                  >
                    <option value="Customer (Looking for service)">
                      Customer (Looking for service)
                    </option>
                    <option value="Ustaad (Service Provider)">
                      Ustaad (Service Provider)
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0056f5] text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-[#0046d1] transition-colors text-base tracking-wide mt-4"
              >
                Secure My Spot Now
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
