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
        <Cart cart={cart} dltItem={dltItem}>
          <Link to={"/shipment"}>
            <button>Processed to Shipping</button>
          </Link>
        </Cart>
        <ProductDetail></ProductDetail>
      </div>
    );
};

export default Order;