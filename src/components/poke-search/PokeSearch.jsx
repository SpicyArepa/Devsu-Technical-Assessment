import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/asyncActions/pokemon/getPokemons";
import { searchPokemons } from "../../redux/asyncActions/pokemon/searchPokemons";
import lupa from '../../assets/lupa.png'

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
    <div>
      <div>
        <img src={lupa} alt="icon" role={'icon'} width={25}/>
      </div>
      <div>
        <input type="search" onKeyPress={handlePress} placeholder="Buscar" role={'input-search'} onChange={handleChange} value={search}/>
      </div>
    </div>
  );
};
export default PokeSearch;
