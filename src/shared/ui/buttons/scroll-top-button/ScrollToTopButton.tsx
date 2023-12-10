import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import upArrow from "../../../icons/stickIcon/upIcon.svg"

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.button__container}>
        <button className={styles.button} onClick={scrollToTop}>
            <img src={upArrow} alt="" />
        </button>
    </div>
  )
}

export {ScrollToTopButton}