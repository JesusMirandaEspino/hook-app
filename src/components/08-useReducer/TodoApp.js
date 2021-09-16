import React, { useReducer, useEffect } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) )  ||  [] ;

    };


export const TodoApp = () => {


    const [  todos, dispatch ] = useReducer( TodoReducer, [], init  );


    useEffect( () => {

        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos]);


    const HandleDelete = ( todoId ) => {
        console.log(  todoId );

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );

    };


    const handleToggle = ( todoId ) => {
        dispatch( {
            type: 'toggle',
            payload: todoId,

        } );
    }




    const handleAddTodo = ( newTodo ) => {

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


                <TodoAdd handleAddTodo={ handleAddTodo } />


            <hr/>

            <TodoList todos={ todos } HandleDelete={  HandleDelete } handleToggle={ handleToggle }  />

        </div>
    )
}
