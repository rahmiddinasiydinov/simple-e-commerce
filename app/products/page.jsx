import React from 'react'
import styles from "./products.module.scss"
import Head from 'next/head'
import Button from '@/components/CreateButton/Button'

function Products() {
  return (
     <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Test Project</title>
            </Head>
            <div className={styles.wrapper}>
                <Button text="Создать товар"/>
            </div>
        </>
  )
}

export default Products