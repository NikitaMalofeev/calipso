import React, { useState } from "react";
import styles from "./styles.module.scss";
import brand from "../../../image/brandImage/brandDark.png";
import { Link, useNavigate } from "react-router-dom";

interface IButton {
  isActive?: boolean;
  handleClick?: () => void;
}

// вместе с модальным окном перенести его интерфейсы
interface IModalMenu {
  item: string;
  path: string;
}

const menuitem: IModalMenu[] = [
  { item: "Главная", path: "" },
  { item: "О компании", path: "about" },
  { item: "О воде", path: "water" },
  { item: "Производство", path: "production" },
  { item: "Товары и услуги", path: "services" },
  { item: "Акции", path: "promote" },
  { item: "Сертификаты", path: "certificates" },
  { item: "Новости", path: "news" },
  { item: "Вакансии", path: "vacancy" },
  

];

const BurgerButton: React.FC<IButton> = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [handleMenuItemIndex, setHandleMenuItemIndex] = useState(0);
  const test = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    isOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const navigate = useNavigate();
  
  // навигация по странице, если нужно на главную то не использую category Layout
  const handleNavigate = (path: string) => {
      path === "" ? navigate("/") : navigate(`/category/${path}`);
  };

  return (
    <div className={styles.button} onClick={test}>
      <div
        className={`${styles.button__item} ${isOpen ? styles.active : ""}`}
      ></div>
      {/*Модальное окно в отдельный виджет или фичу*/}

      <div
        className={`${styles.burger} ${isOpen ? styles.burger__active : ""}`}
      >
        <div className={styles.burger__chapter}>
          <img className={styles.burger__icon} src={brand} alt="" />
          {menuitem.map((item, index) => (
            <span
              className={`${
                handleMenuItemIndex === index
                  ? styles.item__active
                  : styles.burger__item
              }`}
              key={index}
              onClick={() => {
                setHandleMenuItemIndex(index)
                handleNavigate(item.path)
              }}
            >
              {item.item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BurgerButton };
