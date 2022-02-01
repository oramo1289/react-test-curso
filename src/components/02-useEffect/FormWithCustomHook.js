import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';


export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name:'',
        email: '',
        password: ''
    })
   
    const {name, email, password} = values;

    const handleSubmit = (e) => {
        e.preventDefault(); 

        console.table(values)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
            <br/>
            <div className={'form-group'}>
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='tu password'
                    autoComplete='off'
                    value={password}
                    onChange={ handleInputChange }
                />
            </div>
            <br/>
            <button 
                type="submit" 
                className={'btn btn-primary'}
            >
                Guardar
            </button>
        </form>
    )
}
