import React from 'react';
import Card from './Card';
import styles from './Loader.module.css'
const Loader = () => {
    return <Card className={styles.preLoader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </Card>;
};

export default Loader;
