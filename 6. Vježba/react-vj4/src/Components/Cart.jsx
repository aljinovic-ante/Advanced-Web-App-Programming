import React,{createContext, useState} from "react";

export const CartContext=createContext();

export default function Cart({children}){
    const [cart,setCart]=useState([]);

    function addToCart(product){
        setCart((prevCart)=>{
            let productAlreadyExists=prevCart.find((item)=>item.name===product.name);
            if(productAlreadyExists){
                return prevCart.map((item)=>
                    item.name===product.name ? {...item,quantity: item.quantity+1} : item
                );
            }
            else{
                return [...prevCart,{...product,quantity:1}];
            }
        });
    }
    return (
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}