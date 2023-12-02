import React from "react";
import styles from "./styles.module.scss";
import { MyLinkButton } from "../../shared/ui/link-button";

interface IVacancies {
  title: string;
  description: string;
}

const Vacancies: React.FC<IVacancies> = ({ title, description }) => {
  return (
    <>
      <div className={styles.vacancies}>
        <div className={styles.vacancies__info}>
          <p className={styles.vacancies__title}>{title}</p>
          <p className={styles.vacancies__description}>{description}</p>
        </div>
        <div className={styles.vacancies__buttons}>
          <MyLinkButton title="Подробнее" href="" />
        </div>
      </div>
    </>
  );
};

export { Vacancies };
