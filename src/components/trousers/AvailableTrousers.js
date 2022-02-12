import React from 'react';
import classes from './AvailableTrousers.module.css'
import { useState,useEffect } from  'react'
import Loader from '../UI/Loader';
import ToCartButton from '../UI/ToCartButton';
const AvailableTrousers = () => {
    const [trousers, setTrousers] = useState([]);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false)
        }
        fetTrousers()
    }, [])
    if(isLoading){
        return <Loader/>
    }
    const trousersList = filteredTrousers.map(trouser => <li key={trouser.id} className={classes.trousers}>
        <h3>{trouser.name}</h3>
        <img src={trouser.image}/>
        <p>{trouser.description}</p>
        <b>{trouser.price.toFixed(2)}kgs</b>
        <ToCartButton/>
    </li>)
    return <>
        <form onSubmit={handleSubmit} className={classes.trouserss}>
            <input
                className={classes.input}
                type="search"
                onChange={handleChange}
                placeholder='Что вы ищете?'
            />
        </form>
        <ul className={classes.trousersist}>
            {trousersList}
        </ul>
    </>;
};

export default AvailableTrousers;
