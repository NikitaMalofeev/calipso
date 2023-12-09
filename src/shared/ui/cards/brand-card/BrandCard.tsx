import React from "react";
import styles from './styles.module.scss'
import brand from "../../../icons/brandIcons/brand.png"

const BrandCard: React.FC = () => {
  return (
    <>
    <div className={styles.brand}>
        
        {/* <img className={styles.brand__bottle} src={bottleImage} alt="" /> */}
        <img className={styles.brand__name} src={brand} alt="" />
        <p className={styles.brand__description}>природная артезианская питьевая ВОДА</p>
    </div>
    </>
  );
};

export { BrandCard };
