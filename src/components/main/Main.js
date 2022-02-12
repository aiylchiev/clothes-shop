import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authentification from '../../pages/Authentification';
import Clothers from '../../pages/Clothers';
import Trousers from '../../pages/Trousers';
import Tshirts from '../../pages/Tshirts';
import AvailableShoes from '../shoes/AvailableShoes';
import Card from '../UI/Card';
import styles from './Main.module.css'
const Main = () => {
    return <Card className={styles.main}>
        <Switch>
            <Route path="/authentification">
                <Authentification/>
            </Route>
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
        </Switch>
    </Card>;
};
export default Main;