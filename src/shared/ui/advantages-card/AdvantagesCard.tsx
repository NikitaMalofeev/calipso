import React from "react";
import styles from "./styles.module.scss";
import health from "../../../shared/icons/health.svg";
import gear from "../../../shared/icons/gear.svg";
import trophy from "../../../shared/icons/trophy.svg";
import certified from "../../../shared/icons/certified.svg";

interface IAdvantageCard {
  title: string;
  description: string;
  icon: string;
}

const advantagesOverview = [
  {
    id: 0,
    title: "Первые в Казахстане",
    description: "",
    icon: `${trophy}`,
  },
  {
    id: 1,
    title: "Техническое обслуживание",
    description: "",
    icon: `${gear}`,
  },
  {
    id: 2,
    title: "Сертифицированный продукт",
    description: "Продукция соответсвует всем стандартам качества",
    icon: `${certified}`,
  },
  {
    id: 3,
    title: "Очистка Без Хлора",
    description: "",
    icon: `${health}`,
  },
];

const AdvantageCard: React.FC<IAdvantageCard> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.card__info}>
        <p className={styles.card__title}>{title}</p>
      </div>
    </div>
  );
};

export { AdvantageCard, advantagesOverview };
