import React from 'react';
import dltIcon from '../../asset/delete-2.svg';
import './Cart.css';
const Cart = (props) => {
    const {dltItem, cart} = props;

    const quantity = JSON.parse(localStorage.getItem('shoppingCart'));
 
    let total = 0;
    let shipping = 0;
    let totalQuantity = 0;
    for(const product of cart){
        totalQuantity = quantity[product.id]
        total = total + (product.price) * totalQuantity;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <div className='summary'>
                <h1>Order Summary</h1><br />
                <p><b>Selected item:</b> {cart.length}</p>
                <p><b>Total Price:</b> ${total}</p>
                <p><b>Total Shipping:</b> ${shipping}</p>
                <p><b>Tax:</b> ${tax}</p>
                <p><b>Grand Total:</b> ${grandTotal}</p>
            </div>
            <div className='add-products'>

                {
                    cart.map((cartItem) => (
                        <div key={cartItem.id} className='cart-item'>
                            <img className='cart-img' src={cartItem.img} alt="img" />
                            <div>
                                <h5>{cartItem.name}</h5>
                                <p>Price: ${cartItem.price}</p>
                                <p>Quantity: {quantity[cartItem.id]}</p>
                            </div>
                            <img onClick={() => dltItem(cartItem.id)} className='dlt-icon' src={dltIcon} alt="" />
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Cart;