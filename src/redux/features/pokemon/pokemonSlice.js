import { createSlice } from '@reduxjs/toolkit'
import {
    getPokemons,
    extraGetPokemons,
} from '../../asyncActions/pokemon/getPokemons'

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
    extraReducers: { ...extraGetPokemons },
})

export { getPokemons }
export const { cleanPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
