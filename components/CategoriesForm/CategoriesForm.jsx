import React, { useState } from 'react'
import styles from "./categoriesForm.module.scss"
import { useModalStatusContext } from '@/context/modal'

function CategoriesForm() {
    const [input, setInput] = useState('');
    const { setModalStatus} = useModalStatusContext();
    const hideMenu = ()=>{
        setModalStatus(false);
        setTimeout(() => {
            setInput('');
        }, 500)
    }
  return (
   <form className={styles.form}>
    <label htmlFor="name" className={styles.label}>
        Наименование категории
        <input value={input} onChange={(e)=>setInput(e.target.value)} id="name" type="text" minLength="3" className={styles.input} required/>
    </label>
    <div className={styles.buttons}>
        <button type='submit' className={styles.saveBtn}>Соxранить</button>
        <button type='button' className={styles.cancelBtn} onClick={hideMenu}>Отмена</button>
    </div>
   </form>
  )
}

export default CategoriesForm