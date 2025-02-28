import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from "framer-motion";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className="my-16 px-4 lg:px-20">
            <div className='text-center'>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                >
                    <Title text1="BEST" text2="SELLERS" />
                </motion.div>
                <p className='mt-4 w-3/4 mx-auto text-sm sm:text-base md:text-lg text-gray-500'>
                    Discover our top-rated products loved by customers worldwide.
                </p>
            </div>
            
            <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.7 }}
            >
                {bestSeller.map((item, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }}>
                        <ProductItem 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default BestSeller;
