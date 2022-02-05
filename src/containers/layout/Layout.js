import React from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/sideBar/Sidebar.js'
import styles from '../../components/main/Main.module.css'
function Layout(props) {
    return <Card>
        <Header/>
        <Card className={styles.mainBlock}>
            <Sidebar/>
            <main>
                {props.children}
            </main>
        </Card>
    </Card>;
}

export default Layout;
