import React from "react";
import styles from "./styles.module.scss";
import { OrderButton } from "../../shared/ui/order-button";
import preorderImage from "../../shared/image/PreOrderImage.png";
import { MyButton } from "../../shared/ui/my-button";
import { MyLinkButton } from "../../shared/ui/link-button";
import preOrderCardLogo from "../../shared/icons/preOrderCardLogo.svg";

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
        <div className={styles.card__images}>
          <img
            className={styles.card__logo}
            src={preOrderCardLogo}
            alt=""
          ></img>
          <img className={styles.card__image} src={preorderImage} alt=""></img>
        </div>

        <div className={styles.card__info}>
          <p className={styles.card__title}>{title}</p>
          <p className={styles.card__description}>{description}</p>i
        </div>
        <div className={styles.card__buttons}>
          {/* <OrderButton title={"Подробнее"} isEmpty={true}/>
          <OrderButton title={"Заказать"}/> */}

          {/* <MyButton title="Подробнее" /> */}
          <MyLinkButton title="Подробнее" href="" />
          <MyButton title="Заказать" />
        </div>
      </div>
    </>
  );
};

export { PreorderCard };
