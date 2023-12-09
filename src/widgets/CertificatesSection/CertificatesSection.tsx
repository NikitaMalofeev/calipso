import React from 'react'
import styles from "./styles.module.scss"
import certificate1 from "../../shared/image/certificate1.png"
import certificate2 from "../../shared/image/certificate2.png"

const certificatesImage = [certificate1, certificate2, certificate1, certificate1, certificate1]

const CertificatesSection = () => {
  return (
    <div>
        <h2 className={styles.certificates__title}>Сертификаты</h2>
        <p className={styles.certificates__description}>Вода “Calipso” соответсует всем нормам и требованиям</p>
        <div className={styles.certificates__list}>
            {certificatesImage.map((item, index) => (
                <div key={index} className={styles.certificates__item}>
                    <img src={item} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export { CertificatesSection }