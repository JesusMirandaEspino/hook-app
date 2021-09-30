import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { TodoApp } from '../../components/08-useReducer/TodoApp';

    const wrappers = shallow(  <TodoApp /> );

describe( 'Pruebas en  <TodoApp />', () => {


    test( 'Debe de mostrarse correctamente', () => {


        expect( wrappers ).toMatchSnapshot();

    });


} );