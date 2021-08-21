import React, {useLayoutEffect, useRef, useState} from 'react'
import './layout.css';
import {  Usefetch } from '../../Hooks/Usefetch';
import { useCounter } from '../../Hooks/UseCounter';

export const  Layout = () => {

    const { counter, increment } = useCounter(1);

    const {  data } =  Usefetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const {  quote } = !!data && data[0];

    const pTag =  useRef();

    const [ boxSize, setBoxsize ] = useState( {} );

    useLayoutEffect( () => {

        setBoxsize( pTag.current.getBoundingClientRect() );

    }, [quote] );


    return (
        <div>
            <h1>Layout  Effect</h1>

            <hr/>



                    <blockquote  className="blockquote text-right">
                        <p className="mb-0"  ref={ pTag } > { quote }   </p>
                    </blockquote>


                <pre>

                    { JSON.stringify( boxSize, null, 3 ) }

                </pre>

            <button className="btn btn-primary mt-5" onClick={ increment } > Siguiente Frase </button>


        </div>

    )
}
