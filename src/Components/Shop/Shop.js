import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 10
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            setDisplayProducts(data.products);
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber)
        })
    }, [page]);

    // useEffect(()=>{
    //     if(products.length){
    //         const savedCart = getStoredCart();
    //         const storedCart = [];
    //         for(const key in savedCart){
    //         const addedProduct = products.find(product => product.key=== key);
    //         if(addedProduct){
    //             const quantity = savedCart[key]
    //             addedProduct.quantity = quantity;
    //             storedCart.push(addedProduct);
    //         }
            
    //         }
    //         setCart(storedCart);
    //     }
    // }, [products])

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key)
    }

    const handleSearch = event =>{
        const searchText = event.target.value;

        const matchedProduct = products.filter(product => product.name.includes(searchText));
        // product to be rendared on the UI. 
        setDisplayProducts(matchedProduct);
    }

    return (
        <div>
            <div className="search-container">
            <input 
            type="text" 
            onChange={handleSearch}
            placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Products: {products.length}</h2>
                    <div className="pagenation">
                        {
                            [...Array(pageCount).keys()]
                             .map(number =><button
                             className = {number === page ?'selected' : ''}
                            key= {number}
                               onClick = {() => setPage(number)}
                            >{number + 1}</button>)  
                        }
                    </div>
                    {
                        displayProducts.map(product =><Product 
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            >
                            </Product>)
                        
                    }
                    <div className="pagenation">
                        {
                            [...Array(pageCount).keys()]
                             .map(number =><button
                             className = {number === page ?'selected' : ''}
                            key= {number}
                               onClick = {() => setPage(number)}
                            >{number + 1}</button>)  
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>  
        </div>
    );
};

export default Shop;