import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const { name, email } = formState;


    useEffect(() => {
        // console.log('Hey');
    },[]);

    useEffect(() => {
        // console.log('Cambio el form');
    },[formState]);

    useEffect(() => {
        // console.log('Cambio el email');
    },[email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <div>
            <h1>UseEffect</h1>
            <hr />
            <div action="form-group">
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}

                />
            </div>
            <div action="form-group">
                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}

                />
            </div>

            { name ==='123' && <Message /> }

        </div>
    )
}
