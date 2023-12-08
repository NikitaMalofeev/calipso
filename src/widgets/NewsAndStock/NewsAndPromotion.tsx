import React from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../../shared/ui/my-button";
import { MySwiper } from "../../features/swiper";
import { MyNavigateButton } from "../../shared/ui/my-navigate-button";

const NewsAndPromotion: React.FC = () => {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.news__header}>
          <h2 className={styles.news__title}>НОВОСТИ</h2>
          <span className={styles.news__subtitle}>
            Будьте в курсе самых последних обновлений Calipso
          </span>
          <MyNavigateButton title="Смотреть все" navigateTo="category/news" />
        </div>
        <MySwiper />
        <MyButton title="Подробнее" />
      </div>
    </>
  );
};

export { NewsAndPromotion };
