import React from 'react';
import Card from '../UI/Card'
import classes from './Available.module.css'
const SearshShoes = () => {
    return <Card className={classes.SearshShoes}>
        <input
            className={classes.input}
            type="search"
            placeholder="Что вы ищете?"
        />
        <img/>
    </Card>;
};

export default SearshShoes;
