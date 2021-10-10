import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shiping = total > 0 ?15 : 0;
    const tax = (total + shiping)* 0.10
    const grandTotal = total + shiping + tax
    return (
        <div>
            <h2>Order-Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shiping: {shiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTOtal: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;