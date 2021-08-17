import React, { useEffect, useState }from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState( {
        name: '',
        email: ''
    }  );

    const { name, email }  = formState;


    useEffect( () => {
        console.log( 'hey' );
    } );


    const handleInpuntChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
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
        </>
    )
}
