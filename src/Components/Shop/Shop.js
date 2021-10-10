import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    useEffect(()=>{
        console.log('Product Api called')
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            console.log('peceived product')
        })
    }, []);

    useEffect(()=>{
        console.log('L S called')
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
            const addedProduct = products.find(product => product.key=== key);
            storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products: {products.length}</h2>
                {
                    products.map(product =><Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;