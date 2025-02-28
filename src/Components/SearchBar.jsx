import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";


const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch}= useContext(ShopContext);
    const location = useLocation();
    const [visibale, setVisibale ]=useState();

    useEffect(()=>{

        if (location.pathname.includes('collection') ){
            setVisibale(true);
        }
        else {
            setVisibale(false)
        }
    },[location])

  return  showSearch && visibale ? (
    <div className=' border-t border-b bg-gray-50 text-center rounded-full '>
        <div className="inline-flex items-center justify-center border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4  sm:w-1/2 ">
            <input value={search } onChange={(e)=> setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search"/>
            <img className="w-4" src={assets.search_icon} alt="serach "/>
            
        </div>
        <img onClick={()=>setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="cross"/>
      
    </div>
  ): null 
}

export default SearchBar
