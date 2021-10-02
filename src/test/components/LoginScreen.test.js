import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe( 'Pruebas con <LoginScreen /> ', () => {

    const user = {
        name: 'Jesus',
        email: 'jesus@gmail.com'
    }

    const wrapper = mount(

        <UserContext.Provider value={{ user }}>

            <LoginScreen />

        </UserContext.Provider>
        
        );



    test( 'Debe de mostrarlo correctamente', () => {

        expect(  wrapper ).toMatchSnapshot();

    });

});