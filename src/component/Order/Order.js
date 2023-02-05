import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart,dltItem] = useCart(products);
    return (
      <div className="cart-review">
        <div className='cart-details'>
          <Cart cart={cart} dltItem={dltItem}>
            <Link to={"/shipment"}>
              <button className="action-btn">Processed to Shipping</button>
            </Link>
          </Cart>
        </div>
        <div className="product-details">
          <ProductDetail></ProductDetail>
        </div>
      </div>
    );
};

export default Order;