
import {  renderHook } from '@testing-library/react-hooks'

import { useCounter } from '../../Hooks/UseCounter';


describe( 'Pruebas con el componente <useCounter />', () => {

    test( 'Debe retonar las funciones correctamente', () => {
        const { result } = renderHook( () => useCounter(10) );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });



});