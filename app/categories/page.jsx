"use client"
import Button from '@/components/CreateButton/Button'
import Head from 'next/head'
import React from 'react'
import styles from "./categories.module.scss"
import { useModalStatusContext } from '@/context/modal'

function Categories() {
    const { setModalStatus, setModalType} = useModalStatusContext();

    const onClick = () => {
        setModalType("category");
        setModalStatus(true)
    }

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Test Project</title>
            </Head>
            <div className={styles.wrapper}>
                <Button text="Создать категорию" onClick={onClick}/>
            </div>
        </>
    )
}

export default Categories