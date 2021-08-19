import React from 'react'
import '../../components/02-useEffect/effects.css';
import {  Usefetch } from '../../Hooks/Usefetch';

export const MultipleCustomHooks = () => {

   const estado =  Usefetch( 'https://www.breakingbadapi.com/api/quotes/1' );

    console.log( estado );
    return (
        <div>
            <h1>Custom Hooks</h1>
        </div>
    )
}
