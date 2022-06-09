import React from "react";
import { render, screen, within } from "@testing-library/react";
import PokeRow from "../PokeRow";
const Psyduck = {
  id: 7611,
  name: "Psyduck",
  image:
    "https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg",
  type: "fire",
  hp: 100,
  attack: 50,
  defense: 30,
};
describe("Pokemon Row", () => {
  it("Must show the data of one pokemon", async () => {
    render(
      <table>
        <tbody>
          <PokeRow
            id={Psyduck.id}
            name={Psyduck.name}
            img={Psyduck.image}
            atk={Psyduck.attack}
            def={Psyduck.defense}
          />
        </tbody>
      </table>
    );
    const Pokemon = await screen.findByRole("Pokemon");
    const [Nombre, Imagen, Ataque, Defensa] = await within(
      Pokemon
    ).findAllByRole("stat");
    const [Edit, Remove] = await within(Pokemon).findAllByRole("button");
    expect(Nombre.textContent).toBe(Psyduck.name);
    expect(await within(Imagen).findByRole("img")).toHaveAttribute('src', Psyduck.image)
    expect(Ataque.textContent).toBe(Psyduck.attack.toString());
    expect(Defensa.textContent).toBe(Psyduck.defense.toString());
    expect(await within(Edit).findByAltText("edit"));
    expect(await within(Remove).findByAltText("remove"));
  });
});
