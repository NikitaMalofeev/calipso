import React from "react";
import styles from "./styles.module.scss";

interface IButton {
  title: string;
  colorStyle?: string | undefined;
  isEmpty?: boolean;
  handleClick?: () => void;
}


const OrderButton: React.FC<IButton> = ({ title, isEmpty, handleClick }) => {
  return (
    <div className={`${styles.button} ${isEmpty && styles.button__empty}`} onClick={handleClick}>
      <p className={styles.button__title}>{title}</p>
    </div>
  );
};

export { OrderButton };
