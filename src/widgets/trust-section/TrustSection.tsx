import React from "react";
import styles from "./styles.module.scss";

const initialCompanyName = ["лого", "лого", "лого", "лого", "лого", "лого", "лого","лого", "лого"];

const TrustSection = () => {
  return (
    <div className={styles.trust}>
      <h2 className={styles.trust__title}>Компании которые доверяют нам</h2>
      <p className={styles.trust__subtitle}>Вода “Calipso” на рынке с 1997, и за это время заслужило доверие компаний:</p>
      <div className={styles.trust__strokes}>
        <div className={styles.trust__stroke}>
          {initialCompanyName.map((item, index) => (
            <div className={styles.trust__item} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.trust__stroke}>
          {initialCompanyName.map((item, index) => (
            <span className={styles.trust__item} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TrustSection };