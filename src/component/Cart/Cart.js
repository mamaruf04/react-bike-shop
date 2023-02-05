import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emptyCartIcon from '../../asset/20230202_161529_0000.png';
import dltIcon from '../../asset/delete-2.svg';
import Loading from '../Loading/Loading';
import './Cart.css';

const Cart = ({ cart, dltItem, children }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, "1500");

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  let totalQuantity = 0;
  let newQuantity = 0;
  for (const product of cart) {
    quantity = product.quantity;
    newQuantity = quantity;
    totalQuantity = newQuantity + totalQuantity;
    total = total + product.price * quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <div className="summary">
        <h1>Order Summary</h1>
        <br />
        <p>
          <b>Selected item:</b> {totalQuantity}
        </p>
        <p>
          <b>Total Price:</b> ${total}
        </p>
        <p>
          <b>Total Shipping:</b> ${shipping}
        </p>
        <p>
          <b>Tax:</b> ${tax}
        </p>
        <p>
          <b>Grand Total:</b> ${grandTotal}
        </p>
        {children}
      </div>
      <div className="cart-products">
        <div className="add-products">
          {cart.length === 0 && loading && <Loading></Loading>}
          {cart.length === 0 && !loading ? (
            <div>
              <img width={"280px"} src={emptyCartIcon} alt="" />
              <h3 className="empty-cart">
                Your cart is empty. Please add some product.
              </h3>
            </div>
          ) : null}
          {cart.map((cartItem) => (
            <div>
              <div key={cartItem._id} className="cart-item">
                <Link
                  className="link-style"
                  to={"ProductDetail/" + cartItem._id}
                >
                  <img className="cart-img" src={cartItem.img} alt="img" />
                  <div>
                    <h5>{cartItem.name}</h5>
                    <small>
                      <p>Quantity: {cartItem.quantity}</p>
                    </small>
                    <small>
                      <p>Unit Price: ${cartItem.price}</p>
                    </small>
                    <small>
                      <p>Total Price: ${cartItem.price * cartItem.quantity}</p>
                    </small>
                  </div>
                </Link>
                <img
                  onClick={() => dltItem(cartItem._id)}
                  className="dlt-icon"
                  src={dltIcon}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;