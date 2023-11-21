import React from "react";
import styles from "./styles.module.scss";
import favoriteIcon from "../../shared/icons/favorite.svg";
import detailsIcon from "../../shared/icons/details.svg";
import { CatalogProductCounter } from "../../features/catalog-product-counter";

interface IProductCard {
  productImage: string;
  price: string;
  name: string;
  amount: string;
  handleAdd: () => void;
  handleRemove: () => void;
}

const ProductCard: React.FC<IProductCard> = ({
  productImage,
  price,
  name,
  amount,
  handleAdd,
  handleRemove
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__preview}>
        <img src={favoriteIcon} className={styles.card__favorite} alt="" />
        <img src={productImage} className={styles.card__product} alt="" />
      </div>
      <img src={detailsIcon} className={styles.card__details} alt="" />
      <div className={styles.description}>
        <p className={styles.description__price}>{price}</p>
        <p className={styles.description__name}>{name}</p>
        <p className={styles.description__amount}>{amount}</p>
      </div>
      <CatalogProductCounter handleAdd={handleAdd} handleRemove={handleRemove}/>
    </div>
  );
};

export { ProductCard };
