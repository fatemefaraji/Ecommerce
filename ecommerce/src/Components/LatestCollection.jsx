import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Titles from "./Titles";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
    const {products}= useContext(ShopContext); 
    const [latestProducts,setLatestProducts]= useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])
    //console.log(products);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titles text1={"LATEST"} text2={'COLLECTION'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"> 
        some texts about our amazing  lastest collection 

        </p>
      </div>
      {/* REndering products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection;
