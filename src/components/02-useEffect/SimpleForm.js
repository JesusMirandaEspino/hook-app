import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState( {
        name: '',
        email: ''
    }  );

    const { name, email }  = formState;


    useEffect( () => {
        //  de prueba console.log( 'hey' );
    }, [] );

    useEffect( () => {
        //  de prueba console.log( 'form' );
    }, [formState] );

    useEffect( () => {
        // de prueba console.log( 'email' );
    }, [email] );


    const handleInpuntChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value,
        });

    };

    return (
        <>
            <h1>UseEffect</h1>
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


            { (name  === '123') && <Message /> }

        </>
    )
}
