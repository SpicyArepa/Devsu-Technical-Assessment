import React, { useEffect, useState } from 'react'
import PokeForm from '../../components/poke-form/PokeForm'
import PokemonTable from "../../components/pokemon-table/PokemonTable"
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import addIcon from '../../assets/add.png'
import { useDispatch, useSelector } from 'react-redux'
import { cleanPokemon, openForm,getPokemons } from '../../redux/features/pokemon/pokemonSlice'
import PokeSearch from '../../components/poke-search/PokeSearch'
import styles from './main-page.module.css'

const MainPage = () => {
  const dispatch = useDispatch()
  const {form,pokemon,deleted} = useSelector(state => state.pokemon)
  const add = () => {
    pokemon ? dispatch(cleanPokemon()) : null
    !form ? dispatch(openForm()) : null
  }
  return (<div className={styles.container}>
    <h3>Listado de Pokemon</h3>
    <div className={styles.topBar}>
    <PokeSearch/>
    <PrimaryButton text={'Nuevo'} icon={addIcon} cb={add}/>
    </div>
    <PokemonTable/>
    { form ? <PokeForm /> : null }
  </div>
  )
}

export default MainPage