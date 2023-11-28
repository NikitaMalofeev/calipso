import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { Formik, useFormik } from "formik";
import { ILogIn } from "../../../shared/types";
import { BlockLogIn } from "../../../features/block-log-in";
import { initialLogInType } from "../../../shared/config/initialLogIn";
import { RadioButtonsGroup } from "../../../shared/ui/my-radio-buttons";
import { showMyModal as showMyModalAction } from "../../../features/modal-slice/modalSlice";

const getEmptyForm = (type: string) => {
  switch (type) {
    case "эл.почта":
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
    case "одноразовый пароль":
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
          <>
            <div className={styles.form__radio}>
              <RadioButtonsGroup
                value={values.form[index].type}
                name={`form[index].type`}
                onChange={(e) => handleTypeChange(e.target.value)}
                itemList={initialLogInType}
                defaultValue="телефон"
              />
            </div>
            <BlockLogIn
              block={block}
              index={index}
              key={block.id}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          </>
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
