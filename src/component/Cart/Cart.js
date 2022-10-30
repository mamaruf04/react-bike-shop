import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const{cart} = props
    console.log(cart);
    
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <div className='summary'>
                <h1>Order Summary</h1>
                <p><b>Selected item:</b> {cart.length}</p>
                <p><b>Total Price:</b> ${total}</p>
                <p><b>Total Shipping:</b> ${shipping}</p>
                <p><b>Tax:</b> ${tax}</p>
                <p><b>Grand Total:</b> ${grandTotal}</p>
            </div>
            <div className='add-products'>
                <h1>fgfdg</h1>
                
            </div>
        </div>
    );
};

export default Cart;