import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 py-16 px-6 sm:px-16 shadow-md">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={assets.logo} className='mb-5 w-32 filter drop-shadow-lg' alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Elevating your shopping experience with quality and trust.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <p className='text-xl font-semibold text-gray-900 mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2'>
            {['Home', 'About Us', 'Delivery', 'Privacy Policy'].map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.1, color: '#000' }}
                className='cursor-pointer transition-colors duration-300 hover:text-gray-900'
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <p className='text-xl font-semibold text-gray-900 mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2'>
            {['+1-234-567-8989', 'contact@forever.com'].map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.1, color: '#000' }}
                className='cursor-pointer transition-colors duration-300 hover:text-gray-900'
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <hr className="border-gray-300" />
        <p className='py-5 text-sm text-center text-gray-500'>
          © 2025 forever.com - All Rights Reserved
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
