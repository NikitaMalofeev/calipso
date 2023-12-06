import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { IDeliveryAdresses } from "../../shared/types/deliveryTypes";
import { RadioButtonsGroup } from "../../shared/ui/my-radio-buttons";

const AdressControl: React.FC = () => {

  const actualAdress = useSelector(
    (state: { delivery: IDeliveryAdresses }) => state.delivery.adresses
  );

  return (
    <div className={styles.container}>
      {actualAdress.map((item, index) => (
        <div key={index} className={styles.adress}>
          <span className={styles.adress__item}>
            {`${item.city}, `}
            {`${item.adress}, `}
            {`${item.apartment}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export { AdressControl };
