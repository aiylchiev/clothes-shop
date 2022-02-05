import React from 'react';
import classes from './AvailableTrousers.module.css'
import { useState,useEffect } from  'react'
const AvailableTrousers = () => {
    const [trousers, setTrousers] = useState([]);
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const filteredTrousers = trousers.filter(trouser => {
        return trouser.name.toLowerCase().includes(value.toLowerCase())
    })
    useEffect(() => {
        const fetTrousers = async () => {
        const response = await fetch('https://clothes-react-b2d44-default-rtdb.firebaseio.com/trousers.json')
        const responseData = await response.json();
        const loadedTrousers = [];
        for(const key in responseData){
            loadedTrousers.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                image: responseData[key].image,
                price: responseData[key].price
            })
        }
        setTrousers(loadedTrousers)
        }
        fetTrousers()
    }, [])

    const trousersList = filteredTrousers.map(trouser => <li key={trouser.id} className={classes.trousers}>
        <h3>{trouser.name}</h3>
        <img src={trouser.image}/>
        <p>{trouser.description}</p>
        <b>{trouser.price}kgs</b>
    </li>)
    return <>
        <form onSubmit={handleSubmit} className={classes.trouserss}>
            <input
                className={classes.input}
                type="search"
                onChange={handleChange}
                placeholder='Что вы ищете?'
            />
            <img/>
        </form>
        <ul className={classes.trousersist}>
            {trousersList}
        </ul>
    </>;
};

export default AvailableTrousers;
