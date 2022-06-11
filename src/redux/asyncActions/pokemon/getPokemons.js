import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const ID_AUTHOR= 1
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=${ID_AUTHOR}`

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async () => {
        try{
            return await axios.get(API_ROUTE)
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraGetPokemons = {
    [getPokemons.pending]: (state) => {
        state.status = 'loading'
    },
    [getPokemons.fulfilled]: (state, action) => {
        state.status = 'success'
        state.pokemons = action.payload.data
    },
    [getPokemons.rejected]: (state) => {
        state.status = 'failed'
    },
}
