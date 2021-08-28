import React, {  useState, useCallback } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [ counter, setCounter ]  = useState( 10 );


    /* constante const increment = () => {
        setCounter( counter + 1 );
    }*/


    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ] );

    return (
        <div>
                <h1>Use Call Back Hooks</h1>
                <h2> { counter } </h2>


                <ShowIncrement  increment={ increment } />


        </div>

    )
}
