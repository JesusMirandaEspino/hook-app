import React, {useState, } from 'react'
import '../../components/02-useEffect/effects.css';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';



export const RealExampleRef = () => {


    const [ show, setShow ] = useState(false);


    return (

        <dvi>

            <h1>Real Example Ref</h1>

            <hr/>

            {  show && <MultipleCustomHooks />}



            <button className="btn btn-primary mt-5"  onClick={ () => { setShow( !show ); } }   > Show/Hide  </button>

        </dvi>




    );

}