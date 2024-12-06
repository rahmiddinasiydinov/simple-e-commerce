import { useEditDataContext } from '@/context/editData';
import { useModalStatusContext } from '@/context/modal';
import { useProductsContext } from '@/context/product'
import Image from 'next/image';
import React from 'react'
import styles from "./productsTable.module.scss"

function ProductsTable() {
    const {products } =useProductsContext();
    const { setModalType, setModalStatus } = useModalStatusContext();
    const { setCurrentData } = useEditDataContext();
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
        setModalType("product-edit");
        const dataToEdit = products.find(product => product.id === id)
        setCurrentData({ type: "product-edit", ...dataToEdit })

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
                    products?.map((product, index) => {
                        return <tr className={styles.tr} key={product.id}>
                            <td className={styles.td}>
                                {index + 1}
                            </td>
                            <td className={styles.td}>
                                {product?.name}
                                <span className={styles.edited}>{product?.edited ? "(изменено)" : ""}</span>

                            </td>
                            <td className={styles.td}>
                                <button className={styles.button} onClick={() => handleEdit(product.id)}><Image width={20} height={20} src="/images/edit.svg" alt="edit" /></button>
                                <button className={styles.button} onClick={() => handleDelete(product.id)}><Image width={20} height={20} src="/images/delete.svg" alt="edit" /></button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductsTable