import React, { useState } from 'react'
import PokeForm from '../../components/poke-form/PokeForm'
import PokemonTable from "../../components/pokemon-table/PokemonTable"
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import addIcon from '../../assets/add.png'
import { useDispatch, useSelector } from 'react-redux'
import { cleanPokemon, openForm } from '../../redux/features/pokemon/pokemonSlice'

const MainPage = () => {
  const dispatch = useDispatch()
  const {form,pokemon} = useSelector(state => state.pokemon)
  const add = () => {
    pokemon ? dispatch(cleanPokemon()) : null
    !form ? dispatch(openForm()) : null
  }
  return (<>
    <h3>Listado de Pokemon</h3>
    <PrimaryButton text={'Nuevo'} icon={addIcon} cb={add}/>
    <PokemonTable/>
    { form ? <PokeForm /> : null }
  </>
  )
}

export default MainPage