import React from "react";
import styles from "./styles.module.scss";
import successIcon from "../../../icons/stickIcon/notificationSuccess.svg";
import errorIcon from "../../../icons/stickIcon/notificationError.svg";

interface NotificationProps {
  status: boolean;
  title: string;
}

const NotificationStatus = ({ status, title }: NotificationProps) => {
    const titleStyle = status ? { color: '#38B000' } : { color: '#F63236' };
    const buttonStyle = status ? { backgroundColor: '#38B000' } : { backgroundColor: '#F63236' };
    const circleStyle = status ? { backgroundColor: '#38B000' } : { backgroundColor: '#F63236' };

    return (
    <div className={styles.notification}>
      <div>
        <p className={styles.notification__title} style={titleStyle}>{title}</p>
        <div className={styles.notification__circle} style={circleStyle}>
            <img
            className={styles.notification__icon}
            src={status === true ? successIcon : errorIcon}
            alt=""
            />
        </div>
       </div>
      <button className={styles.notification__button} style={buttonStyle}>Завершить</button>
    </div>
  );
};

export { NotificationStatus };
