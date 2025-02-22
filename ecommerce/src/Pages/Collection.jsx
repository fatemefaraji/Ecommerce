import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products,search, showSearch  } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType]= useState('relevant');

  // toggle category filter
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // toggle sub-category filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // apply filters to products
  const applyFilter = () => {
    let productCopy = [...products];

    if (showSearch && search){
      productCopy=productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  };
  const sortProduct=()=>{

    let fpCopy=filterProducts.slice();
    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price- a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch ]);


  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t bg-gradient-to-b from-pink-50 to-gray-100 min-h-screen">
      {/* filter section */}
      <div className="min-w-60 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold text-gray-900"
        >
          Filters
          <img
            className={`h-4 transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            } sm:hidden`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>

        {/* category filter */}
        <div className={`border p-4 mt-4 rounded-xl shadow-md ${showFilter ? "" : "hidden"} sm:block bg-white/60`}> 
          <p className="mb-3 text-sm font-medium text-gray-900">Categories</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="w-5 h-5 accent-pink-500 rounded-md transition-all hover:scale-110"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* sub-category filter */}
        <div className={`border p-4 mt-4 rounded-xl shadow-md ${showFilter ? "" : "hidden"} sm:block bg-white/60`}> 
          <p className="mb-3 text-sm font-medium text-gray-900">Type</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
              <label key={subCat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={subCat}
                  onChange={toggleSubCategory}
                  className="w-5 h-5 accent-pink-500 rounded-md transition-all hover:scale-110"
                />
                {subCat}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* product section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* sorting */}
          <select  onChange={(e)=>setSortType(e.target.value)}className="border-2 border-gray-300 text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* display products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pr-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                price={item.price}
                id={item._id}
                image={item.image}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
