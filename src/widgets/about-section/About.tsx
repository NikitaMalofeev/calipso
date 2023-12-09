import React from "react";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>О КОМПАНИИ</h1>
      <p className={styles.about__description}>
        ТОО «Комета» является первым казахстанским производителем экологически
        чистой озонированной питьевой воды. Изучив рынок питьевой воды и спрос
        на нее в республике, наша компания начала свою деятельность на
        казахстанском рынке и наладила производство экологически чистой питьевой
        воды «Calipso» с апреля 1997 года.
      </p>
    </div>
  );
};

export { About };
