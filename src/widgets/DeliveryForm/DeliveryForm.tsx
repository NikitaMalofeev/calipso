import React, { useState } from "react";
import { MyInput } from "../../shared/ui/my-input";
import styles from "./styles.module.scss"
import { MySelect } from "../../shared/ui/my-select";
import { initialDeliveryCity, initialDelveryPayment } from "../../shared/config/initialDeliveryInformation";
import { RadioButtonsGroup } from "../../shared/ui/my-radio-buttons";


interface IFormProps {
  
}

const DeliveryForm: React.FC<IFormProps> = ({

}) => {
  //FIXME опять типизация

  return (
    <div className={styles.form}>
      <p className={styles.form__title}>Адрес</p>
      <MySelect placeholder="Город" value={""} name={''} onChange={() => {}} itemList={initialDeliveryCity}/>
      <MyInput placeholder="Улица/Проспект" name="city" onChange={() => {}}/>
      <MyInput placeholder="Дом" name="city" onChange={() => {}}/>
      <MyInput placeholder="Офис / Квартира" name="city" onChange={() => {}}/>
      <MyInput placeholder="Комментарий" name="city" onChange={() => {}}/>
      <div className={styles.payment}>
          <p className={styles.payment__title}>Способ оплаты</p>
          <RadioButtonsGroup itemList={initialDelveryPayment} name={''}/>
      </div>
    </div>
  );
};

export { DeliveryForm };
