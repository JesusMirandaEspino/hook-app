import { renderHook } from '@testing-library/react-hooks';
import { Usefetch } from '../../Hooks/useFetch';
describe('Pruebas en useFetch', () => {

    test( 'Debe de traer la informacion por defecto', () => {

        const {  result } = renderHook( () => Usefetch(`https://www.breakingbadapi.com/api/quotes/1`) );

        const { data, loading, error } =  result.current;

        expect(data).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);


    });



});