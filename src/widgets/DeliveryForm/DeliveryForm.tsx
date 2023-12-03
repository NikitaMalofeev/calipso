import React, { useState } from "react";
import { MyInput } from "../../shared/ui/my-input";
import styles from "./styles.module.scss"
import {  initialDelveryPayment } from "../../shared/config/initialDeliveryInformation";
import { RadioButtonsGroup } from "../../shared/ui/my-radio-buttons";


interface IFormProps {
  
}

const initialDeliveryType = [{id: 0, name: 'Самовывоз'}, {id: 1, name: "Доставка"}]

const DeliveryForm: React.FC<IFormProps> = ({

}) => {
  //FIXME опять типизация

  return (
    <div className={styles.form}>
      <p className={styles.form__title}>Способ доставки</p>
      <RadioButtonsGroup itemList={initialDeliveryType} name={''}/>
      <div className={styles.payment}>
          <p className={styles.form__title}>Способ оплаты</p>
          <RadioButtonsGroup itemList={initialDelveryPayment} name={''}/>
      </div>
    </div>
  );
};

export { DeliveryForm };
