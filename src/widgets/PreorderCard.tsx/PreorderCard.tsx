import React from "react";
import styles from "./styles.module.scss";
import { OrderButton } from "../../shared/ui/order-button";
import preorderImage from "../../shared/icons/Preorder.png";

interface IPreOrderCard {
  title: string;
  description: string;
  orderType?: string;
  showCatalog?: boolean;
}

const PreorderCard: React.FC<IPreOrderCard> = ({
  title,
  description,
  orderType,
  showCatalog,
}) => {
  return (
    <>
      <div className={styles.card}>
        <img src={preorderImage} alt=""></img>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__buttons}>
          <OrderButton title={"Подробнее"} isEmpty={true}/>
          <OrderButton title={"Заказать"}/>
        </div>
      </div>
    </>
  );
};

export { PreorderCard };
