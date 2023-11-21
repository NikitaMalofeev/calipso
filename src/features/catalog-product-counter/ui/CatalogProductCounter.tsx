import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../../shared/icons/plus.svg"
import plusDarkIcon from "../../../shared/icons/plusDark.svg"
import minusIcon from "../../../shared/icons/minus.svg"


interface ICounterProps {
  total: number;
}

const CatalogProductCounter: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    setAmount((prev) => prev - 1)
  }
  return (
    <>
      <button className={`${styles.counter} ${amount && styles.active}`}>
        {amount > 0 ? (
          <div className={styles.counter__controller}>
            <button className={styles.counter__prev} onClick={handleAdd}>
                <img src={minusIcon} alt="" />
            </button>
            <p className={styles.counter__amount}>{amount}</p>
            <button className={styles.counter__next} onClick={() => setAmount((prev) => prev + 1)}>
            <img src={plusIcon} alt=""/>
            </button>
          </div>
        ) : (
            <button className={styles.counter__first} onClick={() => setAmount((prev) => prev + 1)}><img src={plusDarkIcon} alt=""/></button>
        )}
      </button>
    </>
  );
};

export { CatalogProductCounter };
