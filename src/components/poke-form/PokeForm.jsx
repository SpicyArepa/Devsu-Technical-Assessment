import React, { useEffect, useState } from "react";
import PrimaryButton from "../primary-button/PrimaryButton";
import validate from "./validate";

const PokeForm = ( { cb } ) => {

  const [error,setError] = useState({ error : 'empty form'})
  const initialInput = {
    name : '',
    image : '',
    attack: 0,
    defense: 0
  }
  const [input,setInput] = useState(initialInput)
  
  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(()=> {

    setError(validate(input))
    
  },[input])

  return (
    <form onSubmit={cb} onChange={handleChange}>
    <h3>Nuevo Pokemon</h3>
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" role={'name'}/>
    </div>

    <div>
      <label htmlFor="image">Imagen:</label>
      <input type="text" id="image" role={'image'}/>
    </div>
    <div>

      <label htmlFor="attack">Ataque:</label>
      <input type="range" id="attack" role={'attack'} min="0" max="100"/>
    </div>

    <div>
      <label htmlFor="defense">Defensa:</label>
      <input type="range" id="defense" role={'defense'} min="0" max="100"/>
    </div>

    <div role={'save-button'}>
      <PrimaryButton text={'Guardar'} disable={Object.values(error).length > 1} type='submit'/>
    </div>

    <div role={'cancel-button'}>
      <PrimaryButton text={'Cancelar'}/>
    </div>
    </form>
  );
};

export default PokeForm;
