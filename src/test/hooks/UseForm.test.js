import { act, renderHook } from '@testing-library/react-hooks';
import { UseForm } from '../../Hooks/UseForm';

describe( 'Pruebas con el UseForm', () => {

    const initialForm = {
        name: 'jesus',
        email: 'jesus@gmail.com'
    };

    test( 'Debe de regresar un formulario por defecto', () => {

        const { result }  = renderHook( () => UseForm(initialForm) );
        const [ values, handleInpuntChange, reset ] = result.current;


        expect(values ).toEqual( initialForm );
        expect( typeof handleInpuntChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });


    test( 'Debe de cambiar el valor del formulario', () => {
        const { result }  = renderHook( () => UseForm(initialForm) );
        const [ , handleInpuntChange ] = result.current;

        act( () => {
            handleInpuntChange( {
                target: {
                name: 'name',
                value: 'Miriam'
                }
            })
        });

        const [ values ] = result.current;

        expect( values ).toEqual( { ...initialForm, name: 'Miriam'} );

    });


    test( 'Debe de re-establecer el formulario con RESET', () => {
        const { result }  = renderHook( () => UseForm(initialForm) );
        const [ , handleInpuntChange, reset ] = result.current;

        act( () => {
            handleInpuntChange( {
                target: {
                name: 'name',
                value: 'Miriam'
                }
            });

            reset();

        });



        const [ values ] = result.current;

        expect( values ).toEqual( initialForm );
    });


});