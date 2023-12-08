import React from "react";
import styles from "./styles.module.scss";
import { initialPromotion } from "../../shared/config/initialPromotion";
import { PromotionCard } from "../../shared/ui/promotion-card";
import { MyNavigateButton } from "../../shared/ui/my-navigate-button";

const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <div className={styles.promotion__header}>
        <h2 className={styles.promotion__title}>Акции</h2>
        <span className={styles.promotion__subtitle}>
          Успейте получить выгодное предложение
        </span>
        <MyNavigateButton title="Смотреть все" navigateTo="category/promote"/>
      </div>
      {initialPromotion.map((item) => (
        <PromotionCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          key={item.id}
        />
      ))}
    </div>
  );
};

export { Promotion };
