import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';

export const TodoApp = () => {

    const initialState = [{

        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];


    const [  todos, dispatch ] = useReducer( TodoReducer, initialState  );

    console.log( todos );

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva Tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

    }

    return (
        <div>
            <h1>Todo App  ( { todos.length  }  ) </h1>
            <hr/>


            <form  onSubmit={ handleSubmit } >

                <label for="description" > Ingresa un elemento </label> 
                <input type="text"  name="description"   />

                <button type="submit" className="btn btn-primary mt-1" >Agregar</button>

            </form>


            <hr/>

            <ul className="list-group list-group-flush" >
                { 
                
                    todos.map( (todo, i) => (
                            <li key={ todo.id }  className="list-group-item" > <p className="text-center"  >  { i + 1 } .- {  todo.desc } </p>  
                            
                            <button className="btn btn-danger" >Borrar</button>

                            </li>

                    ))
                
                }
            </ul>

        </div>
    )
}
