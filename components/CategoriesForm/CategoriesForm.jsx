"use client";
import React, { useEffect, useState } from "react";
import styles from "./categoriesForm.module.scss";
import { useModalStatusContext } from "@/context/modal";
import { useCategoriesContext } from "@/context/categories";
import { useEditDataContext } from "@/context/editData";

function CategoriesForm() {
  const { setModalStatus, modalType, isModalOpen } = useModalStatusContext();
  const { setCategories } = useCategoriesContext();
  const { currentData } = useEditDataContext();

  const [input, setInput] = useState("");

  useEffect(() => {
    if (modalType == "category-edit" && isModalOpen) {
      setInput(currentData.name);
    } else (
        setInput("")
    )
  }, [currentData, modalType]);

  const hideMenu = () => {
    setModalStatus(false);
    setTimeout(() => {
      setInput("");
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalStatus(false);

    setTimeout(() => {
      setInput("");
    }, 500);

    if (currentData.type === "category")
      fetch("/api/postCategories", {
        method: "POST",
        body: JSON.stringify({ name: input }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.data);
        })
        .catch((e) => console.log(e));
    else if (currentData.type === "category-edit") {
        fetch("/api/updateCategories", {
        method: "PUT",
        body: JSON.stringify({id:currentData.id, name: input, edited:true }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.data);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {modalType == "category-edit" ? (
        <h2 className={styles.header}>Редактировать</h2>
      ) : (
        ""
      )}
      <label htmlFor="name" className={styles.label}>
        Наименование категории
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="name"
          type="text"
          minLength="3"
          className={styles.input}
          required
        />
      </label>
      <div className={styles.buttons}>
        <button type="submit" className={styles.saveBtn}>
          Соxранить
        </button>
        <button type="button" className={styles.cancelBtn} onClick={hideMenu}>
          Отмена
        </button>
      </div>
    </form>
  );
}

export default CategoriesForm;
