import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../components/04-useFocus/RealExampleRef';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

describe( 'Pruebas con </RealExampleRef >', () => {

    const wrappers = shallow( <RealExampleRef /> );

    test( 'Debe mostrarse correctamente', () => {
        expect( wrappers ).toMatchSnapshot();
        expect( wrappers.find( 'MultipleCustomHooks' ).exists() ).toBe(false);

    });


    test( 'Debe mostras correctamente <MultipleCustomHooks />', () => {

        wrappers.find( 'button' ).simulate('click');
        expect( wrappers.find( 'MultipleCustomHooks' ).exists() ).toBe(true);

    });


});