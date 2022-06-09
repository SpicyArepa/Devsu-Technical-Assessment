import React from 'react'
import {findByRole, render, screen, within} from "@testing-library/react"
import PokemonTable from '../PokemonTable'

describe("Pokemon table", () => {
  it("At the top must display a table header with 1 row and 5 columns",async () => {
    render(<PokemonTable />);
    expect(await screen.findAllByRole('table-header-row')).toHaveLength(1)
    expect(await screen.findAllByRole('table-header-column')).toHaveLength(5)
  })

  it("must display the headers of the table", async () => {
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
      const Psyduck = {
        id: 7611,
        name: 'Psyduck',
        image: 'https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg',
        type: 'fire',
        hp: 100,
        attack: 50,
        defense: 30
      }
    it("must display the info in their corresponding columns", async () => {
      render(<PokemonTable />)
      // https://pokemon-pichincha.herokuapp.com/pokemons/7612 get Bulbasaur1
      const [Poke] = await screen.findAllByRole('Pokemon')
      const [Nombre,Imagen,Ataque,Defensa] = await within(Poke).findAllByRole('stat')
      expect(Nombre.textContent).toBe(Psyduck.name)
      expect(Imagen.textContent).toBe(Psyduck.image)
      expect(Ataque.textContent).toBe(Psyduck.attack.toString())
      expect(Defensa.textContent).toBe(Psyduck.defense.toString())
    })

    it("It should display a new pokemon in another row", async () => {
      render(<PokemonTable />)
      // https://pokemon-pichincha.herokuapp.com/pokemons/7611 get Psyduck
      const [Poke1,Poke2] = await screen.findAllByRole('Pokemon')
      const [firstsName] = await within(Poke1).findAllByRole('stat')
      const [secondName] = await within(Poke2).findAllByRole('stat')
      expect(firstsName.textContent).not.toBe(secondName.textContent)
    })

    describe("Each pokemon must have two buttons to edit and remove with a unique id", () => {
      it("Each pokemon must have two icon-buttons", async () => {
        render(<PokemonTable />)
        const [Poke1] = await screen.findAllByRole('Pokemon')
        const [Edit,Remove] = await within(Poke1).findAllByRole('button')
        expect(await within(Edit).findByAltText('edit'))
        expect(await within(Remove).findByAltText('remove'))

      })
      xit("The id must be unique", () => {
        render(<PokemonTable />)

      })
    })
  })


})