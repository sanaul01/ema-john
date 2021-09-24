import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shiping = 15;
    const tax = (total + shiping)*10
    const grandTotal = total + shiping + tax
    return (
        <div>
            <h2>Order-Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shiping: {shiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTOtal: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;