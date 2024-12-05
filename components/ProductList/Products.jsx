"use client"
import React, { useEffect, useState } from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { useCartContext } from '@/context/cart';
import { useProductsContext } from '@/context/product';

function ProductList({ type = 'products' }) {
  const [list, setList] = useState([]);
  const { cart, updateCart } = useCartContext()
  const { products } = useProductsContext()

  useEffect(() => {
    if (type == "products") {
      setList(products)
    } else {
      setList(cart)
      console.log(cart);
      
    }
  }, [type, products, cart])

  const onClickProduct = (id) => {
    if (!cart.some(item => item?.id == id)) {
      const chosenItem = products.find(product => product.id == id);
      cart.push(chosenItem)
      updateCart(cart);
    }
  }

  const onClickCart = (id) => {
    const newCart = cart.filter(product => product.id != id);
    updateCart(newCart);
    setList(newCart)
  }

  const onClick = type === "products" ? onClickProduct : onClickCart;

  const getButtonText = () => {
    return type === "products" ? "В корзину" : "Удалить из корзины"
  }

  return (
    <ul className={styles.list}>
    {!cart?.length && type==="cart" ? <h2 className={styles.warning}>В корзине ничего нет.</h2> : ""}
      {
        list?.map(product => {
          return <li key={product.id} className={styles.item}>
            <div className={styles.img}>
              <Image fill src={product.photo} alt="image of products" objectFit="cover" />
            </div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <button className={styles.productBtn} onClick={() => onClick(product.id)}>{getButtonText()}</button>
          </li>
        })
      }
    </ul>
  )
}

export default ProductList;