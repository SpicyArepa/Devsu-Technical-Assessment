import React from "react";

const PrimaryButton = ({icon , text, cb, disable = false}, type = 'button') => {
  return (
    <button onClick={cb} disabled={disable} type={type}>
      <div><img src={icon} alt="icon" role={'button-icon'} width={15}/></div>
      <div><span role={'button-text'}>{text}</span></div>
    </button>
  )
};

export default PrimaryButton;
