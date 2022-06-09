import React from 'react'
import {render, screen, within} from "@testing-library/react"
import PrimaryButton from '../PrimaryButton'
const testButton = {
  icon : 'icon.com',
  text : 'Button'
}

describe("Primary Button", () => {
  it("Button must display a icon",async () => {
    render(<PrimaryButton />);
    expect(await screen.findByAltText('icon'))
  })

  it("Button must display a text",async () => {
    render(<PrimaryButton />);
    expect(await screen.findByRole('button-text'))
  })

  it("Button must display the info from the props",async () => {
    render(<PrimaryButton icon={testButton.icon} text={testButton.text}  />);
    const icon = await screen.findByRole('button-icon')
    const text = await screen.findByRole('button-text')
    console.log(icon.dataset)
    //expect(icon.textContent).toBe('Button')
    expect(text.textContent).toBe('Button')
  })

})