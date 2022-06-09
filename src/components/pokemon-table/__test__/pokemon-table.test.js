import React from 'react'
import { render, screen } from "@testing-library/react"
import PokemonTable from '../PokemonTable'

describe("Pokemon table", () => {
  it("must display the headers of the table", () => {
    render(<PokemonTable />)

  })

  it("must get the info from the API", () => {
    render(<PokemonTable />)

  })

  it("must display the info in their corresponding columns", () => {
    render(<PokemonTable />)

  })

  it("It should display a new pokemon in another row", () => {
    render(<PokemonTable />)

  })

  describe("Each pokemon must have two buttons to edit and remove with a unique id", () => {
    it("Each pokemon must have two buttons", () => {
      render(<PokemonTable />)

    })
    it("The id must be unique", () => {
      render(<PokemonTable />)

    })
  })
})