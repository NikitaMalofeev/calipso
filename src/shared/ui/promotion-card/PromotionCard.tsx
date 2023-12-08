import React from 'react'
import styles from "./styles.module.scss"

interface PromotionCardProps {
    title: string;
    subtitle: string;
    image: string;
}

const PromotionCard = ({title, subtitle, image}: PromotionCardProps) => {
  return (
    <div className={styles.promotion}>
        <img src={image} alt="" className={styles.promotion__image}/>
        <div className={styles.promotion__description}>
            <h3 className={styles.promotion__title}>{title}</h3>
            <span className={styles.promotion__subtitle}>{subtitle}</span>
            <a href="/category/promote" className={styles.promotion__more}>Подробнее</a>
        </div>
    </div>
  )
}

export { PromotionCard }