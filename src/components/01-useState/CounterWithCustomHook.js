import React from 'react';
import { useCounter } from '../../Hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () =>  {

    const { state,  Increment, Decrement } = useCounter( 100 );

    return (
        <>

        <h1> Counter with Hook { state } </h1>
        <hr/>

        <button className="btn btn-primary" onClick={ Increment }> + 1</button>
        <button className="btn btn-primary" onClick={ Decrement }> - 1</button>

        </>

    );

}