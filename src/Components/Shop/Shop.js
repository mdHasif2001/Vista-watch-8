import React, { useState, useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Shop;