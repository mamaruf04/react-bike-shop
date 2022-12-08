import React from 'react';
// import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import selectProductImg from '../../asset/selectProduct-removebg.png';
// import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';
import './ProductDetail.css';

const ProductDetail = ({children}) => {
  const {productId} = useParams();

  // const [products,setProducts] = useProducts();
  // const [cart, setCart] = useCart(products);
    const selectedCart = children?.find((addedCart) => addedCart.id === productId);

    // const firstExample = {
    //   size: 30,
    //   value: selectedCart?.ratings,
    //   isHalf: true,
    //   edit: false,
    // };
    // console.log(cart);

  return (
    <div>
      {selectedCart?.img ? (
        <div className="selected-product">
          <h1 className="product-title">{selectedCart?.name}</h1>
          <div className="product-detail">
            <img
              className="selected-product-img"
              src={selectedCart?.img}
              alt=""
            />
            <div className="selected-product-info">
              <p>Brand: {selectedCart?.seller}</p>
              <p>Ratings: {selectedCart?.ratings}</p>
              {/* <ReactStars
                {...{
                  size: 30,
                  value: parseFloat(`${selectedCart?.ratings}`),
                  isHalf: true,
                  edit: false,
                }}
              /> */}
              <p>Total Rating: {selectedCart?.ratingsCount}</p>
              <p>Unite Price: ${selectedCart?.price}</p>
              <p>Shipping: ${selectedCart?.shipping}</p>
              <p>Quantity: {selectedCart?.quantity}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
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