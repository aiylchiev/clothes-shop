import React from 'react';
import style from './Navigation.module.css'
import AuthButtonLi from './AuthButtonLi';
import Product from './Product';
const Navigation = (props) => {
    return <nav className={style.nav}>
        <ul>
            <li>Kупить оптом</li>
            <Product/>
            <AuthButtonLi/>
        </ul>
    </nav>;
};
export default Navigation;