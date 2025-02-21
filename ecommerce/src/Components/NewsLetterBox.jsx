import React from "react";
import { motion } from "framer-motion";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center py-10 bg-white shadow-xl rounded-2xl p-6">
      <p className="text-3xl font-semibold text-gray-800">
        Subscribe now & get <span className="text-pink-500">15% off</span>
      </p>
      <p className="text-gray-500 mt-3">
        Stay updated with our latest collections and exclusive discounts!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-2/3 flex items-center mx-auto my-6 bg-gray-100 rounded-full shadow-md overflow-hidden"
      >
        <input
          className="w-full flex-1 px-6 py-4 text-gray-700 bg-transparent outline-none"
          type="email"
          placeholder="Enter your email..."
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-pink-700 text-white text-sm px-8 py-4 font-medium shadow-md transition-all rounded-full"
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
