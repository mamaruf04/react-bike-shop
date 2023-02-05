import { useEffect, useState } from "react";
import { getFromLocal } from "../component/LocalStorageDb/LocalStorageDb";

const useCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(products);

  useEffect(() => {
    const loadData = getFromLocal();
    const ids = Object.keys(loadData);
    // console.log(ids)
    fetch("https://bike-show-server.vercel.app/productsById", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        setProducts(cartProducts);
        const addedCart = [];
        for (const id in loadData) {
          const storedCart = cartProducts.find((product) => product._id === id);
          if (storedCart) {
            const quantity = loadData[id];
            storedCart.quantity = quantity;
            addedCart.push(storedCart);
          }
          setCart(addedCart);
        }
      });
  }, []);

  const dltItem = (removeItem) => {
    const filteredCart = cart.filter(
      (singleCart) => singleCart._id !== removeItem
    );
    setCart(filteredCart);
    const storedCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (removeItem in storedCart) {
      delete storedCart[removeItem];
    }
    localStorage.setItem("shoppingCart", JSON.stringify(storedCart));
  };

  return [cart, setCart, dltItem];
};

export default useCart;
