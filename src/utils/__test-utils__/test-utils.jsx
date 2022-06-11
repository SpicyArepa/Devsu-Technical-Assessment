import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import pokemonSlice from '../../redux/features/pokemon/pokemonSlice'

const middleware = (getDefaultMiddleware) =>
getDefaultMiddleware({
    serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload'],
    },
})

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { pokemon: pokemonSlice }, preloadedState, middleware })
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }