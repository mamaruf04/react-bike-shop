import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { LocalStorageDb } from '../LocalStorageDb/LocalStorageDb';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useProducts();
    const [cart, setCart, dltItem] = useCart(products);
    
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data=> setProducts(data))
    // },[])

    // load cart from local storage

    // useEffect(()=>{
    //     const loadData = getFromLocal();
    //     const addedCart = [];
    //     for(const id in loadData){
    //         const storedCart = products.find(product => product.id === id);
    //         if(storedCart){
    //             const quantity = loadData[id];
    //             storedCart.quantity = quantity; 
    //             addedCart.push(storedCart); 
    //         }
    //     setCart(addedCart); 
    //     }
    // },[products])

    // console.log(cart);
    const handelAddToCart = (product) =>{
        LocalStorageDb(true, product.id);
        // console.log(product);
        if (!cart.includes(product)) {
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }else{
            const restCart = cart.filter(rest => rest.id !== product.id)
            const exist = cart.find(added => added.id === product.id)
            exist.quantity = exist.quantity + 1;
            // console.log(exist);
            const newCart = [...restCart,exist];
            setCart(newCart);
        } 
    }
    // delete from cart. it also delete from local storage.
    // const dltItem = (removeItem) =>{
    //     const filteredCart = cart.filter((singleCart)=> singleCart.id !== removeItem);
    //     setCart(filteredCart);
    //     const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
    //     if (removeItem in storedCart) {
    //         delete storedCart[removeItem] ;
    //     }
    //     localStorage.setItem('shoppingCart', JSON.stringify(storedCart))     
    // }

    return (
      <div className="container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelAddToCart={handelAddToCart}
            ></Product>
          ))}
        </div>
        <div>
          <Cart key={cart} cart={cart} dltItem={dltItem}>
            <Link to={'/order'}>
              <button>Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Shop;