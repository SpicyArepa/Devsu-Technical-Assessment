import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const ID_AUTHOR= 1
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=${ID_AUTHOR}`

export const createPokemon = createAsyncThunk(
    'pokemon/createPokemon',
    async (pokemonData) => {
        try{
            const poke = await axios.post(API_ROUTE,pokemonData)
            return poke.data
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraCreatePokemon = {
    [createPokemon.pending]: (state,action) => {
        state.created = 'loading'
    },
    [createPokemon.fulfilled]: (state, action) => {
        state.created = 'success'
        state.form = false
    },
    [createPokemon.rejected]: (state) => {
        state.created = 'failed'
    },
}