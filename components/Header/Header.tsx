import React, { ReactNode } from 'react'
import styles from "./header.module.scss"
import Image from 'next/image';
import { useMenuStatus } from '../../context/menu';

function Header():ReactNode {
  const { setIsOpen } = useMenuStatus ();
  const onClick = ():void => {
    setIsOpen(state => !state);
  }
  return (
    <div className={styles.wrapper}>
      <button className={styles.burger} onClick={onClick}><Image width={20} height={20} src={"/images/burger.svg"} alt='menu' /></button>
    </div>
  )
}

export default Header;