import React, { useState } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { useSelector } from "react-redux";
import { ProductCard } from "../../../widgets/product-card";
import { addToCart, removeFromCart } from "../../../entities/store/cartSlice";
import { useDispatch } from "react-redux";
import { MyButton } from "../my-button/MyButton";
import { DeliveryForm } from "../../../widgets/DeliveryForm";

interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  handleClose?: () => void;
  handleBack?: () => void;
}

const MyModal: React.FC<IModal> = ({
  title,
  isShowModal,
  isDepthModal,
  handleClose,
  handleBack,
}) => {
  //FIXME опять типизация
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: any) => state.allCart
  );

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {isShowModal && <div className={styles.modal__stub}></div>}
      <div className={`${styles.modal} ${isShowModal && styles.active}`}>
        <div className={styles.modal__container}>
          <div className={styles.modal__header}>
            {isDepthModal && <button onClick={handleBack}></button>}
            <p className={styles.modal__title}>{title}</p>
            <button className={styles.modal__close} onClick={handleClose}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <DeliveryForm />
          <div className={styles.modal__confirm}>
            <div className={styles.modal__total}>
              <p>Сумма</p>
              <p>{totalPrice}₸</p>
            </div>
            <MyButton title="Подтвердить" onSubmit={() => {}}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { MyModal };
