import React from "react";

const PokeRow = ({id,name,img,atk,def}) => {
  return (
                <tr role={"Pokemon"}>
                  <td role={"stat"}>{name}</td>
                  <td role={"stat"}>{img}</td>
                  <td role={"stat"}>{atk}</td>
                  <td role={"stat"}>{def}</td>
                  <td role={"actions"}>
                    <button data-testid={id}>
                      <img src={"../../assets/edit.png"} alt="edit" />
                    </button>
                    <button data-testid={id}>
                      <img src={"../../assets/remove.png"} alt="remove" />
                    </button>
                  </td>
                </tr>
  );
};

export default PokeRow;
