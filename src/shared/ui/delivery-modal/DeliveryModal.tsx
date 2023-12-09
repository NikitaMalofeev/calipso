import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MyButton } from "../my-button/MyButton";
import { DeliveryForm } from "../../../widgets/DeliveryForm";
import { IGood } from "../../types/cartTypes";

interface IModal {
  title: string;
  isShowModal: boolean;
  isDepthModal: boolean;
  allGoods: Record<number, IGood>;
  handleClose?: () => void;
  handleBack?: () => void;
}

const DeliveryModal: React.FC<IModal> = ({
  title,
  isShowModal,
  isDepthModal,
  allGoods,
  handleClose,
  handleBack,
}) => {
  //FIXME опять типизация
  const { cart } = useSelector(
    (state: any) => state.allCart
  );

  // перенести в rtk селектор
  const [totalPrice] = useMemo(() => {
    let price = 0;
  
    for (const id of Object.keys(cart)) {
      price += cart[id] * allGoods[Number(id)].price;
    }
    return [price];
  }, [cart, allGoods]);


  const dispatch = useDispatch();

  return (
    <React.Fragment>
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
            <MyButton title="Подтвердить" onSubmit={() => {}} handleClick={() => {}}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { DeliveryModal };
