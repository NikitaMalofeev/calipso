import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { useSelector } from "react-redux";
import { ProductCard } from "../../../widgets/product-card";
import { addToCart, removeFromCart } from "../../../entities/store/cartSlice";
import { useDispatch } from "react-redux";
import { MyButton } from "../my-button/MyButton";

interface IGood {
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
  allGoods: Record<number, IGood>;
  handleShowDeliveryModal: () => void;
  handleClose?: () => void;
  handleBack?: () => void;
}

const OrderModal: React.FC<IModal> = ({
  title,
  isShowModal,
  isDepthModal,
  allGoods,
  handleClose,
  handleBack,
  handleShowDeliveryModal
}) => {
  //FIXME опять типизация
  const { cart } = useSelector(
    (state: any) => state.allCart
  );

  const [totalQuantity, totalPrice] = useMemo(() => {
    let quantity = 0;
    let price = 0;

    for (const id of Object.keys(cart)) {
      quantity += cart[id];
      price += cart[id] * allGoods[Number(id)].price;
    }
    return [quantity, price];
  }, [cart, allGoods]);

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
          <div className={styles.modal__cart}>
            {Object.values(allGoods).map((data: any) => (
              cart[data.id] ? (<ProductCard
                quantity={cart[data.id] ?? 0}
                productId={data.id}
                price={data.price}
                name={data.name}
                size={data.size}
                productImage={data.image}
                isOrderCard={true}
                handleAdd={() => dispatch(addToCart(data.id))}
                handleRemove={() => dispatch(removeFromCart(data.id))}
              /> ) : null
            ))}
          </div>
          <div className={styles.modal__confirm}>
            <div className={styles.modal__total}>
              <p>Сумма</p>
              <p>{totalPrice}₸</p>
            </div>
            <MyButton title="Подтвердить" handleClick={handleShowDeliveryModal}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { OrderModal };
