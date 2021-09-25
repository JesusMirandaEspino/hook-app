import React from 'react'
import { TodoListItem } from '../../components/08-useReducer/TodoListItem';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos, newTodo } from '../fixture/demoTodo';

describe('Pruebas con <TodoListItem />', () => {



    const HandleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrappers = shallow( <TodoListItem  todo={demoTodos[0] } index={1} HandleDelete={HandleDelete} handleToggle={handleToggle } /> );

    test('Debe mostrarse correctamente ', () => {

        expect( wrappers ).toMatchSnapshot();

    });


    test('Debe de llamar la funcion handleDelete', () => {
        
        wrappers.find('button').simulate('click');
        expect( HandleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });


    test('Debe de llamar la funcion ', () => {
        
        wrappers.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });


    test('Debe mostrar el texto correctamente ', () => {
        
        const p = wrappers.find('p');

        expect( p.text().trim() ).toBe( `2 .- ${  demoTodos[0].desc }` );
    });


    test('Debe tener la clase complete si el TODO.done = true  ', () => {

        const todo = demoTodos[0];

        todo.done = true;
        
        const wrappers = shallow( <TodoListItem  todo={ todo }  /> );

        expect( wrappers.find('p').hasClass('complete') ).toBe(true);
    });

});