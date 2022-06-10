import React from "react";
import PrimaryButton from "../primary-button/PrimaryButton";

const PokeRow = ({ }) => {
  return (
    <form>
    <h3>Nuevo Pokemon</h3>
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" role={'name'}/>
    </div>

    <div>
      <label htmlFor="image">Imagen:</label>
      <input type="text" id="image" role={'image'}/>
    </div>
    <div>

      <label htmlFor="attack">Ataque:</label>
      <input type="range" id="attack" role={'attack'}/>
    </div>

    <div>
      <label htmlFor="defense">Defensa:</label>
      <input type="range" id="defense" role={'defense'}/>
    </div>

    <PrimaryButton text={'Guardar'}/>
    <PrimaryButton text={'Cancelar'}/>
    </form>
  );
};

export default PokeRow;
