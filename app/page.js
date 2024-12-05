"use client"
import { useProductsContext } from "@/context/product";
import styles from './home.module.scss'
import { useCartContext } from "@/context/cart";
import ProductList from "@/components/ProductList/Products";
import { useEffect } from "react";

export default function Home() {
  const { products } = useProductsContext();
  const { cart } = useCartContext();
  let cartNumber = cart.length
  useEffect(() => {
    cartNumber = cart.length
  }, [cart.length])
  return (
    <div className={styles.wrapper}>
      <button className={styles.cart}>Корзина  ({cartNumber})</button>
      <ProductList products={products} />
    </div>
  );
}
