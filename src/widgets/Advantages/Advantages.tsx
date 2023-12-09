import React from "react";
import styles from "./styles.module.scss";
import { AdvantageCard } from "../../shared/ui/advantages-card";
import { advantagesOverview } from "../../shared/ui/advantages-card";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <h2 className={styles.container__title}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className={styles.container}>
        {advantagesOverview.map((advantage) => (
          <AdvantageCard
            key={advantage.id}
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
          />
        ))}
      </div>
    </div>
  );
};

export {Advantages};
