import React, { useState } from 'react';
import '../../components/02-useEffect/effects.css';
import { useCounter } from '../../Hooks/UseCounter';
import { Small } from './Small';


export const Memorize = () => {

    const { counter, increment } =  useCounter(10);
    const [ show, setShow ] = useState( true );



    return (
        <div>
            <h1>Memorize</h1>
            <Small value={ counter }  />
            <hr/>  

            <button className="btn btn-primary"  onClick={ increment } >+1</button>

            <button className="btn btn-outline-primary ml-3" onClick={ () => { setShow(!show) }}  > Show / Hide  { JSON.stringify( show ) } </button>

        </div>
    )
}
