import React from "react";
import styles from "./styles.module.scss";

interface pagesHeaderProps {
    title: string;
    subtitle: string;
}

const HeaderPages = ({title, subtitle, }: pagesHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <span className={styles.header__subtitle}>
        {subtitle}
      </span>
    </div>
  );
};

export { HeaderPages };
