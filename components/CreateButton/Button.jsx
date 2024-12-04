import React from 'react';
import styles from './button.module.scss';

function Button({text}) {
  return (
    <div className={styles.wrapper}>{text} +</div>
  )
}

export default Button