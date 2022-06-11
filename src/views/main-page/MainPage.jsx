import React, { useState } from 'react'
import PokeForm from '../../components/poke-form/PokeForm'
import PokemonTable from "../../components/pokemon-table/PokemonTable"
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import add from '../../assets/add.png'
import closeForm from '../actions/closeForm'

const MainPage = () => {
  const [form,setForm] = useState(false)
  return (<>
    <h3>Listado de Pokemon</h3>
    <PrimaryButton cb={() => setForm(true)} text={'Nuevo'} icon={add}/>
    <PokemonTable/>
    { form ? <PokeForm closeFunction={(e) => closeForm(e,setForm)} /> : null }
  </>
  )
}

export default MainPage