import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../../buttons/my-button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../../../features/modal-slice/modalSlice";


interface IPreOrderCard {
  title: string;
  description: string;
  imageSrc: string;
  orderType?: string;
  showCatalog?: boolean;
  routes: string;
}

// FIXME для пуша

const PreorderCard: React.FC<IPreOrderCard> = ({
  title,
  imageSrc,
  routes,
  showCatalog,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  const dispatch = useDispatch()


  const navigate = useNavigate()
  return (
    <>
      <div className={styles.card}>
      <p className={styles.card__title}>{title}</p>
        <div className={styles.card__images}>
          <div
            style={backgroundImageStyle}
            className={styles.card__image}
          ></div>
        </div>
        <div className={styles.card__buttons}>
          <MyButton title="Заказать" handleClick={() => dispatch(showMyModalAction("Каталог"))} isSmall={true}/>
          <MyButton title="Подробнее" handleClick={() => navigate(routes)} isSmall={true}/>
        </div>
      </div>

    </>
  );
};

export { PreorderCard };
