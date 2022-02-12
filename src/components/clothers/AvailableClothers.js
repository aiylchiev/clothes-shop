import React from 'react';
import { useState } from 'react'
import classes from './AvailableClothers.module.css'
import Loader from '../UI/Loader';
import ToCartButton from '../UI/ToCartButton';
const AvailableClothers = (props) => {
    const [clothers, setClother] = useState([]);
    const [value, setvalue] = useState('');
    const [isLloading, setIsloading] = useState(true);
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
            setIsloading(false)
        }
        fetchClothers()
    }, [])
    if(isLloading){
        return <Loader/>
    }
    const clotherList = filteredClothers.map(clother => 
        <li key={clother.id} className={classes.clother}>
            <h3>{clother.name}</h3>
            <img src={clother.image} alt="clother"/>
            <p>{clother.description}</p>
            <b> {clother.price.toFixed(2)}kgs</b>
            <ToCartButton 
                // key={clothers.id}
                // id={clothers.id}
                // name={clothers.name}
                // description={clothers.description}
                // price={clothers.price}
            />
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
            </form>
                <ul className={classes.clotherList}>
                    {clotherList}
                </ul>
        </>
    )
};
export default AvailableClothers;