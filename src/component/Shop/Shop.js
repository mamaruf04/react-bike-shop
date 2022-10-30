import React, { useEffect, useState } from 'react';
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

    const handelAddToCart = (product) =>{

        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    }

    return (
        <div className='container'>
            <div className='products-container'>
                {
                    products.map(product=>
                        <Product key={product.id} product= {product} handelAddToCart = {handelAddToCart}></Product>
                    )
                }
            </div>
            <div className='cart'>
                <div className='summary'>
                    <h1>Summary</h1>
                </div>
                <div className='add-products'>
                    <h1>fgfdg</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;