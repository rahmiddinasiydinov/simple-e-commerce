"use client"
import { ReactNode } from 'react';
import ProductList from '../../components/ProductList/Products';
import styles from './cart.module.scss'

export default function Cart():ReactNode {

  return (
    <div className={styles.wrapper}>
      <ProductList  type="cart"/>
    </div>
  );
}
