import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import { LocalStorageDb } from "../LocalStorageDb/LocalStorageDb";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart, dltItem] = useCart(products);

  const [addedCart, setAddedCart] = useContext(CartContext);

  setAddedCart(products);
  // console.log(cart);
  const handelAddToCart = (product) => {
    LocalStorageDb(true, product.id);
    // console.log(product);

    if (!cart.includes(product)) {
      product.quantity = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      // setAddedCart(newCart);
    } else {
      const restCart = cart.filter((rest) => rest.id !== product.id);
      const exist = cart.find((added) => added.id === product.id);
      exist.quantity = exist.quantity + 1;
      // console.log(exist);
      const newCart = [...restCart, exist];
      setCart(newCart);
      // setAddedCart(newCart);
    }
  };

  return (
    <div className="container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart key={cart} cart={cart} dltItem={dltItem}>
          <Link to={"/order"}>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
