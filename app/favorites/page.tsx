import React, { ReactNode } from 'react'
import styles from "./favorites.module.scss"

function Favorites():ReactNode {
  return (
    <div className={styles.wrapper}>Избранное</div>
  )
}

export default Favorites