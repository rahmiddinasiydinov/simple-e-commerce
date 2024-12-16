"use client"
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from "./categories.module.scss"
import { useModalStatusContext } from '../../context/modal'
import Button from '../../components/CreateButton/Button'
import CategoriesTable from '../../components/CategoriesTable/CategoriesTable'


function Categories():React.ReactNode {
    const { setModalStatus, setModalType} = useModalStatusContext();
    const onClick = () => {
        setModalType("category");
        setModalStatus(true);
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Test Project</title>
            </Head>
            <div className={styles.wrapper}>
                <Button text="Создать категорию" onClick={onClick}/>
                <CategoriesTable/>
            </div>
        </>
    )
}

export default Categories