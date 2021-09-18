import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    const persona = {
        id: 123458,
        name: 'Jesus'
    }

    return (
        <div>
            <h1> LoginScreen </h1>
            <hr/>

            <button className=" btn btn-primary"  onClick={ () => { setUser( persona ) } }  > Login </button>

        </div>
    )
}
