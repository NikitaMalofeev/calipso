import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import pencilIcon from "../../shared/icons/pencil.svg";
import trashIcon from "../../shared/icons/trash.svg";
import closeIcon from "../../shared/icons/close.svg";
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
  updateDeliveryAdress,
} from "../../features/user-slice/deliverySlice";
import { MyInput } from "../../shared/ui/my-input";
import { MyButton } from "../../shared/ui/my-button";

const AdressControl: React.FC = () => {
  const [selectedAddressLocal, setSelectedAddressLocal] = useState<
    IDeliveryAdress | undefined
  >(undefined);
  const [editingIndex, setEditingIndex] = useState<number>(0);

  // состояния для редактирования адресов внутри компонента, хочется оптимизировать FIXME
  const [showControlWindow, setShowControlWindow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formValues, setFormValues] = useState<IDeliveryAdress>({
    city: "",
    adress: "",
    apartment: "",
  });

  const actualAdress = useSelector(
    (state: { delivery: IDeliveryAdresses }) => state.delivery.adresses
  );

  const dispatch = useDispatch();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = actualAdress.find(
      (item) =>
        `${item.city}, ${item.adress}, ${item.apartment}` === event.target.value
    );

    if (selected) {
      dispatch(setSelectedAdress(selected));
      setSelectedAddressLocal(selected);
      dispatch(hideMyModal());
      setFormValues(selected);
    }
  };

  const handleShowEditClick = (index: number) => {
    setEditingIndex(index);
    setShowControlWindow(true);
    setFormValues(actualAdress[index]);
  };

  const handleAdressDelete = (index: number) => {
    dispatch(removeDeliveryAdress(index));
    dispatch(hideMyModal());
  };

  const handleFormInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSaveEdit = (index: number) => {
    dispatch(updateDeliveryAdress({ index, updatedAdress: formValues }));
    setShowControlWindow(false)
    setShowEditModal(false)
  };

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
          <button
            className={styles.control__item}
            onClick={() => setShowEditModal(true)}
          >
            <div className={styles.control__button}>
              <img src={pencilIcon} alt="" className={styles.control__icon} />
            </div>
            <span className={styles.control__description}>Редактировать</span>
          </button>
          <button
            className={styles.control__item}
            onClick={() => handleAdressDelete(editingIndex)}
          >
            <div className={styles.control__button}>
              <img src={trashIcon} alt="" className={styles.control__icon} />
            </div>
            <span className={styles.control__description}>Удалить</span>
          </button>
        </div>
      )}
      {showEditModal && (
        <div className={styles.edit}>
          <p className={styles.edit__title}>Новый адрес</p>
          <button className={styles.edit__close} onClick={() => setShowEditModal(false)}>
            <img src={closeIcon} alt="" />
          </button>
          <MyInput
            inputType="text"
            placeholder="Город"
            name="city"
            onChange={handleFormInputChange}
            value={formValues.city}
          />
          <MyInput
            inputType="text"
            placeholder="Улица/Дом"
            name="adress"
            onChange={handleFormInputChange}
            value={formValues.adress}
          />
          <MyInput
            inputType="text"
            placeholder="Квартира/Офис"
            name="apartment"
            onChange={handleFormInputChange}
            value={formValues.apartment}
          />
          <MyButton
            title="Подтвердить"
            handleClick={() => handleSaveEdit(editingIndex)}
          />
        </div>
      )}
    </div>
  );
};

export { AdressControl };
