import React, { useEffect, useMemo, useRef } from "react";
import styles from "./styles.module.scss";
import product from "../../../image/bottles/0.5.png";

interface IPopup {
  name: string;
  isShowPopup: boolean;
  handleClose?: () => void;
}

const ProductPopup: React.FC<IPopup> = ({ isShowPopup, name, handleClose }) => {
  // вешаю на ref popup useeffect для закрытия при клике вне окна
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClose?.(); // Закрыть модальное окно
      }
    };

    if (isShowPopup) {
      // Добавить слушатель события при монтировании компонента
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      // Если попап не активен, снимаем слушатель и восстанавливаем overflow
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

  }, [handleClose]);

  return (
    <>
      <div className={isShowPopup ? styles.popup__overlay : ""}></div>
      <div className={`${styles.popup} ${isShowPopup && styles.popup__active}`}>
        <div
          className={isShowPopup ? styles.container__active : styles.container}
          ref={popupRef}
        >
          <p className={styles.popup__name}>{name}</p>
          <div className={styles.popup__image}>
            <img src={product} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductPopup };
