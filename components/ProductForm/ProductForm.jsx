import React, { useState } from 'react'
import styles from "./productForm.module.scss"
import { useModalStatusContext } from '@/context/modal'
import { useCategoriesContext } from '@/context/categories';

function ProductForm() {
    const [categoryId, setCategoryId] = useState(undefined);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    

    const { setModalStatus} = useModalStatusContext();
    const {categories} = useCategoriesContext();
    
    const hideMenu = ()=>{
        setModalStatus(false);
        setTimeout(() => {
            setCategoryId(undefined);
            setName('');
            setDescription('')
        }, 500)
    }
  return (
   <form className={styles.form}>
    <label htmlFor="name" className={styles.label}>
        Категория  товара 
        <select value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} id="name" type="text" minLength="3" className={styles.input} required>
            <option disabled>Выберите</option>
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
    </label>
    <label htmlFor="name" className={styles.label}>
        Наименование  товара 
        <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text" minLength="3" className={styles.input} required/>
    </label>
    <label htmlFor="name" className={styles.label}>
        Описание
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id="name" type="text" minLength="3" className={styles.textarea} required></textarea>
    </label>
    {/* <label htmlFor="name" className={styles.label}>
        Фото 
        <input value={input} onChange={(e)=>setInput(e.target.value)} id="name" type="text" minLength="3" className={styles.input} required/>
    </label> */}
    <div className={styles.buttons}>
        <button type='submit' className={styles.saveBtn}>Соxранить</button>
        <button type='button' className={styles.cancelBtn} onClick={hideMenu}>Отмена</button>
    </div>
   </form>
  )
}

export default ProductForm