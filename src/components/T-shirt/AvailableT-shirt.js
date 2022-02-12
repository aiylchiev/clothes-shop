import React from 'react';
import classes from './AvailableT-shirt.module.css'
import { useState, useEffect } from 'react'
import Loader from '../UI/Loader';
import ToCartButton from '../UI/ToCartButton';


const AvailableTshirt = (props) => {
    const [tshirt, setTshirt] = useState([]);
    const [value, setValue] = React.useState('');
    const [isLoading, setIsLoading] = useState(true);
    const filteredTshirt = tshirt.filter(tshirt => {
        return tshirt.name.toLowerCase().includes(value.toLowerCase())
    })
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        const fetchTshirt = async () => {
            const response = await fetch('https://clothes-react-b2d44-default-rtdb.firebaseio.com/tshirt.json')
            const responseData = await response.json();
            const loadedTshirt = [];
            for(const key in responseData){
                loadedTshirt.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }
            setTshirt(loadedTshirt)
            setIsLoading(false)
        }
        fetchTshirt()
    }, [])
    if(isLoading){
        return  <Loader/>
    }
    const shirtList = filteredTshirt.map(shirt => <li key={shirt.id} className={classes.tshirt}>
        <h3>{shirt.name}</h3>
        <img src={shirt.image}/>
        <p>{shirt.description}</p>
        <b>{shirt.price.toFixed(2)}kgs</b>
        <ToCartButton/>
    </li>)
    return <>
        <form onSubmit={handleSubmit} className={classes.SearshShoes}>
            <input
                className={classes.input}
                type="search"
                placeholder='Что вы ищете?'
                onChange={handleChange}
            />
        </form>
        <ul className={classes.shirtList}>
        {shirtList}
    </ul>;
    </>
};
export default AvailableTshirt;