import React from "react";
import styles from "./styles.module.scss";
import favoriteIcon from "../../../../shared/icons/symbolIcons/favorite.svg";
import detailsIcon from "../../../../shared/icons/additionalIcons/details.svg";
import { CatalogProductCounter } from "../../../../features/catalog-product-counter";

interface IProductCard {
  productImage: string;
  price: number;
  name: string;
  size?: string;
  productId: number;
  quantity: number;
  isOrderCard?: boolean;
  handleAdd: () => void;
  handleRemove: () => void;
  handleShowPopup?: () => void;
}

const ProductCard: React.FC<IProductCard> = ({
  quantity,
  productImage,
  price,
  name,
  size,
  productId,
  isOrderCard,
  handleAdd,
  handleRemove,
  handleShowPopup
}) => {
  
  return (
    <div className={`${isOrderCard ? styles.card__order : styles.card}`}>
      <div className={styles.card__preview}>
        <img src={favoriteIcon} className={styles.card__favorite} alt="" />
        <img src={productImage} className={styles.card__product} alt="" onClick={handleShowPopup}/>
      </div>
      <img src={detailsIcon} className={styles.card__details} alt="" />
      <div className={styles.description}>
        <p className={styles.description__price}>{price} ₸</p>
        <p className={styles.description__name}>{name}</p>
        <p className={styles.description__amount}>{size}</p>
      </div>
      <CatalogProductCounter handleAdd={handleAdd} handleRemove={handleRemove} productId={productId} quantity={quantity}/>
    </div>
  );
};

export { ProductCard };
