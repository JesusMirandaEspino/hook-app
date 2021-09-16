import React from 'react'
import { UseForm } from '../../Hooks/UseForm';

export const TodoAdd = ( { handleAddTodo } ) => {

    const [  { description } , handleInpuntChange, reset ]  = UseForm( {
        description: ''
    } );


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

        handleAddTodo( newTodo );
        reset();

    }

    return (
        <>
            <form  onSubmit={ handleSubmit } >

                <label for="description" > Ingresa un elemento </label> 
                <input type="text"  name="description" onChange={ handleInpuntChange }  value={ description }  />

                <button type="submit" className="btn btn-primary mt-1" >Agregar</button>

            </form>            
        </>
    )
}
