import React from 'react'
import {render, screen, within} from "@testing-library/react"
import PokemonTable from '../PokemonTable'

describe("Pokemon table", () => {
  xit("At the beginning must display a table with 1 row and 5 columns",async () => {
    render(<PokemonTable />);
    expect(await screen.findAllByRole('table-header-row')).toHaveLength(1)
    expect(await screen.findAllByRole('table-header-column')).toHaveLength(5)
  })

  xit("must display the headers of the table", async () => {
    render(<PokemonTable />)
    const [Nombre,Imagen,Ataque,Defensa,Acciones] =
      await screen.findAllByRole('table-header-column')
    expect(Nombre.textContent).toBe('Nombre')
    expect(Imagen.textContent).toBe('Imagen')
    expect(Ataque.textContent).toBe('Ataque')
    expect(Defensa.textContent).toBe('Defensa')
    expect(Acciones.textContent).toBe('Acciones')
  })

  describe("must get the info from the API", () => {
    it("must display the info in their corresponding columns", async () => {
      const Psyduck = {
        id: 7611,
        name: 'Psyduck',
        image: 'https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg',
        type: 'fire',
        hp: 100,
        attack: 50,
        defense: 30
      }
      render(<PokemonTable />)
      // https://pokemon-pichincha.herokuapp.com/pokemons/7611 get Psyduck
      const Poke = await screen.findByRole('Pokemon')
      const [Nombre,Imagen,Ataque,Defensa] = await within(Poke).findAllByRole('stat')
      expect(Nombre.textContent).toBe(Psyduck.name)
      expect(Imagen.textContent).toBe(Psyduck.image)
      expect(Ataque.textContent).toBe(Psyduck.attack.toString())
      expect(Defensa.textContent).toBe(Psyduck.defense.toString())
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


})