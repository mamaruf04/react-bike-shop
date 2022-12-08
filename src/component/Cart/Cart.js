import React from 'react';
import { Link } from 'react-router-dom';
import dltIcon from '../../asset/delete-2.svg';
import './Cart.css';

const Cart = ({dltItem, cart, children}) => {
 
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    let totalQuantity = 0;
    let newQuantity = 0;
    for(const product of cart){
        quantity = product.quantity;
        newQuantity = quantity;
        totalQuantity = newQuantity + totalQuantity; 
        total = total + (product.price) * quantity;
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
            {cart.length === 0 ? (
              <div>
                <img
                  width={"280px"}
                  src="https://www.getillustrations.com/packs/matilda-startup-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20empty,%20shopping%20cart,%20items,%20products,%20zero,%20none_md.png"
                  alt=""
                />
                <h3 className="empty-cart">
                  Your cart is empty. Please add some product.
                </h3>
              </div>
            ) : null}
            {cart.map((cartItem) => (
              <div>
                <div key={cartItem.id} className="cart-item">
                  <img className="cart-img" src={cartItem.img} alt="img" />
                  <Link
                    className="link-style"
                    to={'ProductDetail/'+cartItem.id}
                  >
                    <div>
                      <h5>{cartItem.name}</h5>
                      <small>
                        <p>Quantity: {cartItem.quantity}</p>
                      </small>
                      <small>
                        <p>Unit Price: ${cartItem.price}</p>
                      </small>
                      <small>
                        <p>
                          Total Price: ${cartItem.price * cartItem.quantity}
                        </p>
                      </small>
                    </div>
                  </Link>
                  <img
                    onClick={() => dltItem(cartItem.id)}
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