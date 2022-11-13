import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { getFromLocal, LocalStorageDb } from '../LocalStorageDb/LocalStorageDb';
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

    // load cart from local storage
    useEffect(()=>{
        const loadData = getFromLocal();
        // console.log(loadData);
        const addedCart = [];
        for(const id in loadData){
            const storedCart = products.find(product => product.id === id);
            if(storedCart){
                const quantity = loadData[id];
                storedCart.quantity = quantity; 
                addedCart.push(storedCart); 
            }
        setCart(addedCart); 
        }
    },[products])


    const handelAddToCart = (product) =>{
        LocalStorageDb(true, product.id);
        
        if (!cart.includes(product)) {
            
            const newCart = [...cart, product];
            setCart(newCart);

        }else{
            const newCart = [...cart];
            setCart(newCart);
        } 
    }

    // delete from cart. it also delete from local storage.
    const dltItem = (removeItem) =>{
        const filteredCart = cart.filter((singleCart)=> singleCart.id !== removeItem);
        setCart(filteredCart);
        const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (removeItem in storedCart) {
            delete storedCart[removeItem] ;
        }
        localStorage.setItem('shoppingCart', JSON.stringify(storedCart))
         
    }

    
    return (
        <div className='container'>
            <div className='products-container'>
                {
                    products.map(product=>
                        <Product key={product.id}  product= {product} handelAddToCart = {handelAddToCart} ></Product>
                    )
                }
            </div>
            <div>
                <Cart cart={cart} dltItem = {dltItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;