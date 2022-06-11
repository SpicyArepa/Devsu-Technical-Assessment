import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const ID_AUTHOR= 1
const API_ROUTE = `https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=${ID_AUTHOR}`

export const searchPokemons = createAsyncThunk(
    'pokemon/searchPokemons',
    async (name) => {
        try{
            const pokemons = await axios.get(API_ROUTE)
            const regex = RegExp(name,'i')
            return pokemons.data.filter(({name}) => name.match(regex))
          } catch (err) {
            console.error(err)
          } 
    }
)

export const extraSearchPokemons = {
    [searchPokemons.pending]: (state) => {
        state.status = 'loading'
    },
    [searchPokemons.fulfilled]: (state, action) => {
        state.search = 'success'
        state.pokemons = action.payload
    },
    [searchPokemons.rejected]: (state) => {
        state.status = 'failed'
    },
}