import React, { useEffect, useState } from "react";
import PrimaryButton from "../primary-button/PrimaryButton";
import {validate, compareData }from "./validate";

const PokeForm = ( { cb, closeFunction, pokemonData } ) => {

  const [error,setError] = useState({ error : 'empty form'})
  const initialInput = {
    name : pokemonData ? pokemonData.name : '',
    image : pokemonData ? pokemonData.image : '',
    attack: pokemonData ? pokemonData.attack : '',
    defense: pokemonData ? pokemonData.defense : ''
  }

  const [input,setInput] = useState(initialInput)
  
  const handleChange = function (e) {
    let value
    isNaN(e.target.value) ? value = e.target.value : value = Number(e.target.value)
    setInput({
      ...input,
      [e.target.id]: value,
    });
  };

  useEffect(()=> {

    setError(validate(input))
    
  },[input])
  let saveDisable = Object.values(error).length > 1 || (pokemonData ? compareData(input,pokemonData) : false)
  return (
    <form onSubmit={(e) => cb(e,input)}>
    <h3> {pokemonData ? 'Editar Pokemon' : 'Nuevo Pokemon'}</h3>
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" role={'name'} value={input.name} onChange={handleChange}/>
    </div>

    <div>
      <label htmlFor="image">Imagen:</label>
      <input type="text" id="image" role={'image'} value={input.image} onChange={handleChange}/>
    </div>
    <div>

      <label htmlFor="attack">Ataque:</label>
      <input type="range" id="attack" role={'attack'} min="0" max="100" onChange={handleChange} value={input.attack}/>
    </div>

    <div>
      <label htmlFor="defense">Defensa:</label>
      <input type="range" id="defense" role={'defense'} min="0" max="100" onChange={handleChange} value={input.defense}/>
    </div>

    <div role={'save-button'}>
      <PrimaryButton text={'Guardar'} disable={saveDisable} type='submit'/>
    </div>

    <div role={'cancel-button'}>
      <PrimaryButton text={'Cancelar'} cb={closeFunction}/>
    </div>
    </form>
  );
};

export default PokeForm;
