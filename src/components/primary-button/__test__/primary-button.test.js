import React from 'react'
import {fireEvent, render, screen} from '../../../utils/__test-utils__/test-utils'
import PrimaryButton from '../PrimaryButton'
const testButton = {
  icon : 'icon.com',
  text : 'Button',
  onClickSpy : jest.fn()
}

xdescribe("Primary Button", () => {
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

  it("Button must call a onclick function when make click to the button", async () => {
    const { getByRole } = render(<PrimaryButton icon={testButton.icon} text={testButton.text} cb={testButton.onClickSpy}  />);
    fireEvent.click(getByRole('button'))
    expect(testButton.onClickSpy).toHaveBeenCalled();
  })

  it("Button can be disable", async () => {
    const { getByRole } = render(<PrimaryButton disable={true} />);
    const button = getByRole('button')
    expect(button).toBeDisabled();
  })
})