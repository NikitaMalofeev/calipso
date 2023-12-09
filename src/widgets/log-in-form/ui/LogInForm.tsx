import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { ILogIn } from "../../../shared/types";
import { BlockLogIn } from "../../../features/block-log-in";
import { showMyModal as showMyModalAction } from "../../../features/modal-slice/modalSlice";
import { MyToggle } from "../../../shared/ui/kit/my-toggle";
import {  initialRegistrationWay } from "../../../shared/config/initialRegistration";


const getEmptyForm = (type: string) => {
  switch (type) {
    case "почта":
      return {
        id: Date.now(),
        type,
        email: "",
        password: "",
      };
    case "телефон":
      return {
        id: Date.now(),
        type,
        phone: "",
        password: "",
      };
    case "sms":
      return {
        id: Date.now(),
        type,
        single: "",
        password: "",
      };
    default:
      return {
        id: Date.now(),
        type,
        password: "",
      };
  }
};

const LogInForm: React.FC = () => {
  const { values, handleChange, handleSubmit, setValues, setFieldValue } =
    useFormik({
      initialValues: { form: [getEmptyForm("телефон") as unknown as ILogIn] },
      onSubmit: (values) => {
        console.log(values.form);
      },
    });

  const [activeType, setActiveType] = useState("");

  const handleTypeChange = (type: string) => {
    setValues({
      form: [getEmptyForm(type) as unknown as ILogIn],
    });
    console.log(type);
  };



  // для работы модального окна с modalSlice и вызова модалки регистрации
  const dispatch = useDispatch();

  const handleShowMyModal = (modalType: string) => {
    dispatch(showMyModalAction(modalType));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        {values.form.map((block, index) => (
          <React.Fragment key={index}>
            <div className={styles.form__radio}>
              <MyToggle
                value={values.form[index].type}
                name={`form[index].type`}
                setActiveType={setActiveType}
                initialToggleName={initialRegistrationWay}
                onChange={(selectedValue) => handleTypeChange(selectedValue)}
              />
            </div>
            <BlockLogIn
              block={block}
              index={index}
              key={index}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          </React.Fragment>
        ))}
      </form>
      <div className={styles.form__additionally}>
        <button className={styles.form__button} onClick={() => handleSubmit()}>
          Войти
        </button>
        <p className={styles.form__remember} onClick={() => {}}>
          Забыли пароль?
        </p>
        <button
          className={styles.form__registration}
          onClick={() => handleShowMyModal("Регистрация")}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export { LogInForm };
