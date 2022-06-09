import React from 'react'
const PokemonTable = () => {
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
    </table>
  )
}

export default PokemonTable