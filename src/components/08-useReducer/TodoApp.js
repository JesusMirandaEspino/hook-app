import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';

export const TodoApp = () => {

    const initialState = [{

        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];


    const [  todos ] = useReducer( TodoReducer, initialState  );

    console.log( todos );

    return (
        <div>
            <h1>Todo App  ( { todos.length  }  ) </h1>
            <hr/>

            <ul className="list-group list-group-flush" >
                { 
                
                    todos.map( (todo, i) => (
                            <li key={ todo.id }  className="list-group-item" > <p className="text-center"  >  { i + 1 } .- {  todo.desc } </p>   </li>
                    ))
                
                }
            </ul>

        </div>
    )
}
