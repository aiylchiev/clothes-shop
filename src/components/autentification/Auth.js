import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Auth.module.css'
const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enterdPasswordTouched, setEnterdPasswordTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const enteredEmailIsValid = email.trim() !== '';
    const emailInputInValid = !enteredEmailIsValid && enteredEmailTouched
    const enteredPassWordIsValid = password.trim() !== '';
    const passwordInputInvalid = !enteredPassWordIsValid && enterdPasswordTouched;

    React.useEffect(() => {
        if(enteredEmailIsValid){
            setFormIsValid(true)
        }else{
            setFormIsValid(false)
        }
    }, [enteredEmailIsValid])

    React.useEffect(() => {
        if(enteredPassWordIsValid){
            setFormIsValid(true)
        }else{
            setFormIsValid(false)
        }
    }, [enteredPassWordIsValid])

    const emailChahgeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }
    const passwordInputBlurHandler = () =>{ 
        setEnterdPasswordTouched(true)
    }

    const submitHandler = (event) =>{ 
        event.preventDefault();
        setEnteredEmailTouched(true);
        setEnterdPasswordTouched(true);

        if(!emailInputInValid) return;
        if(!passwordInputInvalid) return;

        setEmail('')
        setPassword('')

        setEnteredEmailTouched(false)
        setEnterdPasswordTouched(false)
    }
    const formInputClasses = enteredEmailIsValid || enteredPassWordIsValid
                    ? classes.authCard 
                    || classes.empty
                    : classes.authCard 
    const empty = emailInputInValid  && <p className={classes.empty}>текстовое поля не может быть пустым!</p>
    const empty2 = passwordInputInvalid  && <p className={classes.empty}>текстовое поля не может быть пустым!</p>
    return <Card className={formInputClasses}>
        <form onSubmit={submitHandler} >
        <h2 className={classes.logo}>Зарегистрируйтесь!</h2>
        {empty}
            <input 
                onBlur={emailInputBlurHandler}
                className={classes.email}
                type="email"
                value={email}
                onChange={emailChahgeHandler}
                placeholder='Введите логин!'
            />{empty2}
            <input
                onBlur={passwordInputBlurHandler}
                className={classes.password}
                type="password"
                value={password}
                onChange={passwordChangeHandler}
                placeholder="Введите пароль!"
            /><br/>
            <Button type="submit" className={classes.submit} disabled={!formIsValid}>регистрация</Button>
        </form>
    </Card>;
};
export default Auth;