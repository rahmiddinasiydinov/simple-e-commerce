"use client"
import Button from '@/components/CreateButton/Button'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from "./categories.module.scss"
import { useModalStatusContext } from '@/context/modal'
import CategoriesTable from '@/components/CategoriesTable/CategoriesTable'
import { useEditDataContext } from '@/context/editData'


function Categories() {
    const { setModalStatus, setModalType} = useModalStatusContext();
    const {setCurrentData} = useEditDataContext()
    const onClick = () => {
        setModalType("category");
        setModalStatus(true);
        setCurrentData({type:"category"})
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
                <CategoriesTable/>
            </div>
        </>
    )
}

export default Categories