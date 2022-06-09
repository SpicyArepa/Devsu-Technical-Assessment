import React from "react";

const PrimaryButton = ({icon , text, cb, disable = false}) => {
  return (
    <button onClick={cb} disabled={disable}>
      <div><img src={icon} alt="icon" role={'button-icon'}/></div>
      <div><span role={'button-text'}>{text}</span></div>
    </button>
  )
};

export default PrimaryButton;
