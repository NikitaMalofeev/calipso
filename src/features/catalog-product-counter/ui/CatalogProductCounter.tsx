import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../../shared/icons/plus.svg"
import plusDarkIcon from "../../../shared/icons/plusDark.svg"
import minusIcon from "../../../shared/icons/minus.svg"
interface ICatalogButton {
  handleAdd: () => void;
  handleRemove: () => void;
}

const CatalogProductCounter: React.FC<ICatalogButton> = ({
  handleAdd,
  handleRemove,
}) => {
  const [amount, setAmount] = useState(0);

  const handleAddCount = () => {
    setAmount((prev) => prev + 1)
    handleAdd()
  }
  const handleDelete = () => {
    setAmount((prev) => prev - 1)
    handleRemove()
  }
  return (
    <>
      <button className={`${styles.counter} ${amount && styles.active}`}>
        {amount > 0 ? (
          <div className={styles.counter__controller}>
            <button className={styles.counter__prev} onClick={handleDelete}>
                <img src={minusIcon} alt="" />
            </button>
            <p className={styles.counter__amount}>{amount}</p>
            <button className={styles.counter__next} onClick={handleAddCount}>
            <img src={plusIcon} alt=""/>
            </button>
          </div>
        ) : (
            <button className={styles.counter__first} onClick={handleAddCount}><img src={plusDarkIcon} alt=""/></button>
        )}
      </button>
    </>
  );
};

export { CatalogProductCounter };
