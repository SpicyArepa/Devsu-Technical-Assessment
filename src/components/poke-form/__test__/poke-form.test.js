import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import PokeForm from "../PokeForm";

describe("Pokemon Form", () => {
  it("must display the main page title", () => {
    const {getByText} = render(<PokeForm />)
    expect(getByText(/Pokemon/i))
  })

  it("must have 4 labels", () => {
    const {getByLabelText}= render(<PokeForm />);
    expect(getByLabelText('Nombre:'))
    expect(getByLabelText('Imagen:'))
    expect(getByLabelText('Ataque:'))
    expect(getByLabelText('Defensa:'))
  });

  it('must have 4 inputs, 2 text and 2 range', () =>{
    const {getByRole} = render(<PokeForm />)
    expect(getByRole('name')).toHaveAttribute('type','text')
    expect(getByRole('image')).toHaveAttribute('type','text')
    expect(getByRole('attack')).toHaveAttribute('type','range')
    expect(getByRole('defense')).toHaveAttribute('type','range')
  })
  
  it('must have 2 buttons', () =>{
    const {getAllByRole} = render(<PokeForm />)
    expect(getAllByRole('button')).toHaveLength(2)
  })

  it('Buttons have the text Guardar and Cancelar', async () =>{
    const {getByRole} = render(<PokeForm />)
    const save = getByRole('save-button')
    const cancel = getByRole('cancel-button')
    const guardar = await within(save).findByRole('button-text')
    const cancelar = await within(cancel).findByRole('button-text')
    expect(guardar.textContent).toBe('Guardar')
    expect(cancelar.textContent).toBe('Cancelar')
  })

  it('Button Guardar initial disabled', async () =>{
    const { getByRole } = render(<PokeForm />);
    const save = getByRole('save-button')
    expect(await within(save).findByRole('button')).toBeDisabled();
  })

  it('Button Guardar enable when the form meets the requirement', async () =>{
    const { getByRole } = render(<PokeForm />);
    const save = getByRole('save-button')
    const button = await within(save).findByRole('button')
    fireEvent.change(getByRole('name'),{target : {value : 'Pikachu'}})
    fireEvent.change(getByRole('image'),{target : {value : 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg'}})
    fireEvent.change(getByRole('attack'),{target : {value : 10}})
    fireEvent.change(getByRole('defense'),{target : {value : 15}})
    expect(button).not.toBeDisabled();
  })

  it('Button Guardar must be disable when a input has an error', async () =>{
    const { getByRole } = render(<PokeForm />);
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

  it('When click on Guardar call the cb funtion only when enable', async () =>{
    const testfn = jest.fn(e => e.preventDefault())
    const {getByRole} = render(<PokeForm cb={testfn}/>)
    const save = getByRole('save-button')
    const button = await within(save).findByRole('button')
    fireEvent.click(button)
    expect(testfn).not.toHaveBeenCalled();
    fireEvent.change(getByRole('name'),{target : {value : 'Pikachu'}})
    fireEvent.change(getByRole('image'),{target : {value : 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg'}})
    fireEvent.change(getByRole('attack'),{target : {value : 10}})
    fireEvent.change(getByRole('defense'),{target : {value : 15}})
    fireEvent.click(button)
    expect(testfn).toHaveBeenCalled();
  })


});
