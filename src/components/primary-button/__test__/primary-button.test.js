import React from 'react'
import {render, screen} from "@testing-library/react"
import PrimaryButton from '../PrimaryButton'
const testButton = {
  icon : 'icon.com',
  text : 'Button'
}

describe("Primary Button", () => {
  it("Button must display a icon",() => {
    render(<PrimaryButton />);
    expect(screen.findByAltText('icon'))
  })

  it("Button must display a text", () => {
    render(<PrimaryButton />);
    expect(screen.findByRole('button-text'))
  })

  it("Button must display the info from the props", async () => {
    render(<PrimaryButton icon={testButton.icon} text={testButton.text}  />);
    const icon = screen.getByRole('button-icon')
    const text = await screen.findByRole('button-text')
    expect(icon).toHaveAttribute('src', 'icon.com')
    expect(text.textContent).toBe('Button')
  })

})