import React from "react";
import styles from "./styles.module.scss";
import { MyButton } from "../../shared/ui/my-button";
import { MyLinkButton } from "../../shared/ui/link-button";


interface IPreOrderCard {
  title: string;
  description: string;
  imageSrc: string;
  orderType?: string;
  showCatalog?: boolean;
}

const PreorderCard: React.FC<IPreOrderCard> = ({
  title,
  description,
  imageSrc,
  orderType,
  showCatalog,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__images}>
          <div
            style={backgroundImageStyle}
            className={styles.card__image}
          ></div>
        </div>
        <div className={styles.card__info}>
          <p className={styles.card__title}>{title}</p>
          <p className={styles.card__description}>{description}</p>
        </div>
        <div className={styles.card__buttons}>
          <MyButton title="Заказать" />
          <MyLinkButton title="Подробнее" href="" />
        </div>
      </div>
    </>
  );
};

export { PreorderCard };
