import React from "react";
import style from './styles.module.scss'

interface IButton {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onSubmit?: () => void;
  handleClick?: () => void;
}

const  MyButton: React.FC<IButton> = ({
  title,
  type,
  onSubmit,
  handleClick
}) => {
  return (
    <button className={style.button} onClick={handleClick} onSubmit={onSubmit} type={type}>
        <p className={style.button__title}>{title}</p>
    </button>
  );
};

export { MyButton };
