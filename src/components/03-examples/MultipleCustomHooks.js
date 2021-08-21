import React from 'react'
import '../../components/02-useEffect/effects.css';
import {  Usefetch } from '../../Hooks/Usefetch';

export const MultipleCustomHooks = () => {

    const { loading, data } =  Usefetch( 'https://www.breakingbadapi.com/api/quotes/1' );
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBag Quotes </h1>

            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center" >
                            <p>Loading...</p>
                    </div>
                )
                :
                (
                    <blockquote  className="blockquote text-right">
                        <p className="mb-0" > { quote }   </p>
                        <footer className="blockquote-footer mt-2" >{ author }</footer>
                    </blockquote>
                )
            }
        </div>

    )
}
