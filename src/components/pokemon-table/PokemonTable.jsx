import React, { useState, useEffect } from "react";
import axios from "axios";

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
              return (
                <tr key={index} role={"Pokemon"}>
                  <td role={"stat"}>{pokemon.name}</td>
                  <td role={"stat"}>{pokemon.image}</td>
                  <td role={"stat"}>{pokemon.attack}</td>
                  <td role={"stat"}>{pokemon.defense}</td>
                  <td role={"actions"}>
                    <button data-testid={pokemon.id}>
                      <img src={"../../assets/edit.png"} alt="edit" />
                    </button>
                    <button data-testid={pokemon.id}>
                      <img src={"../../assets/remove.png"} alt="remove" />
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default PokemonTable;
