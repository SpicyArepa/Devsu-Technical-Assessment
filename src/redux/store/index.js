import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from '../features/pokemon/pokemonSlice'

const store = configureStore({
    reducer: {
        pokemon : pokemonSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload'],
            },
        }),
})

export default store
