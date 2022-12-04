import { useEffect, useState } from "react";
import { getFromLocal } from "../component/LocalStorageDb/LocalStorageDb";

const useCart = (products) =>{
    
    const[cart, setCart] = useState(products);

    useEffect(()=>{
        const loadData = getFromLocal();
        const addedCart = [];
        for(const id in loadData){
            const storedCart = products.find(product => product.id === id);
            if(storedCart){
                const quantity = loadData[id];
                storedCart.quantity = quantity; 
                addedCart.push(storedCart); 
            }
        setCart(addedCart); 
        }
    },[products])


    const dltItem = (removeItem) => {
      const filteredCart = cart.filter(
        (singleCart) => singleCart.id !== removeItem
      );
      setCart(filteredCart);
      const storedCart = JSON.parse(localStorage.getItem("shoppingCart"));
      if (removeItem in storedCart) {
        delete storedCart[removeItem];
      }
      localStorage.setItem("shoppingCart", JSON.stringify(storedCart));
    };

    return [cart, setCart, dltItem];
}

export default useCart;