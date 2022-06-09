import React from "react";

const PrimaryButton = ({icon , text}) => {
  return (
    <button>
      <div><img src={icon} alt="icon" role={'button-icon'}/></div>
      <div><span role={'button-text'}>{text}</span></div>
    </button>
  )
};

export default PrimaryButton;
