import React from "react";
import styles from "./styles.module.scss";

interface ProductionCardProps {
  id: number;
  title: string;
  description: string;
  description2?: string;
  image: string;
}

const ProductionCard = ({
  id,
  title,
  description,
  description2,
  image,
}: ProductionCardProps) => {
  return (
    <div className={styles.production}>
      <div className={styles.production__card}>
        <p className={styles.production__title}>{title}</p>
        <p className={styles.production__description}>{description}</p>
        <p className={styles.production__description}>{description2}</p>
        <img src={image} alt="" className={styles.production__image} />
      </div>
    </div>
  );
};

export { ProductionCard };
