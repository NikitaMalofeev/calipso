import React from "react";
import styles from "./styles.module.scss";
import navigateArrow from "../../shared/icons/stickIcon/navigationArrow.svg"

interface IVacancies {
}

const VacanciesSection: React.FC<IVacancies> = () => {
  return (
    <>
      <div className={styles.vacancies}>
        <div className={styles.vacancies__container}>
        <div className={styles.vacancies__info}>
          <p className={styles.vacancies__title}>Мы в поиске новых сотрудников</p>
          <p className={styles.vacancies__description}>Присоеденяйтесь к нам</p>
        </div>
        <button className={styles.vacancies__button}>
          <span>Смотреть вакансии</span>
          <img src={navigateArrow} alt="" />
        </button>
        </div>
      </div>
    </>
  );
};

export { VacanciesSection };
