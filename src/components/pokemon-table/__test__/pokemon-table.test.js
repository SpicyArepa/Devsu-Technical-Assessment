import React from 'react'
import {render, screen, within} from '../../../utils/__test-utils__/test-utils'
import PokemonTable from '../PokemonTable'
import axios from 'axios'

xdescribe("Pokemon table", () => {
  
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
    let firstPoke
      beforeAll( async ()=>{
        [firstPoke] = (await axios.get("https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1")).data
      })

    it("must display the info in their corresponding columns", async () => {
      const {findAllByRole} = render(<PokemonTable />)
      const [Poke] = await findAllByRole('Pokemon')
      const [Nombre,Imagen,Ataque,Defensa] = await within(Poke).findAllByRole('stat')
      expect(Nombre.textContent).toBe(firstPoke.name)
      expect(await within(Imagen).findByRole("img")).toHaveAttribute('src', firstPoke.image)
      expect(Ataque.textContent).toBe(firstPoke.attack.toString())
      expect(Defensa.textContent).toBe(firstPoke.defense.toString())
    })

    it("It should display a new pokemon in another row", async () => {
      const {findAllByRole} = render(<PokemonTable />)
      const [Poke1,Poke2] = await findAllByRole('Pokemon')
      const [firstsName] = await within(Poke1).findAllByRole('stat')
      const [secondName] = await within(Poke2).findAllByRole('stat')
      expect(firstsName.textContent).not.toBe(secondName.textContent)
    })

    describe("Each pokemon must have two icon-buttons to edit and remove with a unique id", () => {
      it("Each pokemon must have two icon-buttons", async () => {
        const {findAllByRole} = render(<PokemonTable />)
        const [Poke1,Poke2] = await findAllByRole('Pokemon')
        const [Edit1,Remove1] = await within(Poke1).findAllByRole(/button/i)
        expect(await within(Edit1).findByAltText('edit'))
        expect(await within(Remove1).findByAltText('remove'))
        const [Edit2,Remove2] = await within(Poke2).findAllByRole(/button/i)
        expect(await within(Edit2).findByAltText('edit'))
        expect(await within(Remove2).findByAltText('remove'))
      })
      it("The id must be unique", async () => {
        const {findAllByRole} = render(<PokemonTable />)
        const [Poke1,Poke2] = await findAllByRole('Pokemon')
        const [Edit1,Remove1] = await within(Poke1).findAllByRole(/button/i)
        const [Edit2,Remove2] = await within(Poke2).findAllByRole(/button/i)
        expect(Edit1.dataset.testid).not.toBe(Edit2.dataset.testid)
        expect(Remove1.dataset.testid).not.toBe(Remove2.dataset.testid)
      })
    })
  })


})