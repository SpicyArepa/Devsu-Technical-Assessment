import React from "react";
import { fireEvent, render, within } from '../../../utils/__test-utils__/test-utils';
import PokeRow from "../PokeRow";
import store from "../../../redux/store";
import { getPokemons, getPokemonById } from "../../../redux/features/pokemon/pokemonSlice";
import {act} from 'react-test-renderer'


describe("Pokemon Row", () => {
  let Pokemons, component
  beforeAll( async ()=>{
    await store.dispatch(getPokemons())
    Pokemons = store.getState().pokemon.pokemons
    component = (
      <table>
        <tbody>
          <PokeRow
            {...Pokemons[0]}
          />
        </tbody>
      </table>
    )
  })

  it("Must show the data of one pokemon", async () => {
    const {findByRole} = render(component);
    const pokemon = await findByRole('Pokemon')
    const [Nombre, Imagen, Ataque, Defensa] = await within(pokemon).findAllByRole("stat");
    const [edit,remove] = await within(pokemon).findAllByRole(/button/i)
    expect(Nombre.textContent).toBe(Pokemons[0].name);
    expect(await within(Imagen).findByRole("img")).toHaveAttribute('src', Pokemons[0].image)
    expect(Ataque.textContent).toBe(Pokemons[0].attack.toString());
    expect(Defensa.textContent).toBe(Pokemons[0].defense.toString());
    expect(await within(edit).findByAltText("edit"));
    expect(await within(remove).findByAltText("remove"));
  });

  it("On click edit, must dispatch an action and modify the state pokemon", async () => {
    const {findByRole} = render(component);
    const pokemon = await findByRole('Pokemon')
    const edit = await within(pokemon).findByRole('edit-button');
    fireEvent.click(edit)
    setTimeout(() => {
      expect(store.getState().pokemon.pokemon).toEqual(Pokemons[0]);
    },500)
  });
});
