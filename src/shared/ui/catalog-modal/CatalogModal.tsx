import React, { useState } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { CatalogButtonMenu } from "../../../features/catalog-button-menu";
import { ProductCard } from "../../../widgets/product-card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCardTotal, removeFromCart } from "../../../entities/store/cartSlice";

interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  handleClose?: () => void;
  handleBack?: () => void;
  handleShowOrderModal?: () => void;
}

const CatalogModal: React.FC<IModal> = ({
  title,
  isShowModal,
  isDepthModal,
  handleClose,
  handleBack,
  handleShowOrderModal
}) => {
  //FIXME убрать any типизацию
  const productItems = useSelector((state: any) => state.allCart.items);
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: any) => state.allCart
  );
  const dispatch = useDispatch()

  dispatch(getCardTotal())

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
          {/* FIXME перенести buttons в фичи
          FIXME убрать any типизацию
           */}
          <CatalogButtonMenu />
          <div className={styles.modal__menu}>
            {productItems.map((item: any) => (
              <ProductCard
              productId={item.id}
              key={item.id}
              productImage={item.image}
              price={item.price}
              name={item.name}
              amount={item.amount}
              handleAdd={() => dispatch(addToCart(item))}
              handleRemove={() => dispatch(removeFromCart(item))}
            />
            ))}
            <button className={`${styles.modal__cart} ${totalQuantity && styles.cart__active}`} onClick={handleShowOrderModal}>
              <p className={styles.cart__quantity}>Заказать ({totalQuantity})</p> &nbsp;
              <p className={styles.cart__price}>За {totalPrice}</p>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { CatalogModal };
