import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange Policy",
    description: "We Offer Hassle-Free Exchange Policy",
  },
  {
    icon: assets.quality_icon,
    title: "7 Days Return Policy",
    description: "We Provide 7 Days Free Return Policy",
  },
  {
    icon: assets.support_img,
    title: "Best Customer Support",
    description: "We Provide 24/7 Customer Support",
  },
];

const OurPolicy = () => {
  return (
    <div className="py-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 text-center">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.1 } }} 
            className="flex flex-col items-center p-6 rounded-xl shadow-lg border border-gray-200 bg-white transition-all duration-200"
          >
            <img src={policy.icon} className="w-16 mb-5" alt={policy.title} />
            <p className="font-semibold text-lg text-gray-800">{policy.title}</p>
            <p className="text-gray-500 mt-2 text-sm">{policy.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
