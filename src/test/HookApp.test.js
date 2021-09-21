import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';



describe( 'Pruebas con el componente <HookApp />', ()  =>  {

    test( 'Debe mostrarse correctamente', () => {

        let wrappers = shallow( <HookApp />);

        expect( wrappers ).toMatchSnapshot();

    });



});