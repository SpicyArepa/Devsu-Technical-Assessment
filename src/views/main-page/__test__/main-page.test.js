import React from 'react'
import { render, screen } from "@testing-library/react"
import MainPage from '../MainPage'

describe("Main Page mount", () => {
  it("must display the main page title", () => {
    render(<MainPage />)
    expect(screen.getByText(/Listado de Pokemon/i))
  })
})