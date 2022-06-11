import React from 'react'
import {render,fireEvent, within} from '../../../utils/__test-utils__/test-utils'
import MainPage from '../MainPage'

describe("Main Page mount", () => {
  it("must display the main page title", () => {
    const {getByText} =render(<MainPage />)
    expect(getByText(/Listado de Pokemon/i))
  })

  it("must not display Poke-form at the beginning", () => {
    const {queryByRole} = render(<MainPage />)
    console.log(queryByRole('form'))
    expect(queryByRole('form')).toBeNull()
  })

  it("must display Poke-form in edit mode if the edit button has been press", async () => {
    const {getByText,getByRole,queryByRole,findByRole} = render(<MainPage />)
    const table = getByRole('table')
    const [Poke] = await within(table).findAllByRole('Pokemon')
    const editButton = await within(Poke).findByRole('edit-button')
    expect(queryByRole('form')).toBeNull
    fireEvent.click(editButton)
    expect(await findByRole('form'))
    expect(getByText(/Editar Pokemon/i))
  })

  it("must display Poke-form in new mode if the add button has been press", async () => {
    const {getByText,getByRole,queryByRole,findByRole} = render(<MainPage />)
    const addButton = getByRole('button')
    expect(queryByRole('form')).toBeFalsy
    fireEvent.click(addButton)
    expect(await findByRole('form'))
    expect(getByText(/Nuevo Pokemon/i))
  })
})