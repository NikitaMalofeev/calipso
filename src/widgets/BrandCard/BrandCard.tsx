import React from "react";
import styles from './styles.module.scss'
import firstScreenImg from "../../shared/image/фон.png"
import bottleImage from "../../shared/image/mainBottle.png"
import brand from "../../shared/icons/brand.png"

const BrandCard: React.FC = () => {
  return (
    <>
    <div className={styles.brand}>
        <img className={styles.brand__background} src={firstScreenImg} alt="" />
        {/* <img className={styles.brand__bottle} src={bottleImage} alt="" /> */}
        <img className={styles.brand__name} src={brand} alt="" />
        <p className={styles.brand__description}>природная артезианская питьевая ВОДА</p>
    </div>
    </>
  );
};

export { BrandCard };
