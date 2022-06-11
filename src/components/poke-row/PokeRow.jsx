import React from "react";
import edit from '../../assets/edit.png'
import remove from '../../assets/remove.png'

const PokeRow = ({ id, name, image, attack, defense }) => {
  return (
    <>
      <tr role={"Pokemon"}>
        <td role={"stat"}>{name}</td>
        <td role={"stat"}><img src={image} alt={`a picture of ${name}`} width={50} ></img></td>
        <td role={"stat"}>{attack}</td>
        <td role={"stat"}>{defense}</td>
        <td role={"actions"}>
          <button data-testid={id} role={'edit-button'}>
            <img src={edit} alt="edit" width={25}/>
          </button>
          <button data-testid={id} role={'remove-button'}>
            <img src={remove} alt="remove" width={25}/>
          </button>
        </td>
      </tr>
    </>
  );
};

export default PokeRow;
