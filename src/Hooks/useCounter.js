import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    const [ state, useState ] =  useState(initialState);

    const Increment = () => {
        useState( state + 1 );
    }

    const Decrement = () => {
        useState( state - 1 );
    }


    return {
        state,
        Increment,
        Decrement
    }

}