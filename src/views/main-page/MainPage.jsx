import React, { useEffect, useState } from 'react'
import PokeForm from '../../components/poke-form/PokeForm'
import PokemonTable from "../../components/pokemon-table/PokemonTable"
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import addIcon from '../../assets/add.png'
import { useDispatch, useSelector } from 'react-redux'
import { cleanPokemon, openForm,getPokemons } from '../../redux/features/pokemon/pokemonSlice'
import PokeSearch from '../../components/poke-search/PokeSearch'

const MainPage = () => {
  const dispatch = useDispatch()
  const {form,pokemon,deleted} = useSelector(state => state.pokemon)
  const add = () => {
    pokemon ? dispatch(cleanPokemon()) : null
    !form ? dispatch(openForm()) : null
  }
  return (<>
    <h3>Listado de Pokemon</h3>
    <div>
    <PokeSearch/>
    <PrimaryButton text={'Nuevo'} icon={addIcon} cb={add}/>
    </div>
    <PokemonTable/>
    { form ? <PokeForm /> : null }
  </>
  )
}

export default MainPage