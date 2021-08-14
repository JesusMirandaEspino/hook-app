import React from 'react';
import { useCounter } from '../../Hooks/UseCounter';

import './counter.css';

export const CounterWithCustomHook = () =>  {

    const { counter,  increment, decrement } = useCounter( 100 );

    return (
        <>

        <h1> Counter with Hook { counter } </h1>
        <hr/>

        <button className="btn btn-primary" onClick={ increment }> + 1</button>
        <button className="btn btn-primary" onClick={ decrement }> - 1</button>

        </>

    );

}