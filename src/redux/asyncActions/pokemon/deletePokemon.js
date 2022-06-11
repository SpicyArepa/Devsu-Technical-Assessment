import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/`

export const deletePokemon = createAsyncThunk(
    'pokemon/deletePokemon',
    async (id) => {
        try{
            return await axios.delete(API_ROUTE+id)
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraDeletePokemon = {
    [deletePokemon.pending]: (state) => {
        state.deleted = 'loading'
    },
    [deletePokemon.fulfilled]: (state, action) => {
        state.deleted = 'success'
    },
    [deletePokemon.rejected]: (state) => {
        state.deleted = 'failed'
    },
}