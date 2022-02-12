import React from 'react';
import styles from './Modal.module.css'
const ModalCart = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>;
};
export default ModalCart;