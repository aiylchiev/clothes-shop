import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Auth = () => {
    return <Card>
        <form>
            <input 
                type="email"
                value={}
                onChange={}
                placeholder='Введите логин!'
            />
            <input
                type="password"
                value={}
                onChange={}
                placeholder="Введите пароль!"
            />
            <Button type="submit ">регистрация</Button>
        </form>
    </Card>;
};
export default Auth;