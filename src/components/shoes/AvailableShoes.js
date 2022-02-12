import React from 'react';
import classes from './Available.module.css'
import { useState } from 'react'
import Loader from '../UI/Loader';
import ToCartButton from '../UI/ToCartButton';
const AvailableShoes = () => {
    const [shoes, setshoes] = useState([]);
    const [value, setvalue] = useState('');
    const [isLoading, setisLoadeing] = useState(true);

    const handleChange = (event) => {
        setvalue(event.target.value)
    }
    const handleSubmit = (event) =>{ 
        event.preventDefault()
    }
    const filteredShoes = shoes.filter(shoess => {
        return shoess.name.toLowerCase().includes(value.toLowerCase())
    })
    React.useEffect(() => {
        const fetchShoes = async () => {
            const response = await fetch('https://clothes-react-b2d44-default-rtdb.firebaseio.com/shoes.json')
            const responseData = await response.json();
            const loadedShoes = [];
            for(const key in responseData){
                loadedShoes.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }
            setshoes(loadedShoes)
            setisLoadeing(false)
        }
        fetchShoes()
    }, [])
    if(isLoading){
        return <Loader/>
    }
    const shoesList = filteredShoes.map(shoes => 
    <li key={shoes.id} className={classes.shoes}>
        <h3>{shoes.name}</h3>
        <img src={shoes.image}/>
        <p>{shoes.description}</p>
        <b>{shoes.price.toFixed(2)}kgs</b>
        <ToCartButton/>
    </li>)
    return (
    <>
        <form onSubmit={handleSubmit} className={classes.SearshShoes}>
            <input
                className={classes.input}
                type="search"
                placeholder='Что вы ищете?'
                onChange={handleChange}
            />
        </form>
        <ul className={classes.shoesList}>   
            {shoesList}
        </ul>;
    </>
    )
};

export default AvailableShoes;