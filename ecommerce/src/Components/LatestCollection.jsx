import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../Context/ShopContext";
import Titles from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products = [] } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-16 px-6">
      {/* Title and description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center py-10"
      >
        <Titles text1="LATEST" text2="COLLECTION" />
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Discover our stunning latest collection, crafted for trendsetters. Elevate
          your style with handpicked, high-quality fashion pieces!
        </p>
      </motion.div>

      {/* Rendering products */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        {latestProducts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestCollection;
