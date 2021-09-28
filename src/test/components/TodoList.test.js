
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../components/08-useReducer/TodoList';
import { demoTodos } from '../fixture/demoTodo';

describe( 'Pruebas con  <TodoList />', () => {

    const HandleDelete = jest.fn();
    const handleToggle = jest.fn();

const wrappers = shallow( <TodoList   todos={ demoTodos } HandleDelete={ HandleDelete } handleToggle={ handleToggle }  />);


    test( 'Debe de mostarse correctamente', () => {


        expect( wrappers ).toMatchSnapshot();

    } );


} );