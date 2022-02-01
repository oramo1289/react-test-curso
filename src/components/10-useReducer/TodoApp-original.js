import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './TodoReducer';
import  { useForm } from '../../hooks/useForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos' ,JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim() <= 1 ) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset()
    }

    const handleDelete = (id) => {

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action)
    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    return (
        <div>
            <h1>Todo App ( {todos.length} ) </h1>
            <hr/>


            <div
                className="row"
            >
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        { todos.map((todo, i) => (
                            <li
                                key={todo.id}
                                className="list-group-item"
                            >
                                <p 
                                    className={`${todo.done && 'complete'}`}
                                    onClick={() => handleToggle(todo.id)}
                                >
                                {i + 1}. { todo.desc }
                                </p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    borrar
                                </button>
                            </li>
                        )) }
                    </ul>
                </div>
                <div className="col">
                        <h4>Agregar</h4>
                        <hr/>

                        <form action="" onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="description"
                                placeholder="Aprender ..."
                                autoComplete="off"
                                className="form-control"
                                onChange={handleInputChange}
                                value={description}
                            />
                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-outline-primary mt-1 btn-block"
                                    type="submit"
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                </div>
            </div>

        </div>
    )
}
