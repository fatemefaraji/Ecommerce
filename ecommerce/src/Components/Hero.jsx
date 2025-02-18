import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 shadow-lg rounded-lg overflow-hidden">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed drop-shadow-md">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 group cursor-pointer mt-4">
            <p className="font-semibold text-sm md:text-base transition-colors duration-300 group-hover:text-gray-600">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] transition-all duration-300 group-hover:w-16"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        className="w-full sm:w-1/2 object-cover transition-transform duration-300 hover:scale-105"
        src={assets.hero_img}
        alt="hero_img"
      />
    </div>
  );
};

export default Hero;
