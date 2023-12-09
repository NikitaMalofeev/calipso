import React from "react";
import styles from "./styles.module.scss";
import { HeaderSections } from "../../shared/ui/header-sections";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { PreorderCard } from "../PreorderCard.tsx";

const servicesRoutes = [
  "water",
  "equipment",
  "services"
]

const Services = () => {
  return (
    <>
      <HeaderSections
        title="товары и услуги"
        subtitle="Узнайте подробнее о всех категориях"
        navigateTo="/"
      />
      <div className={styles.services}>
        {initialOverview.map((item, index) => (
          <PreorderCard
            title={item.name}
            description={item.description}
            imageSrc={item.imageSrc}
            key={index}
            routes={servicesRoutes[index]}
          />
        ))}
      </div>
    </>
  );
};

export { Services };