import React from 'react';
import product from '../../assets/icons/tovar.png'
import style from './Navigation.module.css'
const ProductIcon = () => {
    return <img className={style.ProductIcon} src={product}/>
};
export default ProductIcon;