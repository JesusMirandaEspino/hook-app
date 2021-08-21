import React, { useRef } from 'react'
import '../../components/02-useEffect/effects.css';


export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick  = () => {
        inputRef.current.select();
    }

    return (

        <div>

            <h1>Use focus</h1>

            <hr/>


            <label  for="" className="form-control " > Su nombre </label>
            <input ref={ inputRef } className="form-control " />


            <button className="btn btn-outline-primary mt-4"  onClick={handleClick} >Focus</button>


        </div>

    );


}





