import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products)
    console.log(cart)
    return (
        <div>
            <h2>{products.length}</h2>
            <h2>{cart.length}</h2>
            <h2>This is orderReview</h2>
        </div>
    );
};

export default OrderReview;