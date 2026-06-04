import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { MdAccessTime } from "react-icons/md";
import { motion } from "motion/react";
const LandingHeroSection = () => {
  return (
    <div className="flex flex-col w-screen min-h-[70vh] justify-start items-center gap-6 px-4 py-10">
      <div className="h-70 w-90 lg:w-110 fixed top-10 left-0 lg:top-25 lg:left-100 bg-blue-100 blur-2xl shadow-2xl -z-100"></div>
      <div className="text-sm text-green-800 font-medium bg-green-100 px-4 py-1 rounded-full">
        Join 100+ early members already on the waitlist!
      </div>
      <h1 className="text-4xl font-bold lg:text-5xl text-center">
        <span className="inline-block  text-center sm:text-right">
          <Typewriter
            options={{
              strings: ["Plumber", "Electrician", "Carpenter", "AC Mechanic"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>{" "}
        dhundna mushkil hai?
        <span className="text-blue-600 italic"> Ab nahi!</span>
      </h1>
      <p className="text-gray-700 text-center md:text-lg max-w-2xl">
        Pakistan ka pehla premium or reliable local home services platform.
        Verified and trusted professionals aek click par.
      </p>
      <div className="flex gap-1 md:gap-2 lg:gap-4">
        <input
          type="phone"
          placeholder="Enter your Phone number"
          className="border border-gray-400 rounded-lg px-10 py-2 text-gray-700"
        />
        <motion.button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm md:text-md hover:bg-blue-700 cursor-pointer outline-none"
          whileTap={{ scale: 0.95 }}
        >
          Join Waitlist
        </motion.button>
      </div>
      <div className="flex items-center gap-2 text-gray-900 cursor-pointer">
        <IoChatboxEllipsesOutline className="text-lg" />
        <div className="text-gray-700">Chat on WhatsApp</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-8 md:gap-12 lg:gap-15  px-4  w-full  max-w-2xl mt-4 mg:mt-6 lg:mt-10">
        <div className="flex flex-col items-center gap-3">
          <MdOutlineVerified className="text-base md:text-2xl lg:text-3xl text-gray-800" />
          <div className="text-gray-700 text-sm md:text-md">Verified Pro</div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <BsPersonCircle className="text-base md:text-2xl lg:text-3xl text-gray-800" />
          <div className="text-gray-700 text-sm md:text-md">Secure Hire</div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <MdAccessTime className="text-base md:text-2xl lg:text-3xl text-gray-800" />
          <div className="text-gray-700 text-sm md:text-md">Swift Response</div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <AiOutlineDollar className="text-base md:text-2xl lg:text-3xl text-gray-800" />
          <div className="text-gray-700 text-sm md:text-md">
            Zero Commission
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroSection;
