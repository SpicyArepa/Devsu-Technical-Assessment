import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeRow from "../poke-row/PokeRow";

const PokemonTable = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try{
      const apiPokemons = await axios.get("https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1")
      setPokemons(apiPokemons.data)
    } catch (err) {
      console.error(err)
    } 
  }

  useEffect(() => {
    getPokemons()
  }, []);

  return (
    <table>
      <thead>
        <tr role={"table-header-row"}>
          <th role={"table-header-column"}>Nombre</th>
          <th role={"table-header-column"}>Imagen</th>
          <th role={"table-header-column"}>Ataque</th>
          <th role={"table-header-column"}>Defensa</th>
          <th role={"table-header-column"}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.length > 1
          ? pokemons.map((pokemon,index) => {
              return <PokeRow 
                  id={pokemon.id}
                  name={pokemon.name}
                  img={pokemon.image}
                  atk={pokemon.attack}
                  def={pokemon.defense}
                  key={index}
                />
            })
          : null}
      </tbody>
    </table>
  );
};

export default PokemonTable;
