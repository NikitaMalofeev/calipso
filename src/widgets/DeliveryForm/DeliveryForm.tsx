import React from "react";
import { MyInput } from "../../shared/ui/my-input";
import styles from "./styles.module.scss";
import { initialDelveryPayment } from "../../shared/config/initialDeliveryInformation";
import { RadioButtonsGroup } from "../../shared/ui/my-radio-buttons";
import { useFormik } from "formik";
import useModalScrollLock from "../../shared/hooks/useModalScrollLock";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../features/modal-slice/modalSlice";
import { MyModal } from "../../shared/ui/my-modal";
import { useDispatch, useSelector } from "react-redux";
import { IDeliveryAdresses } from "../../shared/types/deliveryTypes";

interface IFormProps {}

const initialDeliveryType = [
  { id: 0, name: "Самовывоз" },
  { id: 1, name: "Доставка" },
];

const DeliveryForm: React.FC<IFormProps> = ({}) => {
  const { isModalOpen, setModalOpen } = useModalScrollLock();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      data: {
        type: "",
        paymentMethod: "",
        address: "",
      },
    },
    onSubmit: (submittedValues) => {
      console.log(submittedValues);
    },
  });

  const dispatch = useDispatch();

  const handleShowMyModal = (modalType: string) => {
    dispatch(showMyModalAction(modalType));
    console.log(modalType);
    setModalOpen(true);
  };

  const handleClose = () => {
    dispatch(hideMyModal());
    setModalOpen(false);
  };

  // FIXME
  const actualAdress = useSelector(
    (state: { delivery: IDeliveryAdresses }) => state.delivery.adresses
  );

  return (
    <div className={styles.form}>
      <>
        <p className={styles.form__title}>Способ доставки</p>
        <RadioButtonsGroup
          value={values.data.type}
          itemList={initialDeliveryType}
          name={"data.type"}
          onChange={handleChange}
          // устнавливаю свойство needMargin только для прожатого элемента который соответствует item.name в группе кнопок
          needMargin={{ [values.data.type]: true }}
        />
        {values.data.type === "Самовывоз" && (
          <div className={styles.radio__window_pickup}>
            г. Алматы, ул. Намаганская
          </div>
        )}
        {values.data.type === "Доставка" && (
          <div className={styles.radio__window_delivery}>
            {actualAdress[0] ? (
              <>
                {actualAdress.slice(0, 1).map((item, index) => (
                  <div key={index} className={styles.radio__adress}>
                    <span className={styles.radio__adress}>
                    {`${item.city}, `}
                    {`${item.adress}, `}
                    {`${item.apartment}`}
                  </span>
                  </div>
                ))}
                <p
                className={styles.radio__window_add}
                onClick={() => handleShowMyModal("Управление адресом")}
              >
                изменить адресс
              </p>
              </>
            ) : (
              <p
                className={styles.radio__window_add}
                onClick={() => handleShowMyModal("Адрес")}
              >
                добавить адрес
              </p>
            )}
          </div>
        )}
        <div className={styles.payment}>
          <p className={styles.form__title}>Способ оплаты</p>
          <RadioButtonsGroup
            value={values.data.paymentMethod}
            itemList={initialDelveryPayment}
            name={"data.paymentMethod"}
            onChange={handleChange}
          />
        </div>
      </>

      <MyModal title="Новый адрес" />
    </div>
  );
};

export { DeliveryForm };
