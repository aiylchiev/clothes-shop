import React from 'react';
import Navigation from './Navigation';
import style from './Header.module.css'
import HeaderLogo from './HeaderLogo';
const Header = () => {
    return <header className={style.header}>
        <HeaderLogo/>
        <Navigation/>
    </header>;
}
export default Header;