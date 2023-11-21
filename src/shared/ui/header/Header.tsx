import React from "react";
import { MyButton } from "../my-button/MyButton";
import { BurgerButton } from "../burger-button";
import styles from "./styles.module.scss";
import iconPhone from '../../icons/phone.svg'

interface IHeaderProps {
  showCatalogModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  showCatalogModal
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__buttons}>
        <MyButton title={"Вход"} />
        <MyButton title={"Каталог"} handleClick={showCatalogModal}/>
      </div>
      <img className={styles.header__icon} src={iconPhone} alt={"Phone"} />
      <BurgerButton />
    </div>
  );
};

export { Header };
