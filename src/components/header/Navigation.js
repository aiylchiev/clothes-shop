import React from 'react';
import style from './Navigation.module.css'
import AuthButtonLi from './AuthButtonLi';
import Product from './Product';
import HeaderCartButton from './HeaderCartButton';
const Navigation = (props) => {
    return <nav className={style.nav}>
        <ul>
            <Product/>
            <AuthButtonLi/>
            <HeaderCartButton/>
        </ul>
    </nav>;
};
export default Navigation;