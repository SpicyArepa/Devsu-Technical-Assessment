import React, { useEffect, useState } from "react";
import PrimaryButton from "../primary-button/PrimaryButton";
import {validate, compareData }from "./validate";
import save from '../../assets/save.png'
import cancel from '../../assets/cancel.png'
import { useDispatch, useSelector } from "react-redux";
import { closeForm, createPokemon, editPokemon } from "../../redux/features/pokemon/pokemonSlice";
import styles from './poke-form.module.css'

const PokeForm = ( ) => {
  const dispatch = useDispatch()
  const { pokemon } = useSelector(state => state.pokemon)
  const close = (e) => {
    e.preventDefault()
    dispatch(closeForm())
  }

  useEffect(()=>{
    setInput(initialInput)
  },[pokemon])

  const [error,setError] = useState({ error : 'empty form'})

  const initialInput = {
    name : pokemon.name ? pokemon.name : '',
    image : pokemon.image ? pokemon.image : '',
    attack: pokemon.attack ? pokemon.attack : 0,
    defense: pokemon.defense ? pokemon.defense : 0,
    idAuthor: 1,
    hp: 100,
    type: 'water'
  }

  const [input,setInput] = useState(initialInput)
  const handleChange = function (e) {
    let value = e.target.value
    e.target.id === 'attack' ? value = Number(e.target.value) : null
    e.target.id === 'defense' ? value = Number(e.target.value) : null
    setInput({
      ...input,
      [e.target.id]: value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault()
    const id = pokemon.id
    !id ? dispatch(createPokemon(input)) : dispatch(editPokemon({id,pokemonData:input}))
  }

  let saveDisable = Object.values(error).length >= 1 || (pokemon.name ? compareData(input,pokemon) : false)
  useEffect(()=> {

    setError(validate(input))
  },[input])

  return (
    <form onSubmit={handleSubmit} role={'form'} className={styles.container}>
    <h3> { !pokemon.name ? 'Nuevo Pokemon' : 'Editar Pokemon'}</h3>

    <div  className={styles.inputs}>
      <div className={`${styles.name} ${error.name ? styles.error : null}`}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" role={'name'} value={input.name} onChange={handleChange} placeholder={'nombre'}/>
      </div>

      <div className={`${styles.attack} ${error.attack ? styles.error : null}`}>
        <label htmlFor="attack">Ataque:</label>
        <input type="range" id="attack" role={'attack'} min="0" max="100" onChange={handleChange} value={input.attack}/>
      </div>

      <div className={`${styles.image} ${error.image ? styles.error : null}`}>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" role={'image'} value={input.image} onChange={handleChange} placeholder={'url'}/>
      </div>

      <div className={`${styles.defense} ${error.defense ? styles.error : null}`}>
        <label htmlFor="defense">Defensa:</label>
        <input type="range" id="defense" role={'defense'} min="0" max="100" onChange={handleChange} value={input.defense}/>
      </div>

    </div>
    <div className={styles.buttons}>
      <div role={'save-button'}>
        <PrimaryButton icon={save} text={'Guardar'} disable={saveDisable} type='submit'/>
      </div>

      <div role={'cancel-button'}>
        <PrimaryButton icon={cancel} text={'Cancelar'} cb={close}/>
      </div>
    </div>
    </form>
  );
};
export default PokeForm;
