import React from "react";
import styles from "./styles.module.scss";
import nextArrow from "../../icons/arrowNextBlue.svg"

interface PromotionCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const PromotionCard = ({ title, subtitle, image }: PromotionCardProps) => {
  return (
    <div className={styles.promotion}>
      <img src={image} alt="" className={styles.promotion__image} />
      <div className={styles.promotion__description}>
        <h3 className={styles.promotion__title}>{title}</h3>
        <span className={styles.promotion__subtitle}>{subtitle}</span>
        <span className={styles.promotion__date}>
          Акция действует до: 13.02.2024
        </span>
        <a href="/category/promote" className={styles.promotion__more}>
          Подробнее
        </a>
        <img src={nextArrow} alt="" className={styles.promotion__arrow}/>
      </div>
    </div>
  );
};

export { PromotionCard };
