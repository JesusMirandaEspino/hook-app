import React, { useState, useMemo } from 'react';
import '../../components/02-useEffect/effects.css';
import { useCounter } from '../../Hooks/UseCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {

    const { counter, increment } =  useCounter(10);
    const [ show, setShow ] = useState( true );



    const MemoProcesoPesado = useMemo( () =>  procesoPesado(counter) , [ counter ]);

    return (
        <div>
            <h3>MemoHook: {  counter  }</h3>

            <hr/>  

            <p> { MemoProcesoPesado } </p>

            <button className="btn btn-primary"  onClick={ increment } >+1</button>

            <button className="btn btn-outline-primary ml-3" onClick={ () => { setShow(!show) }}  > Show / Hide  { JSON.stringify( show ) } </button>

        </div>
    )
}
