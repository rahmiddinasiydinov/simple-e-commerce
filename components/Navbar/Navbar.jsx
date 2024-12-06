"use client"

import React from 'react'
import styles from "./navbar.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useMenuStatus } from '@/context/menu';

function Navbar() {
  const pathname = usePathname();
  const {isOpen, setIsOpen} = useMenuStatus()
  
  const getLinkClassNames = (localLink) => {
    return classNames(styles.link, { [styles.active] : pathname == localLink })
  }

  const getWrapperClassNames = () => {
    return classNames(styles.wrapper, {[styles.active]: isOpen})
  }

  const onClick = () => {
    setIsOpen(false);
  }
  return (
    <div className={getWrapperClassNames()}>
      <ul className={styles.list}>
        <li className={styles.item}><Link onClick={onClick} className={getLinkClassNames('/')} href="/">Главная</Link></li>
        <li className={styles.item}><Link onClick={onClick} className={getLinkClassNames('/categories')} href="/categories">Котегории</Link></li>
        <li className={styles.item}><Link onClick={onClick} className={getLinkClassNames('/products')} href="/products">Товар</Link></li>
        <li className={styles.item}><Link onClick={onClick} className={getLinkClassNames('/cart')} href="/cart">Корзина</Link></li>
        <li className={styles.item}><Link onClick={onClick} className={getLinkClassNames('/favorites')} href="/favorites">Избранное</Link></li>
      </ul>
    </div>
  )
}

export default Navbar