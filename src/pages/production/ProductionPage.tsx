import React from "react";
import styles from "./styles.module.scss";
import { HeaderPages } from "../../shared/ui/shared/header-pages";
import { initialProductionCard } from "../../shared/config/initialProductionCard";
import { ProductionCard } from "../../shared/ui/cards/production-card";
import { ScrollToTopButton } from "../../shared/ui/buttons/scroll-top-button";

const ProductionPage: React.FC = () => {
  return (
    <div className={styles.production}>
      <HeaderPages
        title="Производство"
        subtitle="Расскажем о производстве качественного товара"
      />
      {initialProductionCard.map((item) => (
        <ProductionCard
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          description2={item.description2}
          image={item.image}
        />
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export { ProductionPage };
