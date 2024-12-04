import React from 'react';
import styles from './modal.module.scss';
import { useModalStatusContext } from '@/context/modal';
import classNames from 'classnames';
import CategoriesForm from '../CategoriesForm/CategoriesForm';
import ProductForm from '../ProductForm/ProductForm';

function Modal() {
    const { isModalOpen, modalType, setModalStatus, setModalType } = useModalStatusContext();

    const getBackgroundClassNames = () => classNames(styles.background, { [styles.active]: isModalOpen })

    const getMenuClassNames = () => classNames(styles.menu, { [styles["active--menu"]]: isModalOpen });

    const onClick = (e) => {
        if (e.target?.id == "background") {
            setModalStatus(false);
        }
    }




    return (
        <div id="background" className={getBackgroundClassNames()} onClick={onClick}>
            <div className={getMenuClassNames()}>
                {modalType == "category" || modalType == "category-edit" ? <CategoriesForm /> : <ProductForm />}
            </div>
        </div>
    )
}

export default Modal;
