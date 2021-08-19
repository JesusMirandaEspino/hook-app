import React, {  useEffect } from 'react';
import './effects.css';
import {  UseForm } from '../../Hooks/UseForm';


export const FormWithCustomHook = () => {

    const [ formValues, handleInpuntChange ] = UseForm( {
        name: '',
        email: '',
        password: ''
    }  );

    const { name, email, password }  = formValues;

    useEffect( () => {
        console.log( 'Email cambio' );
    }, [ email ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }


    return (
        <form   onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr/> 

            <div  className="form-group"> 
                <label for="name" className="form-control"  >Tu nombre</label>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    value={ name }
                    onChange={ handleInpuntChange }
                />
            </div>

            <div  className="form-group"> 
                <label for="email" className="form-control"  >Tu email</label>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    value={ email }
                    onChange={ handleInpuntChange }
                />
            </div>

            <div  className="form-group"> 
                <label for="password" className="form-control"  >Tu password</label>
                <input 
                    type="text"
                    name="password"
                    className="form-control"
                    value={ password }
                    onChange={ handleInpuntChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}
