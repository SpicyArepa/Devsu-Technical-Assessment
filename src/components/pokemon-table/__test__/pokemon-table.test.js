import React from 'react'
import { render, screen } from "@testing-library/react"
import PokemonTable from '../PokemonTable'

describe("Pokemon table", () => {
  it("At the beginning must display a table with 1 row and 5 columns",async () => {
    render(<PokemonTable />);
    expect(await screen.findAllByRole('table-header-row')).toHaveLength(1)
    expect(await screen.findAllByRole('table-header-column')).toHaveLength(5)
  })

  xit("must display the headers of the table", () => {
    render(<PokemonTable />)

  })

  xit("must get the info from the API", () => {
    render(<PokemonTable />)

  })

  xit("must display the info in their corresponding columns", () => {
    render(<PokemonTable />)

  })

  xit("It should display a new pokemon in another row", () => {
    render(<PokemonTable />)

  })

  xdescribe("Each pokemon must have two buttons to edit and remove with a unique id", () => {
    it("Each pokemon must have two buttons", () => {
      render(<PokemonTable />)

    })
    it("The id must be unique", () => {
      render(<PokemonTable />)

    })
  })
})