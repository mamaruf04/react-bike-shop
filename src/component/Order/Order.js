import React from 'react';
import dltIcon from '../../asset/delete-2.svg';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart,dltItem] = useCart(products);
    return (
      <div className="add-products">
        {cart.map((cartItem) => (
          <div>
            <div key={cartItem.id} className="cart-item">
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
              <img
                onClick={() => dltItem(cartItem.id)}
                className="dlt-icon"
                src={dltIcon}
                alt="delete"
              />
            </div>
          </div>
        ))}
      </div>
    );
};

export default Order;