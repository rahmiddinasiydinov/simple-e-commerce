import React from 'react';
import styles from './button.module.scss';

function Button({text, onClick}):React.ReactNode{
  return (
    <button className={styles.wrapper} onClick={onClick}>{text} +</button>
  )
}

export default Button