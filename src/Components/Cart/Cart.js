import React from 'react';

const Cart = (props) => {
    let totalQuantity = 0;
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shiping = total > 0 ?15 : 0;
    const tax = (total + shiping)* 0.10
    const grandTotal = total + shiping + tax
    return (
        <div>
            <h2>Order-Summary</h2>
            <h3>Items Ordered: {totalQuantity}</h3>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shiping: {shiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTOtal: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;