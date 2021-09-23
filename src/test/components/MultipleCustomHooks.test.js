import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

import { Usefetch } from '../../Hooks/Usefetch';
jest.mock(  '../../Hooks/Usefetch' );


import { useCounter } from '../../Hooks/UseCounter';
jest.mock(  '../../Hooks/UseCounter' );

describe( 'Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        } );
    } );



    test( 'Debe de mostrarse correctamente', () => {


        Usefetch.mockReturnValue({
        data: null,
        loading: true,
        error: null
    });

        let wrappers = shallow( <MultipleCustomHooks /> );

        expect( wrappers ).toMatchSnapshot();

    });


    test( 'Debe de mostrar la nueva informacion', () => {

        Usefetch.mockReturnValue({
            data: [ { author: 'Jesus', quote: 'Hola Mundo' } ],
            loading: false,
            error: null
        });

        const wrappers = shallow( <MultipleCustomHooks /> );

        expect( wrappers.find('.alert').exists() ).toBe(false);
        expect( wrappers.find('.mb-0').text().trim() ).toBe('Hola Mundo');
        expect( wrappers.find('.blockquote-footer').text().trim() ).toBe('Jesus');

    });


});