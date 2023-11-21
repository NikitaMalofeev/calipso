import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../../shared/icons/plus.svg"
import plusDarkIcon from "../../../shared/icons/plusDark.svg"
import minusIcon from "../../../shared/icons/minus.svg"
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../entities/store/cartSlice";


const CatalogProductCounter: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleAdd = () => {
    setAmount((prev) => prev + 1)
    dispatch(addToCart({amount})) 
  }
  const handleRemove = () => {
    setAmount((prev) => prev - 1)
    dispatch(removeFromCart({amount}))
  }
  return (
    <>
      <button className={`${styles.counter} ${amount && styles.active}`}>
        {amount > 0 ? (
          <div className={styles.counter__controller}>
            <button className={styles.counter__prev} onClick={handleRemove}>
                <img src={minusIcon} alt="" />
            </button>
            <p className={styles.counter__amount}>{amount}</p>
            <button className={styles.counter__next} onClick={handleAdd}>
            <img src={plusIcon} alt=""/>
            </button>
          </div>
        ) : (
            <button className={styles.counter__first} onClick={handleAdd}><img src={plusDarkIcon} alt=""/></button>
        )}
      </button>
    </>
  );
};

export { CatalogProductCounter };
