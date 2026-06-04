import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TbHomeCheck } from "react-icons/tb";
import { FaInstagram, FaYoutube, FaVideo, FaPaperPlane } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0056f5] rounded-md flex items-center justify-center">
                <TbHomeCheck size={18} color="#fff" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">HireUstaad</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
              HireUstaad — Pakistan ka apna local home services marketplace.
              Built with 🛠️ in Pakistan.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaVideo />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          {/* Links Section - Using Router Dom */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-900">Links</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#0056f5] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-[#0056f5] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-[#0056f5] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#0056f5] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section - Plain Text/Simple Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-900">Services</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="cursor-default">Plumbing</li>
              <li className="cursor-default">Electrical</li>
              <li className="cursor-default">Carpentry</li>
              <li className="cursor-default">AC Repairing</li>
            </ul>
          </div>

          {/* Stay Updated Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Get the latest updates on Pakistan's service economy.
            </p>
            <div className="flex bg-[#f0f3ff] p-1.5 rounded-xl border border-transparent focus-within:border-[#0056f5] transition-all">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none focus:ring-0 w-full px-3 text-sm text-gray-700"
              />
              <button className="bg-[#0056f5] text-white p-3 rounded-lg hover:bg-[#0046d1] transition-all">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 HireUstaad. Built with 🛠️ in Pakistan</p>
          <p>
            Made for Pakistan{" "}
            <span className="font-bold uppercase ml-1">pk</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Social Icons
const SocialIcon = ({ icon }) => (
  <motion.a
    whileHover={{ y: -3 }}
    href="#"
    className="w-10 h-10 bg-[#f0f3ff] rounded-full flex items-center justify-center text-[#0056f5] hover:bg-[#0056f5] hover:text-white transition-all duration-300"
  >
    {icon}
  </motion.a>
);

export default LandingFooter;
