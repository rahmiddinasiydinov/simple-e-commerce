"use client"

import React from 'react'
import styles from "./navbar.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';



function Navbar() {
  const pathname = usePathname()
  
  const getLinkClassNames = (localLink) => {
    return classNames(styles.link, { [styles.active] : pathname == localLink })
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}><Link className={getLinkClassNames('/')} href="/">Главная</Link></li>
        <li className={styles.item}><Link className={getLinkClassNames('/categories')} href="/categories">Котегории</Link></li>
        <li className={styles.item}><Link className={getLinkClassNames('/products')} href="/products">Товар</Link></li>
        <li className={styles.item}><Link className={getLinkClassNames('/cart')} href="/cart">Корзина</Link></li>
        <li className={styles.item}><Link className={getLinkClassNames('/favorites')} href="/favorites">Избранное</Link></li>
      </ul>
    </div>
  )
}

export default Navbar