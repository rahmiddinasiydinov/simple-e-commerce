"use client"

import React from 'react';
import styles from "./categoriesTable.module.scss";
import Image from 'next/image';
import { useCategoriesContext } from '../../context/categories';
import { useEditCategorisDataContext } from '../../context/editDataCategories';
import { useModalStatusContext } from '../../context/modal';

function CategoriesTable() {
    const { categories, setCategories } = useCategoriesContext();
    const { setModalType, setModalStatus } = useModalStatusContext()
    const { setCurrentData } = useEditCategorisDataContext()
    const handleDelete = (id) => {
        try {
            fetch(`/api/deleteCategories?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => res.json())
                .then(data => {
                    setCategories(data.data)
                })
        } catch (error) {
            console.log(error);

        }
    }

    const handleEdit = (id) => {
        setModalStatus(true);
        setModalType("category-edit");
        const dataToEdit = categories.find(category => category.id === id)
        setCurrentData(dataToEdit)

    }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>
                        №
                    </th>
                    <th className={styles.th}>
                        Наименование
                    </th>
                    <th className={styles.th}>

                    </th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {
                    categories?.map((category, index) => {
                        return <tr className={styles.tr} key={category.id}>
                            <td className={styles.td}>
                                {index + 1}
                            </td>
                            <td className={styles.td}>
                                {category?.name}
                                <span className={styles.edited}>{category?.edited ? "(изменено)" : ""}</span>

                            </td>
                            <td className={styles.td}>
                                <button className={styles.button} onClick={() => handleEdit(category.id)}><Image width={20} height={20} src="/images/edit.svg" alt="edit" /></button>
                                <button className={styles.button} onClick={() => handleDelete(category.id)}><Image width={20} height={20} src="/images/delete.svg" alt="edit" /></button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default CategoriesTable;