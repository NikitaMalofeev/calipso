import React from "react";
import style from './styles.module.scss'

interface IButton {
  title: string;
  onSubmit?: () => void;
  handleClick?: () => void;
}

const  MyButton: React.FC<IButton> = ({
  title,
  onSubmit,
  handleClick
}) => {
  return (
    <button className={style.button} onClick={handleClick} onSubmit={onSubmit}>
        <p className={style.button__title}>{title}</p>
    </button>
  );
};

export { MyButton };
