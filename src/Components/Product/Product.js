import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name, img} = product;


    return (
        <div className='product'>
            <img className='watch-img' src={img} alt="" />
            <p className='product-name'>{name}</p>
           <div className='btn-div'>
           <button onClick={() => handleAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart
            <span className='shopping-cart'>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </span>
            </p>
            </button>
           </div>
        </div>
        
    );
};

export default Product;