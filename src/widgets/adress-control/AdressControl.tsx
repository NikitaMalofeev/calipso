import React, { useMemo, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import pencilIcon from "../../shared/icons/pencil.svg";
import trashIcon from "../../shared/icons/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  IDeliveryAdresses,
  IDeliveryAdress,
} from "../../shared/types/deliveryTypes";
import { RadioButtonsGroup } from "../../shared/ui/my-radio-buttons";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../features/modal-slice/modalSlice";
import {
  removeDeliveryAdress,
  setSelectedAdress,
} from "../../features/user-slice/deliverySlice";

const AdressControl: React.FC = () => {
  const [selectedAddressLocal, setSelectedAddressLocal] = React.useState<IDeliveryAdress | undefined>(undefined);
  const [showControlWindow, setShowControlWindow] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number>(0);

  const actualAdress = useSelector(
    (state: { delivery: IDeliveryAdresses }) => state.delivery.adresses
  );

  const dispatch = useDispatch();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ищем выбранный адрес по значению из RadioButtonsGroup
    const selected = actualAdress.find(
      (item) =>
        `${item.city}, ${item.adress}, ${item.apartment}` === event.target.value
    );
    // проверяю не undefined ли селектед перед диспатчем
    if (selected) {
      dispatch(setSelectedAdress(selected));
      setSelectedAddressLocal(selected);
      dispatch(hideMyModal());
      console.log(selected);
    }
  };

  const handleShowEditClick = (index: number) => {
    setEditingIndex(index);
    setShowControlWindow(true);
    console.log(index)
  };

  const handleAdressDelete = (index: number) => {
    dispatch(removeDeliveryAdress(index));
    console.log(index);
    console.log("test delete")
  }


  // функция для мемоизации и распаковки обьекта из city, adress и apartment для парсинга на странице radioButton с нужными значениями.
  const formattedAdresses = useMemo(() => {
    return actualAdress.map((item) => {
      return `${item.city}, ${item.adress}, ${item.apartment}`;
    });
  }, [actualAdress]);

  return (
    <div className={styles.adress}>
      {!showControlWindow ? (
        <>
          <RadioButtonsGroup
            name=""
            itemList={formattedAdresses}
            onChange={handleRadioChange}
            value={
              selectedAddressLocal
                ? `${selectedAddressLocal.city}, ${selectedAddressLocal.adress}, ${selectedAddressLocal.apartment}`
                : ""
            }
            needContainer={true}
            needControlImg={true}
            isControl={(index) => handleShowEditClick(index)}
          />
          <button
            className={styles.adress__add}
            onClick={() => dispatch(showMyModalAction("Новый адрес"))}
          >
            + Добавить новый адрес
          </button>
          <button onClick={() => {}}></button>
        </>
      ) : (
        <div className={styles.adress__control}>
          <button className={styles.control__item} onClick={() => dispatch(showMyModalAction("Новый адрес"))}>
            <div className={styles.control__button}>
              <img src={pencilIcon} alt="" className={styles.control__icon} />
            </div>
            <span className={styles.control__description}>Редактировать</span>
          </button>
          <button className={styles.control__item} onClick={() => handleAdressDelete(editingIndex)}>
            <div className={styles.control__button}>
              <img src={trashIcon} alt="" className={styles.control__icon} />
            </div>
            <span className={styles.control__description}>Удалить</span>
          </button>
        </div>
      )}
    </div>
  );
};

export { AdressControl };
