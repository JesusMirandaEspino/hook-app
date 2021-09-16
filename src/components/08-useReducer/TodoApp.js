import React, { useReducer, useEffect } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';
import { UseForm } from '../../Hooks/UseForm';
import { TodoList } from './TodoList';


    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) )  ||  [] ;

    };


export const TodoApp = () => {


    const [  todos, dispatch ] = useReducer( TodoReducer, [], init  );


    const [  { description } , handleInpuntChange, reset ]  = UseForm( {
        description: ''
    } );




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

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim() <= 1 ){
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

        dispatch( action );
        reset();
    }

    return (
        <div>
            <h1>Todo App  ( { todos.length  }  ) </h1>
            <hr/>


            <form  onSubmit={ handleSubmit } >

                <label for="description" > Ingresa un elemento </label> 
                <input type="text"  name="description" onChange={ handleInpuntChange }  value={ description }  />

                <button type="submit" className="btn btn-primary mt-1" >Agregar</button>

            </form>


            <hr/>

            <TodoList todos={ todos } HandleDelete={  HandleDelete } handleToggle={ handleToggle }  />

        </div>
    )
}
