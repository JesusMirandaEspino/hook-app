import React from 'react'
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

import { demoTodos } from '../fixture/demoTodo';
import { TodoApp } from '../../components/08-useReducer/TodoApp';

    const wrappers = shallow(  <TodoApp /> );

describe( 'Pruebas en  <TodoApp />', () => {


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

    });


} );