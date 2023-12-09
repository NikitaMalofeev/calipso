import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import navigateIcon from "../../../icons/stickIcon/navigationArrow.svg"

interface navigateButtonProps {
    title: string;
    navigateTo: string;
    isBigButton?: boolean;
}

const MyNavigateButton = ({ title, navigateTo, isBigButton}: navigateButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className={!isBigButton ? styles.button : styles.button_big} onClick={() => navigate(`${navigateTo}`)}>
        <span className={!isBigButton ? styles.button__title : styles.button__title_big}>{title}</span>
        <img src={navigateIcon} alt="" className={!isBigButton ? styles.button__arrow : styles.button__arrow_big}/>
    </button>
  )
};

export { MyNavigateButton };
