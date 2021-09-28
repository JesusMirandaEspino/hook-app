import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../components/08-useReducer/TodoAdd';


describe( 'Pruebas con <TodoAdd />', () => {

    const  handleAddTodo = jest.fn();

    const wrappers = shallow( <TodoAdd  handleAddTodo={ handleAddTodo}  /> );

    test( 'Debe de mostrar correctamente', () => {

        expect( wrappers ).toMatchSnapshot();

    });

    test( 'No debe de llamar addTodo', () => {

        const formSumit = wrappers.find( 'form' ).prop('onSubmit');

        formSumit( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });


    test( 'Debe de llamar la funcion handleAddTodo', () => {

        const value = 'Aprender React';

        wrappers.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSumit = wrappers.find( 'form' ).prop('onSubmit');

        formSumit( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any( Number )
        });

        expect( wrappers.find( 'input' ).prop('value') ).toBe('');


    });


});