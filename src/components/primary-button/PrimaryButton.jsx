import React from "react";
import styles from './primary-button.module.css'

const PrimaryButton = ({icon , text, cb, disable = false}, type = 'button') => {
  return (
    <button onClick={cb} disabled={disable} type={type} className={styles.container}>
      <div className={styles.icon}><img src={icon} alt="icon" role={'button-icon'} width={15}/></div>
      <div className={styles.text}><span role={'button-text'}>{text}</span></div>
    </button>
  )
};

export default PrimaryButton;
