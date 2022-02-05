import React from 'react';
import { Route } from 'react-router-dom';
import Clothers from '../../pages/Clothers';
import Trousers from '../../pages/Trousers';
import Tshirts from '../../pages/Tshirts';
import AvailableShoes from '../shoes/AvailableShoes';
import Card from '../UI/Card';
import styles from './Main.module.css'
const Main = () => {
    return <Card className={styles.main}>
        <Route path="/clothers">
            <Clothers/>
        </Route>
        <Route path="/shoes">
            <AvailableShoes/>
        </Route>
        <Route path="/trousers">
            <Trousers/>
        </Route>
        <Route path="/tshirt">
            <Tshirts/>
        </Route>
    </Card>;
};
export default Main;