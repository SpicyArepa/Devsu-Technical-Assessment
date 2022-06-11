import { createSlice } from '@reduxjs/toolkit'
import {
    getPokemons,
    extraGetPokemons,
} from '../../asyncActions/pokemon/getPokemons'
import {
    getPokemonById,
    extraGetPokemonById,
} from '../../asyncActions/pokemon/getPokemonById'

const initialState = {
    pokemons : [],
    pokemon : {},
    status: 'loading',
    error: '',
}

const pokemonSlice = createSlice({
    name: 'pokemon', // name of the state
    initialState,
    reducers: {
        cleanPokemon: (state) => {
            state.pokemon = {}
        },
    },
    extraReducers: { ...extraGetPokemons, ...extraGetPokemonById },
})

export { getPokemons, getPokemonById }
export const { cleanPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
