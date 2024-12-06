import React, { useEffect, useState } from 'react'
import styles from "./productForm.module.scss"
import { useModalStatusContext } from '@/context/modal'
import { useCategoriesContext } from '@/context/categories';
import { useEditDataContext } from '@/context/editData';

function ProductForm() {
    const [categoryId, setCategoryId] = useState(undefined);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    

    const { setModalStatus, modalType, isModalOpen} = useModalStatusContext();
    const {categories} = useCategoriesContext();
    const { currentData } = useEditDataContext()

    useEffect(()=>{
        if(modalType==='product-edit' && isModalOpen){
            setName(currentData.name);
            setCategoryId(currentData.categoryId);
            setDescription(currentData.desc)
        } else{
            setName('');
            setCategoryId(undefined);
            setDescription('')
        }
    }, [modalType, currentData, isModalOpen])
    
    const hideMenu = ()=>{
        setModalStatus(false);
        setTimeout(() => {
            setCategoryId(undefined);
            setName('');
            setDescription('')
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setName('');
            setCategoryId(undefined);
            setDescription('')
        }, 500);
        setModalStatus(false)
    }


  return (
   <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="name" className={styles.label}>
        Категория  товара 
        <select value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} defaultValue={modalType=="product-edit" ? currentData.id : undefined } id="name" type="text" minLength="3" className={styles.input} required>
            <option disabled>Выберите</option>
            {categories.map(category => <option key={category.id} value={category.id} >{category.name}</option>)}
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