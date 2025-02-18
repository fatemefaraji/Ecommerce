import { createContext } from "react";
import {products} from "../assets/assets.js";

export const ShopContext =createContext();

const ShopContextProvider = (props)=>{
    const currency="$";
    const delivery_fee= 10;


    const value={
        products, currency,delivery_fee
        }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;
