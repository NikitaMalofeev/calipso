import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../../shared/icons/stickIcon/plus.svg"
import plusDarkIcon from "../../../shared/icons/stickIcon/plusDark.svg"
import minusIcon from "../../../shared/icons/stickIcon/minus.svg"
import { useDispatch, useSelector } from "react-redux";

interface ICatalogButton {
  quantity: number;
  productId?: any;
  handleAdd: () => void;
  handleRemove: () => void;
}

const CatalogProductCounter: React.FC<ICatalogButton> = ({
  quantity,
  productId,
  handleAdd,
  handleRemove,
}) => {

  const handleAddCount = () => {
    handleAdd()
  }
  const handleDelete = () => {
    handleRemove()
  }
  const dispatch = useDispatch();


  return (
    <>
      <div className={`${styles.counter} ${quantity && styles.active}`}>
        {quantity > 0 ? (
          <div className={styles.counter__controller}>
            <button className={styles.counter__prev} onClick={handleDelete}>
                <img src={minusIcon} alt="" />
            </button>
            <p className={styles.counter__amount}>{quantity}</p>
            <button className={styles.counter__next} onClick={handleAddCount}>
            <img src={plusIcon} alt=""/>
            </button>
          </div>
        ) : (
            <button className={styles.counter__first} onClick={handleAddCount}><img src={plusDarkIcon} alt=""/></button>
        )}
      </div>
    </>
  );
};

export { CatalogProductCounter };
