import React from "react";
import { render, screen, within } from "@testing-library/react";
import PokeForm from "../PokeForm";

describe("Pokemon Row", () => {
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

  it('Buttons Guardar initial disabled', async () =>{
    const { getByRole } = render(<PokeForm />);
    const save = getByRole('save-button')
    expect(await within(save).findByRole('button')).toBeDisabled();
  })

});
