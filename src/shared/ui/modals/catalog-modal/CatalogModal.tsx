import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../../icons/stickIcon/close.svg";
import { CatalogButtonMenu } from "../../../../features/catalog-button-menu";
import { ProductCard } from "../../cards/product-card";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../features/cart-slice/cartSlice";
import { IGood } from "../../../types/cartTypes";
import { ProductPopup } from "../../content/product-popup";

interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  allGoods: Record<number, IGood>;
  handleShowOrderModal: () => void;
  handleClose?: () => void;
  handleBack?: () => void;
}

const CatalogModal: React.FC<IModal> = ({
  allGoods,
  title,
  isShowModal,
  isDepthModal,
  handleShowOrderModal,
  handleClose,
  handleBack,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [catalogContent, setCatalogContent] = useState("Все");

  //FIXME убрать any типизацию
  const { cart } = useSelector((state: any) => state.allCart);
  const dispatch = useDispatch();

  //FIXME вынести в redux toolkit селектор
  const [totalQuantity, totalPrice] = useMemo(() => {
    let quantity = 0;
    let price = 0;

    for (const id of Object.keys(cart)) {
      quantity += cart[id];
      price += cart[id] * allGoods[Number(id)].price;
    }
    return [quantity, price];
  }, [cart, allGoods]);

  const handleFilteredCatalogContent = (selectedChapter: string) => {
    setCatalogContent(selectedChapter);
  };

  const selectedCatalogChapter = (chapter: string) => {
    switch (chapter) {
      case "Все":
        return <AllChapter />;
      case "Вода":
        return <AllChapter />;
      case "Collaps'ик":
        return <AllChapter />;
      case "Оборудование":
        return <AllChapter />;
      case "Вода для Животных":
        return <AllChapter />;
      case "Co-Packing":
        return <AllChapter />;
    }
  };

  const AllChapter = () => {
    return (
      <div className={styles.modal__menu}>
        {Object.values(allGoods).map((item: IGood, index: number) => (
          <ProductCard
            productId={item.id}
            quantity={cart[item.id] ?? 0}
            key={index}
            productImage={item.image}
            price={item.price}
            name={item.name}
            size={item.size}
            handleAdd={() => dispatch(addToCart(item.id))}
            handleRemove={() => dispatch(removeFromCart(item.id))}
            handleShowPopup={() => setShowPopup(true)}
          />
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={`${styles.modal} ${isShowModal && styles.active}`}>
        <div className={styles.modal__container}>
          <div
            className={
              isShowModal ? styles.modal__header : styles.header__unactive
            }
          >
            {isDepthModal && <button onClick={handleBack}></button>}
            <p className={styles.modal__title}>{title}</p>
            <button className={styles.modal__close} onClick={handleClose}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          {/* FIXME перенести buttons в фичи
          FIXME убрать any типизацию
           */}
          <CatalogButtonMenu onValueChange={handleFilteredCatalogContent} />
          <div className={styles.modal__menu}>
            <div>{selectedCatalogChapter(catalogContent)}</div>

            <button
              className={`${styles.modal__cart} ${
                totalQuantity && styles.cart__active
              }`}
              onClick={handleShowOrderModal}
            >
              <p className={styles.cart__quantity}>
                Заказать ({totalQuantity})
              </p>{" "}
              &nbsp;
              <p className={styles.cart__price}>За {totalPrice}</p>
            </button>
          </div>
        </div>
      </div>

      <ProductPopup
        name="Вода Calipso негазир."
        isShowPopup={showPopup}
        handleClose={() => {
          setShowPopup(false);
        }}
      />
    </React.Fragment>
  );
};

export { CatalogModal };