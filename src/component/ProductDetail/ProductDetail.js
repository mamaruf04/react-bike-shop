import React, { useEffect, useState } from "react";
// import ReactStars from 'react-rating-stars-component';
import { useParams } from "react-router-dom";
import selectProductImg from "../../asset/selectProduct-removebg.png";
import Loading from '../Loading/Loading';
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetch(`https://bike-show-server.vercel.app/product?id=${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data)
          setLoading(false);
        });
      }  
  }, [productId]);

  // if (loading) {
  //   return <Loading></Loading>
  // }

  return (
    <div>
      {product ? (
        <div className="selected-product">
          {loading && <Loading></Loading>}
          <h1 className="product-title">{product?.name}</h1>
          <div className="product-detail">
            <img className="selected-product-img" src={product?.img} alt="" />
            <div className="selected-product-info">
              <p>Brand: {product?.seller}</p>
              <p>Ratings: {product?.ratings}</p>
              <p>Total Rating: {product?.ratingsCount}</p>
              <p>Unite Price: ${product?.price}</p>
              <p>Shipping: ${product?.shipping}</p>
              <p>Quantity: {product?.quantity}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-product-details-warning">
          <img
            className="add-product-img"
            src={selectProductImg}
            alt="Select product to show details."
          />
          <h3 className="product-title">
            Please select a product to show details.
          </h3>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
