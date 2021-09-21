
import {  renderHook, act } from '@testing-library/react-hooks'

import { useCounter } from '../../Hooks/UseCounter';


describe( 'Pruebas con el componente <useCounter />', () => {

    test( 'Debe retonar las funciones correctamente', () => {
        const { result } = renderHook( () => useCounter(10) );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });



    test( 'Debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(10) );

        const { increment  } = result.current;

        act( () => {
            increment();
        });

        const { counter  } = result.current;
        expect( counter ).toBe( 11 );

    });


    test( 'Debe de decrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(10) );

        const { decrement  } = result.current;

        act( () => {
            decrement();
        });

        const { counter  } = result.current;
        expect( counter ).toBe( 9 );

    });

    test( 'Debe de resetear el valor ', () => {

        const { result } = renderHook( () => useCounter(10) );

        const { increment, reset  } = result.current;

        act( () => {
            increment();
            reset();

        });

        const { counter  } = result.current;
        expect( counter ).toBe( 10 );

    });


});