import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock, star} = props.product;
    

    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="">
            <h2 className="products-name">{name}</h2>
            <p>by: {seller}</p>
            <p>Price: {price}</p>
            <p>only {stock} left in stock - order soon</p>
            <Rating
             initialRating={star} 
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly>

            </Rating>
            <br />
            <button onClick={() =>props.handleAddToCart(props.product)}className="btn-regular"
            ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;