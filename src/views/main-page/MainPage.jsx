import React from 'react'
import PokeForm from '../../components/poke-form/PokeForm'
import PokemonTable from "../../components/pokemon-table/PokemonTable"
const MainPage = () => {
  
  return (<>
    <h3>Listado de Pokemon</h3>
    <PokemonTable/>
    <PokeForm />
  </>
  )
}

export default MainPage