"use client"
import styles from './cart.module.scss'
import ProductList from "@/components/ProductList/Products";

export default function Cart() {

  return (
    <div className={styles.wrapper}>
      <ProductList  type="cart"/>
    </div>
  );
}
