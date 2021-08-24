import React from 'react';
import '../../components/02-useEffect/effects.css';
import { useCounter } from '../../Hooks/UseCounter';
import { Small } from './Small';


export const Memorize = () => {

    const { counter, increment } =  useCounter(10);

    return (
        <div>
            <h1>Memorize</h1>
            <Small value={ counter }  />
            <hr/>  

            <button className="btn btn-primary"  onClick={ increment } >+1</button>

        </div>
    )
}
