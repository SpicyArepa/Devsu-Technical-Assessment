import React from 'react'
const PokemonTable = () => {
  const Poke = {
    id: 7611,
    name: 'Psyduck',
    image: 'https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg',
    type: 'fire',
    hp: 100,
    attack: 50,
    defense: 30
  }
  return (
    <table>
      <thead>
        <tr role={'table-header-row'}>
          <th role={'table-header-column'}>Nombre</th>
          <th role={'table-header-column'}>Imagen</th>
          <th role={'table-header-column'}>Ataque</th>
          <th role={'table-header-column'}>Defensa</th>
          <th role={'table-header-column'}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr role={'Pokemon'}>
          <td role={'stat'} >{Poke.name}</td>
          <td role={'stat'}>{Poke.image}</td>
          <td role={'stat'}>{Poke.attack}</td>
          <td role={'stat'}>{Poke.defense}</td>
          <td role={'actions'}>
            <button></button>
            <button></button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PokemonTable