import React from "react";
import { getPokemonById, getPokemons } from "../../../redux/features/pokemon/pokemonSlice";
import { fireEvent, render, within } from '../../../utils/__test-utils__/test-utils';
import store from "../../../redux/store";
import PokeSearch from "../PokeSearch";
import { act } from "react-test-renderer";
import { Provider } from "react-redux";


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


describe("Pokemon Form", () => {

  it("must have a icon", () => {
    const {getByAltText} = render(<PokeSearch />);
    expect(getByAltText('icon'))
  })

  it("must display a input with a placeholder", async () => {
    const {findByPlaceholderText} = render(<PokeSearch />)
    expect(await findByPlaceholderText(/Buscar/i))
  })

  it("on enter must call a action to find pokemons when have a string", async () => {
    const {getByRole} = render(<Provider store={store}>
      <PokeSearch />
    </Provider>)
    fireEvent.change(getByRole('input-search'),{target : {value : 'Pikachu'}})
    act ( () => {fireEvent.keyPress(getByRole('input-search'), { key: 'Enter', charCode: 13 });})
    await act(() => sleep(1000));
    expect(store.getState().pokemon.search).toEqual("success");
  })

});
