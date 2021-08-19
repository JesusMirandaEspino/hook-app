import { useState, useEffect } from 'react';

export const Usefetch = ( url  ) => {

    const [ estado, setEstado ] = useState( { data: null, loading: true, error: null }  );


    useEffect( () => {

        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
            setEstado( {
                loading: false,
                error: null,
                data
            } );
        } );

    }, [url])

    return estado;

}
