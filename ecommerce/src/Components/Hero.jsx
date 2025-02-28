import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col sm:flex-row border border-gray-300 shadow-xl rounded-3xl overflow-hidden bg-white"
    >
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#414141] space-y-6"
        >
          <div className="flex items-center gap-2">
            <p className="w-10 md:w-12 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-xs md:text-sm text-[#767676] tracking-wide">
              OUR BEST SELLERS
            </p>
          </div>
          <h1 className="font-prata text-4xl sm:py-4 lg:text-6xl font-bold leading-tight text-gray-800 drop-shadow-lg transition-all duration-300 hover:text-[#f39c12]">
            Latest Arrivals
          </h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group cursor-pointer mt-6"
          >
            <p className="font-semibold text-sm md:text-base text-[#414141] group-hover:text-[#f39c12] transition-colors duration-300">
              SHOP NOW
            </p>
            <p className="w-8 md:w-12 h-[1px] bg-[#414141] group-hover:w-20 transition-all duration-300"></p>
          </motion.div>
        </motion.div>
      </div>
      {/* Hero right side */}
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full sm:w-1/2 object-cover transition-transform duration-500 hover:scale-110 rounded-3xl"
        src={assets.hero_img}
        alt="hero_img"
      />
    </motion.div>
  );
};

export default Hero;
