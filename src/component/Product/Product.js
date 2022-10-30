import React from 'react';
import addToCartIcon from '../../asset/Add-to-cart.svg';
import './Product.css';
const Product = (props) => {
    const {handelAddToCart} = props;
    const {name, img, price, ratings, stock} = props.product;
    return (
        <>
          <div className='product'>
              <img className='product-img' src={img} alt="" />
              <div className='product-info'>
                <h3>{name}</h3>
                <p><b>Price:</b> ${price}</p>
                <p><b>Ratings:</b> {ratings}</p>
                <p><b>Stock:</b> {stock}</p>
              </div>
              <button onClick={() => handelAddToCart(props.product)}  className='product-btn'>Add To Cart<img width={'30px'} src={addToCartIcon} alt="" /></button>
          </div>
          
        </>
    );
};

export default Product;