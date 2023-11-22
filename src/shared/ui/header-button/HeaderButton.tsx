import React from "react";
import style from './styles.module.scss'

interface IButton {
  title: string;
  handleClick?: () => void;
}

const  HeaderButton: React.FC<IButton> = ({
  title,
  handleClick
}) => {
  return (
    <div className={style.button} onClick={handleClick}>
        <p className={style.button__title}>{title}</p>
    </div>
  );
};

export { HeaderButton };
