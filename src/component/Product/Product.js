import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import addToCartIcon from "../../asset/Add-to-cart.svg";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./Product.css";
const Product = ({ product, handelAddToCart }) => {
  const { id, name, img, price, ratings, stock } = product;

  return (
    <>
      <div className="product">
        <img className="product-img" src={img} alt="" />
        <div className="product-info">
          <Link
            className="link-style"
            to={"productDetail/" + id}
            element={<ProductDetail></ProductDetail>}
          >
            <h3>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h3>
          </Link>
          <p>
            <b>Price:</b> ${price}
          </p>
          <p>
            <b>Stock:</b> {stock}
          </p>
          <ReactStars
            {...{
              size: 24,
              value: parseFloat(`${ratings}`),
              isHalf: true,
              edit: false,
              color: "#333332",
              activeColor: "#EEA807"
            }}
          />
        </div>
        <button
          onClick={() => handelAddToCart(product)}
          className="product-btn"
        >
          Add To Cart
          <img width={"30px"} src={addToCartIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Product;
