"use client";
import React from 'react'
import styles from "./products.module.scss"
import Head from 'next/head'
import Button from '../../components/CreateButton/Button';
import ProductsTable from '../../components/ProductsTable/ProductsTable';
import { useModalStatusContext } from '../../context/modal';

function Products() {
    const { setModalStatus, setModalType } = useModalStatusContext();

    const onClick = () => {
        setModalType("product");
        setModalStatus(true)
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Test Project</title>
            </Head>
            <div className={styles.wrapper}>
                <Button text="Создать товар" onClick={onClick}/>
                <ProductsTable/>
            </div>
        </>
    )
}

export default Products