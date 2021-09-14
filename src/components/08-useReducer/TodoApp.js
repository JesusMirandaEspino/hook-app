import React, { useReducer, useEffect } from 'react';
import { TodoReducer } from './TodoReducer'
import './styles.css';
import { UseForm } from '../../Hooks/UseForm';



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

            <ul className="list-group list-group-flush" >
                { 
                
                    todos.map( (todo, i) => (
                            <li key={ todo.id }  className="list-group-item" > <p className="text-center"  >  { i + 1 } .- {  todo.desc } </p>  
                            
                            <button className="btn btn-danger" onClick={ () => HandleDelete(todo.id) }    >Borrar</button>

                            </li>

                    ))
                
                }
            </ul>

        </div>
    )
}
