"use client"
import { ReactNode } from 'react';
import ProductList from '../components/ProductList/Products';
import { useCartContext } from '../context/cart';
import styles from './home.module.scss'
import Link from "next/link";

export default function Home():ReactNode {
  const { cart } = useCartContext();
  let cartNumber = cart.length || 0;

  return (
    <div className={styles.wrapper}>
      <button className={styles.cart}><Link href="/cart">Корзина  ({cartNumber})</Link></button>
      <ProductList type="products" />
    </div>
  );
}
