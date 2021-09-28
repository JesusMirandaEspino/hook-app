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


});