import React from "react";
import styles from "./styles.module.scss";
import { MyNavigateButton } from "../../buttons/my-navigate-button";

interface sectionsHeaderProps {
    title: string;
    subtitle: string;
    navigateTo: string;
}

const HeaderSections = ({title, subtitle, navigateTo}: sectionsHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <span className={styles.header__subtitle}>
        {subtitle}
      </span>
      <MyNavigateButton title="Смотреть все" navigateTo={navigateTo} />
    </div>
  );
};

export { HeaderSections };
