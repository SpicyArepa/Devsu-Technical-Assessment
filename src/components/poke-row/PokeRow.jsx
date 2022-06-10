import React from "react";
import edit from '../../assets/edit.png'
import remove from '../../assets/remove.png'

const PokeRow = ({ id, name, img, atk, def }) => {
  return (
    <>
      <tr role={"Pokemon"}>
        <td role={"stat"}>{name}</td>
        <td role={"stat"}><img src={img} alt={`a picture of ${name}`} width={50}></img></td>
        <td role={"stat"}>{atk}</td>
        <td role={"stat"}>{def}</td>
        <td role={"actions"}>
          <button data-testid={id}>
            <img src={edit} alt="edit" width={25}/>
          </button>
          <button data-testid={id}>
            <img src={remove} alt="remove" width={25}/>
          </button>
        </td>
      </tr>
    </>
  );
};

export default PokeRow;
