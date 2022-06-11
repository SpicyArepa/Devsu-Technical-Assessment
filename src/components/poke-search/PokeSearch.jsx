import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/asyncActions/pokemon/getPokemons";
import { searchPokemons } from "../../redux/asyncActions/pokemon/searchPokemons";
import lupa from '../../assets/lupa.png'
import styles from './poke-search.module.css'

const PokeSearch = ( ) => {
  const dispatch = useDispatch()
  const [search,setSearch] = useState('')
  const handlePress = (e) => {
    if (e.key === 'Enter') {
      search ? dispatch(searchPokemons(search)) : dispatch(getPokemons())
    }
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div >
        <img  className={styles.image} src={lupa} alt="icon" role={'icon'}/>
      </div>
      <div >
        <input className={styles.search} type="search" onKeyPress={handlePress} placeholder="Buscar" role={'input-search'} onChange={handleChange} value={search}/>
      </div>
    </div>
  );
};
export default PokeSearch;
