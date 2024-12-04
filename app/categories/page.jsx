import Button from '@/components/CreateButton/Button'
import Head from 'next/head'
import React from 'react'
import styles from "./categories.module.scss"

function Categories() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Test Project</title>
            </Head>
            <div className={styles.wrapper}>
                <Button text="Создать категорию"/>
            </div>
        </>
    )
}

export default Categories