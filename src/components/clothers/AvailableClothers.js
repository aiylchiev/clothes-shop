import React from 'react';
import { useState } from 'react'
import classes from './AvailableClothers.module.css'
const AvailableClothers = () => {
    const [clothers, setClother] = useState([]);
    const [value, setvalue] = useState('');
    const handleChange = (event) => {
        setvalue(event.target.value)
    }
    const handleSubmit = (event) =>{ 
        event.preventDefault()
    }
    const filteredClothers = clothers.filter(chother => {
        return chother.name.toLowerCase().includes(value.toLowerCase())
    })
    React.useEffect(() => {
        const fetchClothers = async () => {
            const response = await fetch('https://clothes-react-b2d44-default-rtdb.firebaseio.com/clothers.json')
            const responseData = await response.json();
            const loadedClothers = [];
            for(const key in responseData){
                loadedClothers.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }
            setClother(loadedClothers)
        }
        fetchClothers()
    }, [])
    const clotherList = filteredClothers.map(clother => 
        <li key={clother.id} className={classes.clother}>
            <h3>{clother.name}</h3>
            <img src={clother.image}/>
            <p>{clother.description}</p>
            <b> {clother.price}kgs</b>
        </li>)
    return(
        <>
        <form onSubmit={handleSubmit} className={classes.search}>
            <input
            className={classes.input}
            type="search"
            placeholder="Что вы ищете?"
            onChange={handleChange}
        />
        <img src={''}/>
        </form>
            <ul className={classes.clotherList}>
                {clotherList}
            </ul>
        </>
    )
};
export default AvailableClothers;