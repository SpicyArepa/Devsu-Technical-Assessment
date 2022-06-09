import React from "react";

const PrimaryButton = ({icon , text, cb}) => {
  return (
    <button onClick={cb}>
      <div><img src={icon} alt="icon" role={'button-icon'}/></div>
      <div><span role={'button-text'}>{text}</span></div>
    </button>
  )
};

export default PrimaryButton;
