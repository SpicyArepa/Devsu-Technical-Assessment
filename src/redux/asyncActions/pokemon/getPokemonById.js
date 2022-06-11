import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/`

export const getPokemonById = createAsyncThunk(
    'pokemon/getPokemonById',
    async (id) => {
        try{
            return await axios.get(API_ROUTE+id)
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraGetPokemonById = {
    [getPokemonById.pending]: (state) => {
        state.status = 'loading'
    },
    [getPokemonById.fulfilled]: (state, action) => {
        state.status = 'success'
        state.pokemon = action.payload.data
        state.form = true
        state.edited = 'loading'
    },
    [getPokemonById.rejected]: (state) => {
        state.status = 'failed'
    },
}
