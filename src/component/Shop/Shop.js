import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import Loading from "../Loading/Loading";
import { LocalStorageDb } from "../LocalStorageDb/LocalStorageDb";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const[products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart, dltItem] = useCart();
  const [addedCart, setAddedCart] = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`https://bike-show-server.vercel.app/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setCount(data.count);
        setLoading(false);
      });
  }, [page, size]);

  setAddedCart(products);
  // console.log(cart);
  const handelAddToCart = (product) => {
    LocalStorageDb(true, product._id);
    // console.log(product);

    if (!cart.includes(product)) {
      product.quantity = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      // setAddedCart(newCart);
    } else {
      const restCart = cart.filter((rest) => rest._id !== product._id);
      const exist = cart.find((added) => added._id === product._id);
      exist.quantity = exist.quantity + 1;
      // console.log(exist);
      const newCart = [...restCart, exist];
      setCart(newCart);
      // setAddedCart(newCart);
    }
  };

  if (loading) {
    return (
      <div className="shop-loading">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-area">
        <div className="products-container">   
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handelAddToCart={handelAddToCart}
            ></Product>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
              key={number}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option selected value="10">
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart key={cart} cart={cart} dltItem={dltItem}>
          <Link to={"/order"}>
            <button className="action-btn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
