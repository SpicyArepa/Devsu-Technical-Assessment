import React from 'react'
const PokemonTable = () => {
  const Pokes = [{
    id: 7611,
    name: 'Psyduck',
    image: 'https://i.pinimg.com/736x/85/1e/cf/851ecf1b1c06cb071c37fb3c6de2ea4a.jpg',
    type: 'fire',
    hp: 100,
    attack: 50,
    defense: 30
  },{
    id: 7612,
    name: "Bulbasaur1",
    image: "https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png",
    type: "normal",
    hp: 100,
    attack: 75,
    defense: 49
  }]
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
          <td role={'stat'} >{Pokes[0].name}</td>
          <td role={'stat'}>{Pokes[0].image}</td>
          <td role={'stat'}>{Pokes[0].attack}</td>
          <td role={'stat'}>{Pokes[0].defense}</td>
          <td role={'actions'}>
            <button></button>
            <button></button>
          </td>
        </tr>
        <tr role={'Pokemon'}>
          <td role={'stat'} >{Pokes[1].name}</td>
          <td role={'stat'}>{Pokes[1].image}</td>
          <td role={'stat'}>{Pokes[1].attack}</td>
          <td role={'stat'}>{Pokes[1].defense}</td>
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