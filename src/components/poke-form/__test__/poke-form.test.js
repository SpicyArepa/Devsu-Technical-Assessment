import React from "react";
import { getPokemonById,getPokemons, createPokemon,editPokemon } from "../../../redux/features/pokemon/pokemonSlice";
import { fireEvent, render, within } from '../../../utils/__test-utils__/test-utils';
import store from "../../../redux/store";
import PokeForm from "../PokeForm";
import { act } from "react-test-renderer";
import { Provider } from "react-redux";


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const component = <Provider store={store}>
                    <PokeForm />
                  </Provider>

describe("Pokemon Form", () => {

  it("must display the form title", () => {
    const {getByText} = render(component)
    expect(getByText(/Nuevo Pokemon/i))
  })

  it("must have 4 labels", () => {
    const {getByLabelText}= render(component);
    expect(getByLabelText('Nombre:'))
    expect(getByLabelText('Imagen:'))
    expect(getByLabelText('Ataque:'))
    expect(getByLabelText('Defensa:'))
  });

  it('must have 4 inputs, 2 text and 2 range', () =>{
    const {getByRole} = render(component)
    expect(getByRole('name')).toHaveAttribute('type','text')
    expect(getByRole('image')).toHaveAttribute('type','text')
    expect(getByRole('attack')).toHaveAttribute('type','range')
    expect(getByRole('defense')).toHaveAttribute('type','range')
  })
  
  it('must have 2 buttons', () =>{
    const {getAllByRole} = render(component)
    expect(getAllByRole('button')).toHaveLength(2)
  })

  it('Buttons have the text Guardar and Cancelar', async () =>{
    const {getByRole} = render(component)
    const save = getByRole('save-button')
    const cancel = getByRole('cancel-button')
    const guardar = await within(save).findByRole('button-text')
    const cancelar = await within(cancel).findByRole('button-text')
    expect(guardar.textContent).toBe('Guardar')
    expect(cancelar.textContent).toBe('Cancelar')
  })

  it('Button Guardar initial disabled', async () =>{
    const { getByRole } = render(component);
    const save = getByRole('save-button')
    expect(await within(save).findByRole('button')).toBeDisabled();
  })

  it('Button Guardar enable when the form meets the requirement', async () =>{
    const { getByRole } = render(component);
    const save = getByRole('save-button')
    const button = await within(save).findByRole('button')
    fireEvent.change(getByRole('name'),{target : {value : 'Pikachu'}})
    fireEvent.change(getByRole('image'),{target : {value : 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg'}})
    fireEvent.change(getByRole('attack'),{target : {value : 10}})
    fireEvent.change(getByRole('defense'),{target : {value : 15}})
    expect(button).not.toBeDisabled();
  })

  it('Button Guardar must be disable when a input has an error', async () =>{
    const { getByRole } = render(component);
    const save = getByRole('save-button')
    const button = await within(save).findByRole('button')
    fireEvent.change(getByRole('name'),{target : {value : 'This a string with a more 15 characters'}})
    fireEvent.change(getByRole('image'),{target : {value : 'http://ThisIsaInsecureUrl.image'}})
    expect(button).toBeDisabled();
    fireEvent.change(getByRole('name'),{target : {value : 'Pikachu'}})
    expect(button).toBeDisabled();
    fireEvent.change(getByRole('image'),{target : {value : 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg'}})
    expect(button).toBeDisabled();
    fireEvent.change(getByRole('attack'),{target : {value : 10}})
    expect(button).toBeDisabled();
    fireEvent.change(getByRole('defense'),{target : {value : 15}})
    expect(button).not.toBeDisabled();
  })

  it('When click on Guardar call the handleSubmit funtion only when enable', async () =>{
    jest.setTimeout(20000)
    const {getByRole} = render(component)
    const save = getByRole('save-button')
    const button = await within(save).findByRole('button')
    act( () => {fireEvent.click(button)} )
    expect(store.getState().pokemon.created).toBe('loading')
    fireEvent.change(getByRole('name'),{target : {value : 'Pikachu'}})
    fireEvent.change(getByRole('image'),{target : {value : 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg'}})
    fireEvent.change(getByRole('attack'),{target : {value : 10}})
    fireEvent.change(getByRole('defense'),{target : {value : 15}})
    act( () => {fireEvent.click(button)})
    await act (()=>sleep(2000))
    expect(store.getState().pokemon.created).toBe('success')
  })

  describe('When pass a pokemon data, the title change, put input values from data and enable click', () =>{
    let pokemon
    beforeAll(async ()=>{
      store.dispatch(getPokemonById(7949))
      await act (()=>sleep(2000))
      pokemon = store.getState().pokemon.pokemon
    })

    it("Title must change", () => {
      const {getByText} = render(<Provider store={store}>
        <PokeForm  />
      </Provider>)
      expect(getByText(/Editar Pokemon/i))
    })

    it("Put data in inputs value", () => {
      const {getByRole} = render(component)
      expect(getByRole('name').getAttribute('value')).toBe(pokemon.name)
      expect(getByRole('image').getAttribute('value')).toBe(pokemon.image)
      expect(Number(getByRole('attack').getAttribute('value'))).toBe(pokemon.attack)
      expect(Number(getByRole('defense').getAttribute('value'))).toBe(pokemon.defense)
    })

    it("Can't Save with same data", async () => {
      const {getByRole} = render(component)
      const save = getByRole('save-button')
      const button = await within(save).findByRole('button')
      act( () => {fireEvent.click(button)})
      await act (()=>sleep(1000))
      expect(store.getState().pokemon.edited).toBe('loading')
    })

    it("Can Save when the inputs change", async () => {
      const testfn = jest.fn(editPokemon)
      const {getByRole} = render(component)
      const save = getByRole('save-button')
      const button = await within(save).findByRole('button')
      fireEvent.change(getByRole('attack'),{target : {value : (pokemon.attack + 10)}})
      expect(store.getState().pokemon.edited).toBe('loading')
      act( () => {fireEvent.click(button)})
      await act (()=>sleep(1000))
      expect(store.getState().pokemon.edited).toBe('success')
    })

  })
});
