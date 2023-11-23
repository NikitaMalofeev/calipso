import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { CatalogButtonMenu } from "../../../features/catalog-button-menu";
import { ProductCard } from "../../../widgets/product-card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../entities/store/cartSlice";

interface Good {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
}

interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  allGoods: Record<number, Good>;
  handleClose?: () => void;
  handleBack?: () => void;
  onChangeModal?: () => void;
}

const CatalogModal: React.FC<IModal> = ({
  allGoods,
  title,
  isShowModal,
  isDepthModal,
  handleClose,
  handleBack,
  onChangeModal,
}) => {
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
            {Object.values(allGoods).map((item: Good) => (
              <ProductCard
                productId={item.id}
                quantity={cart[item.id] ?? 0}
                key={item.id}
                productImage={item.image}
                price={item.price}
                name={item.name}
                size={item.size}
                handleAdd={() => dispatch(addToCart(item.id))}
                handleRemove={() => dispatch(removeFromCart(item.id))}
              />
            ))}
            <button
              className={`${styles.modal__cart} ${
                totalQuantity && styles.cart__active
              }`}
              onClick={onChangeModal}
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
    </React.Fragment>
  );
};

export { CatalogModal };
