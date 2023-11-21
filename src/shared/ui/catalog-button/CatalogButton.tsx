import React from "react";
import style from './styles.module.scss'

interface IButton {
  title: string;
  isActive?: boolean;
  handleClick?: () => void;
}

const  CatalogButton: React.FC<IButton> = ({
  title,
  isActive,
  handleClick
}) => {
  return (
    <div className={`${style.button} ${isActive && style.active}`} onClick={handleClick}>
        <p className={style.button__title}>{title}</p>
    </div>
  );
};

export { CatalogButton };
