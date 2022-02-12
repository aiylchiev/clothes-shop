import React, { Fragment } from 'react';
import { createPortal } from 'react-dom'
import Backdrop from './Backdrop';
import ModalCart from './ModalCart';
const portalElem = document.getElementById("ovarlays")
const Modal = (props) => {
    return <Fragment>
        {createPortal(<Backdrop onCloseCart={props.onCloseCart}/>,portalElem )}
        {createPortal(<ModalCart>{props.children}</ModalCart>,portalElem )}
    </Fragment>;
};

export default Modal;