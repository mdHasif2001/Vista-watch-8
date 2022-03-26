import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img} = props.product;

    return (
        <div className='product'>
            <img className='watch-img' src={img} alt="" />
            <p className='product-name'>{name}</p>
           
        </div>
        
    );
};

export default Product;