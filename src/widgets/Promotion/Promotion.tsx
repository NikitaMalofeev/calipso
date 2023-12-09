import React from "react";
import styles from "./styles.module.scss";
import { initialPromotion } from "../../shared/config/initialPromotion";
import { PromotionCard } from "../../shared/ui/promotion-card";
import { HeaderSections } from "../../shared/ui/header-sections";

const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <HeaderSections
        title="акции"
        subtitle="Успейте получить выгодное предложение"
        navigateTo="category/promote"
      />
      <div className={styles.promotion__container}>
        {initialPromotion.map((item) => (
          <PromotionCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export { Promotion };
