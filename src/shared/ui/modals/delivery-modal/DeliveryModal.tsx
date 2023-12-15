import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../../icons/stickIcon/close.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MyButton } from "../../buttons/my-button";
import { DeliveryForm } from "../../../../widgets/delivery-form";
import { IGood } from "../../../types/cartTypes";

interface IModal {
  allGoods: Record<number, IGood>;
}

const DeliveryModal: React.FC<IModal> = ({
  allGoods,

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
      <div className={`${styles.modal} ${styles.active}`}>
        <div className={styles.modal__container}>
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
