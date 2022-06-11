import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import edit from '../../assets/edit.png'
import remove from '../../assets/remove.png'
import { getPokemonById, deletePokemon } from "../../redux/features/pokemon/pokemonSlice";
import styles from './poke-row.module.css'

const PokeRow = ( pokemon ) => {
  const dispatch = useDispatch()
  const handleEdit = (id) => {
    dispatch(getPokemonById(id))
  }
  const handleDelete = (id) => {
    dispatch(deletePokemon(id))
  }

  return (
    <>
      <tr role={"Pokemon"}>
        <td role={"stat"}>{pokemon.name}</td>
        <td role={"stat"} className={styles.image}><img src={pokemon.image} alt={`a picture of ${pokemon.name}`} width={50} ></img></td>
        <td role={"stat"}>{pokemon.attack}</td>
        <td role={"stat"}>{pokemon.defense}</td>
        <td role={"actions"} className={styles.buttons}>
          <button data-testid={pokemon.id} role={'edit-button'} onClick={() => handleEdit (pokemon.id)}>
            <img src={edit} alt="edit"/>
          </button>
          <button data-testid={pokemon.id} role={'remove-button'} onClick={() => handleDelete (pokemon.id)}>
            <img src={remove} alt="remove"/>
          </button>
        </td>
      </tr>
    </>
  );
};

export default PokeRow;
