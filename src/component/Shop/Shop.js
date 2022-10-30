import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    let qty = 1;
    const handelAddToCart = (product) =>{
        if (cart.includes(product)) {
            qty++;
        }else{
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }
    console.log(qty);
    const dltItem = (removeItem) =>{
        const filter = cart.filter((carts)=> carts.id !== removeItem);
        setCart(filter)
    }

    return (
        <div className='container'>
            <div className='products-container'>
                {
                    products.map(product=>
                        <Product key={product.id} product= {product} handelAddToCart = {handelAddToCart} ></Product>
                    )
                }
            </div>
            <div>
                <Cart cart={cart} quantity = {qty} dltItem = {dltItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;