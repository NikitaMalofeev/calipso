import React from "react";
import styles from './styles.module.scss'
import { MyButton } from "../../shared/ui/my-button";
import { MySwiper } from "../../features/swiper";

const NewsAndPromotion: React.FC = () => {
  return (
    <>
    <div className={styles.news}>
       <p className={styles.news__title}>Новости и акции</p>
       <p className={styles.news__description}>Будьте в курсе самых последних обновлений Calipso</p>
       <MySwiper />
       <MyButton title="Подробнее"/>
    </div>
    </>
  );
};

export { NewsAndPromotion };
