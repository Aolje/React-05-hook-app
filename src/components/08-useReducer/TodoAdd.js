import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <div>
            <h4>Agregar TODO</h4>
            <hr />
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className='form-control'
                    placeholder='Aprender ...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange} />
                <button
                    className="btn btn-primary mt-1 w-100"
                    type='submit'
                >
                    Agregar
                </button>

            </form>
        </div>
    )
}
