import { Link } from "react-scroll";
import { TbHomeCheck } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" sticky top-0 z-50 flex justify-between lg:justify-evenly items-center px-4 md:px-8 lg:px-10 py-4 bg-white shadow-sm "
    >
      <div className="logo flex items-center gap-1 ">
        <TbHomeCheck className="text-3xl text-blue-700" />

        <div className="flex flex-col relative bottom-1">
          <h1 className="font-bold text-lg text-gray-700">HireUstaad</h1>
          <p className="text-[8px] text-gray-500 absolute top-6 text-nowrap">
            Best Local Services Platform
          </p>
        </div>
      </div>

      {/* for big screens */}
      <div className="hidden md:flex gap-6 lg:gap-12 font-semibold text-gray-500">
        <Link
          to="problem"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Problem
        </Link>
        <Link
          to="how-it-works"
          className="cursor-pointer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          How It Works
        </Link>
        <Link
          to="our-ustaads"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Our Ustaads
        </Link>
        <Link
          to="our-mission"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Our Mission
        </Link>
      </div>
      {/* for small screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex  flex-col gap-4 font-semibold text-gray-500 z-100 bg-white shadow-xl p-4
       rounded absolute top-16 right-4`}
          >
            <Link
              to="problem"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </Link>
            <Link
              to="how-it-works"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="our-ustaads"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Ustaads
            </Link>
            <Link
              to="our-mission"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="actions-links flex items-center gap-4">
        <Link
          to="join-waitlist"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            className="bg-blue-700 px-4 py-2 rounded text-white cursor-pointer text-sm md:text-base font-semibold"
          >
            Join Waitlist
          </motion.button>
        </Link>
        {isMenuOpen ? (
          <MdOutlineClose
            onClick={() => setIsMenuOpen(false)}
            className=" md:hidden text-3xl cursor-pointer"
          />
        ) : (
          <LuMenu
            onClick={() => setIsMenuOpen(true)}
            className=" md:hidden text-3xl cursor-pointer"
          />
        )}
      </div>
    </motion.div>
  );
};

export default LandingNavbar;
