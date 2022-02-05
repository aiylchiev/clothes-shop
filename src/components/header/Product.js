import React from 'react';
import ProductIcon from './ProductIcon';
import style from './Navigation.module.css'
const Product = () => {
    return <li className={style.ProductLi}>
            <ProductIcon/>
            <p>Товары</p>
    </li>;
};

export default Product;