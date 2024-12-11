"use client"
// import { useProductsContext } from "@/context/product";
import styles from './home.module.scss'
// import { useCartContext } from "/context/cart";
// import ProductList from "@/components/ProductList/Products";
import Link from "next/link";

export default function Home() {
  // const { cart } = useCartContext();
  // let cartNumber = cart.length || 0;

  return (
    <div className={styles.wrapper}>
      {/* <button className={styles.cart}><Link href="/cart">Корзина  ({cartNumber})</Link></button> */}
      {/* <ProductList type="products" /> */}
    </div>
  );
}
