import React from "react";
import styles from "./styles.module.scss";

interface IButton {
  title: string;
  handleClick?: () => void;
  colorStyle: string | undefined;
}

const OrderButton: React.FC<IButton> = ({ title, colorStyle, handleClick }) => {
  const getColorClassName = () => {
    switch (colorStyle) {
      case "blue":
        return styles.blueBtn;
      case "red":
        return styles.redBtn;
      case "green":
        return styles.greenBtn;
      default:
        return "";
    }
  };

  const buttonClassName = `${styles.button} ${getColorClassName()}`;
  return (
    <div className={buttonClassName} onClick={handleClick}>
      <p className={styles.button__title}>{title}</p>
    </div>
  );
};

export { OrderButton };
