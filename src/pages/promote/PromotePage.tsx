import React from "react";
import styles from "./styles.module.scss";
import { HeaderPages } from "../../shared/ui/shared/header-pages";
import { initialPromotion } from "../../shared/config/initialPromotion";
import { PromotionCard } from "../../shared/ui/cards/promotion-card";
import { ScrollToTopButton } from "../../shared/ui/buttons/scroll-top-button";

const PromotePage: React.FC = () => {
  return (
    <div className={styles.promote}>
      <HeaderPages
        title="акции"
        subtitle="Успейте получить выгодное предложение"
      />
      <div className={styles.promote__container}>
        {initialPromotion.map((item, index) => (
          <PromotionCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            key={index}
          />
        ))}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export { PromotePage };
