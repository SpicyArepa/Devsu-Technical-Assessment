import React from "react";
import { useDispatch } from "react-redux";
import edit from '../../assets/edit.png'
import remove from '../../assets/remove.png'
import { getPokemonById } from "../../redux/features/pokemon/pokemonSlice";

const PokeRow = ( pokemon ) => {
  const dispatch = useDispatch()
  const handleEdit = (id) => {
    dispatch(getPokemonById(id))
  }

  return (
    <>
      <tr role={"Pokemon"}>
        <td role={"stat"}>{pokemon.name}</td>
        <td role={"stat"}><img src={pokemon.image} alt={`a picture of ${pokemon.name}`} width={50} ></img></td>
        <td role={"stat"}>{pokemon.attack}</td>
        <td role={"stat"}>{pokemon.defense}</td>
        <td role={"actions"}>
          <button data-testid={pokemon.id} role={'edit-button'} onClick={() => handleEdit (pokemon.id)}>
            <img src={edit} alt="edit" width={25}/>
          </button>
          <button data-testid={pokemon.id} role={'remove-button'}>
            <img src={remove} alt="remove" width={25}/>
          </button>
        </td>
      </tr>
    </>
  );
};

export default PokeRow;
