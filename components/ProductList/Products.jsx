import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { useCartContext } from '@/context/cart';

function ProductList({ products, listType = 'products' }) {
  const { cart, updateCart } = useCartContext()

  const onClick = (id) => {
    if (!cart.some(item => item?.id == id)) {
      console.log(cart)
      const chosenItem = products.find(product => product.id == id);
      cart.push(chosenItem)
      
      updateCart(cart);
    }
  }
  return (
    <ul className={styles.list}>
      {
        products?.map(product => {
          return <li key={product.id} className={styles.item}>
            <div className={styles.img}>
              <Image fill src={product.photo} alt="image of products" objectFit="cover" />
            </div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <button className={styles.productBtn} onClick={() => onClick(product.id)}>В корзину</button>
          </li>
        })
      }
    </ul>
  )
}

export default ProductList;