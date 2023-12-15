import React, { useMemo } from 'react'
import styles from "./styles.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { IGood } from '../../../shared/types/cartTypes';
import { showMyModal } from '../../modal-slice/modalSlice';

interface CatalogTotalButtonProps {
    allGoods: Record<number, IGood>
}

const CatalogTotalButton = ({allGoods}: CatalogTotalButtonProps) => {
    const { cart } = useSelector((state: any) => state.allCart);
    const dispatch = useDispatch()

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
    <button
          className={`${styles.cart} ${
            totalQuantity && styles.cart__active
          }`}
          onClick={() => dispatch(showMyModal("Заказ"))}
        >
          <p className={styles.cart__quantity}>Заказать ({totalQuantity})</p>{" "}
          &nbsp;
          <p className={styles.cart__price}>За {totalPrice}</p>
    </button>
  )
}

export {CatalogTotalButton}