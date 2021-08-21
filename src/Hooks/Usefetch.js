import { useState, useEffect, useRef } from 'react';

export const Usefetch = ( url  ) => {

    const [ estado, setEstado ] = useState( { data: null, loading: true, error: null }  );

    const isMounted = useRef(true);


    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect( () => {



        fetch(url)
        .then( resp => resp.json() )
        .then( data => {

            if( isMounted.current ){
                setEstado( {
                    loading: false,
                    error: null,
                    data
                } );
            }

        } );

    }, [url])

    return estado;

}
