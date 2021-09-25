
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { demoTodos, newTodo } from '../fixture/demoTodo';
import { TodoReducer } from '../../components/08-useReducer/TodoReducer';



describe('Pruebas con <TodoReducer />', () => {




    test('Debe de retornar el estado por defecto ', () => {

        const state = TodoReducer(  demoTodos, {} );
        expect( state ).toEqual( demoTodos );

    });


    test('Debe de retornar el estado mas el nuevo todo', () => {


        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = TodoReducer(  demoTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );

    })


})