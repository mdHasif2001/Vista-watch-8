import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img} = props.product;

    return (
        <div className='product'>
            <img className='watch-img' src={img} alt="" />
            <p className='product-name'>{name}</p>
           <div className='btn-div'>
           <button className='btn-cart'>
            <p>Add to Cart</p>
            </button>
           </div>
        </div>
        
    );
};

export default Product;