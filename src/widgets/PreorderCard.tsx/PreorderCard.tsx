import React from "react";
import styles from './styles.module.scss'
import { OrderButton } from "../../shared/ui/order-button";
import preorderImage from "../../shared/icons/Preorder.png"

interface IPreOrderCard {
    title: string;
    description: string;
    orderType?: string;
    showCatalog?: boolean;
    buttonColorStyle: string | undefined;
}

const PreorderCard: React.FC<IPreOrderCard> = ({
    title,
    description,
    orderType,
    showCatalog,
    buttonColorStyle
}) => {
  return (
    <>
    <div className={styles.card}>
        <img src={preorderImage} alt=""></img>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__description}>{description}</p>
        <OrderButton title={'Заказать'} colorStyle={buttonColorStyle}/>
    </div>
    </>
  );
};

export { PreorderCard };
