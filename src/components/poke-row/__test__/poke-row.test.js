import React from "react";
import {
  fireEvent,
  render,
  within,
} from "../../../utils/__test-utils__/test-utils";
import PokeRow from "../PokeRow";
import store from "../../../redux/store";
import {
  getPokemons,
  getPokemonById,
} from "../../../redux/features/pokemon/pokemonSlice";
import { act } from "react-test-renderer";
import { Provider } from "react-redux";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Pokemon Row", () => {
  jest.setTimeout(20000)
  let Pokemons, component;
  beforeAll(async () => {
    await store.dispatch(getPokemons());
    Pokemons = store.getState().pokemon.pokemons;
    component = (
      <table>
        <tbody>
          <PokeRow {...Pokemons[0]} />
        </tbody>
      </table>
    );
  });

  it("Must show the data of one pokemon", async () => {
    const { findByRole } = render(
      <Provider store={store}>{component}</Provider>
    );
    const pokemon = await findByRole("Pokemon");
    const [Nombre, Imagen, Ataque, Defensa] = await within(
      pokemon
    ).findAllByRole("stat");
    const [edit, remove] = await within(pokemon).findAllByRole(/button/i);
    expect(Nombre.textContent).toBe(Pokemons[0].name);
    expect(await within(Imagen).findByRole("img")).toHaveAttribute(
      "src",
      Pokemons[0].image
    );
    expect(Ataque.textContent).toBe(Pokemons[0].attack.toString());
    expect(Defensa.textContent).toBe(Pokemons[0].defense.toString());
    expect(await within(edit).findByAltText("edit"));
    expect(await within(remove).findByAltText("remove"));
  });

  it("On click edit, must open the Form in Edit mode", async () => {
    const { findByRole } = render(
      <Provider store={store}>{component}</Provider>
    );
    const pokemon = await findByRole("Pokemon");
    const edit = await within(pokemon).findByRole("edit-button");
    act(() => {
      fireEvent.click(edit);
    });
    await act(() => sleep(1000));
    expect(store.getState().pokemon.form).toEqual(true);
  });

  it("On click delete, must dispatch an action and delete a pokemon", async () => {
    const { findByRole } = render(
      <Provider store={store}>{component}</Provider>
    );
    const pokemon = await findByRole("Pokemon");
    const remove = await within(pokemon).findByRole("remove-button");
    act(() => {
      fireEvent.click(remove);
    });
    await act(() => sleep(1000));
    expect(store.getState().pokemon.deleted).toEqual("success");
  });
});
