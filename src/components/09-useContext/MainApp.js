import React from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';


export const MainApp = () => {

    const user = {
        id:     12365879,
        name:   'Jesus',
        email:  'jesus@email.com'
    }


    return (
            <UserContext.Provider value={ user }  >

                <AppRouter />

            </UserContext.Provider>
    )
}
