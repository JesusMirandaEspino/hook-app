import React from 'react'
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

import { demoTodos } from '../fixture/demoTodo';
import { TodoApp } from '../../components/08-useReducer/TodoApp';

    


describe( 'Pruebas en  <TodoApp />', () => {

    const wrappers = shallow(  <TodoApp /> );
    Storage.prototype.setItem = jest.fn( ()=>{} );


    test( 'Debe de mostrarse correctamente', () => {

        expect( wrappers ).toMatchSnapshot();
        
    });


    test( 'Debe de agregar Un TODO', () => {

        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find( 'TodoAdd' ).prop( 'handleAddTodo' )( demoTodos[0] );
            wrapper.find( 'TodoAdd' ).prop( 'handleAddTodo' )( demoTodos[1] );
        });

        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Todo App  ( 2  )' );
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });

    test( 'Debe de eliminar un TODO', () => {

        wrappers.find('TodoAdd').prop( 'handleAddTodo' )( demoTodos[0] );
        wrappers.find('TodoList').prop( 'HandleDelete' )( demoTodos[0].id );

        expect( wrappers.find( 'h1' ).text().trim() ).toBe( 'Todo App  ( 0  )' );

    });


} );