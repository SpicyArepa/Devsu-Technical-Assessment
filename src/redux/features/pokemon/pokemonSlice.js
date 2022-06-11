import { createSlice } from "@reduxjs/toolkit";
import {
  getPokemons,
  extraGetPokemons,
} from "../../asyncActions/pokemon/getPokemons";
import {
  getPokemonById,
  extraGetPokemonById,
} from "../../asyncActions/pokemon/getPokemonById";
import {
  createPokemon,
  extraCreatePokemon,
} from "../../asyncActions/pokemon/createPokemon";
import {
  editPokemon,
  extraEditPokemon,
} from "../../asyncActions/pokemon/editPokemon";
import {
  deletePokemon,
  extraDeletePokemon,
} from "../../asyncActions/pokemon/deletePokemon";

const initialState = {
  pokemons: [],
  pokemon: {},
  status: "loading",
  error: "",
  form: false,
  created: "loading",
  edited: "loading",
  deleted: "loading",
};

const pokemonSlice = createSlice({
  name: "pokemon", // name of the state
  initialState,
  reducers: {
    cleanPokemon: (state) => {
      state.pokemon = {};
    },
    openForm: (state) => {
      state.form = true;
      //state.created = "loading";
    },
    closeForm: (state) => {
      state.form = false;
      state.pokemon = {};
    },
  },
  extraReducers: {
    ...extraGetPokemons,
    ...extraGetPokemonById,
    ...extraCreatePokemon,
    ...extraEditPokemon,
    ...extraDeletePokemon,
  },
});

export {
  getPokemons,
  getPokemonById,
  createPokemon,
  editPokemon,
  deletePokemon,
};
export const { cleanPokemon, openForm, closeForm } = pokemonSlice.actions;
export default pokemonSlice.reducer;
