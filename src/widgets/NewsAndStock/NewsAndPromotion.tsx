import React from "react";
import styles from "./styles.module.scss";
import { MySwiper } from "../../features/swiper";
import { HeaderSections } from "../../shared/ui/header-sections";

const NewsAndPromotion: React.FC = () => {
  return (
    <>
      <div className={styles.news}>
        <HeaderSections
          title="новости"
          subtitle="Будьте в курсе самых последних обновлений Calipso"
          navigateTo="category/news"
        />
        <MySwiper />
      </div>
    </>
  );
};

export { NewsAndPromotion };
