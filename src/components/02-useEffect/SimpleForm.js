import React, { useEffect, useState } from 'react';
import { Message } from './Message'
import './effect.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        email: ''
    })

    const {name, email} = formState;

    useEffect(() => {
        
        // console.log('hey!')
        
    }, []);


    useEffect(() => {
        // console.log('hola!')
        // console.log(formState)
    }, [formState]);

    useEffect(() => {
        // console.log('hola!')
    }, [email]);



    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className={'form-group'}>
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>
            <br/>
            <div className={'form-group'}>
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='tu email'
                    autoComplete='off'
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>
            { (name === '123') &&  <Message /> }
        </>
    ) 
}
