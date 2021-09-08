import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';

export const TodoApp = () => {

    const initialState = [{

        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];


    const [  todo ] = useReducer( TodoReducer, initialState  );


    

    return (
        <div>
            <h1>Todo App</h1>
            <hr/>

            <ul>

                <li>Hola</li>
                <li>Mundo</li>
                <li>Como</li>
                <li>Estan</li>

            </ul>

        </div>
    )
}
