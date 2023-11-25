import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { ISignIn } from "../../../shared/types";
import { BlockSignIn } from "../../../features/block-sign-in";

const getEmptyForm = (type: string) => {
  switch (type) {
    case "email":
      return {
        id: Date.now(),
        type,
        email: "",
        password: "",
      };
    case "phone":
      return {
        id: Date.now(),
        type,
        phone: "",
        password: "",
      };
    default:
      return {
        id: Date.now(),
        type,
        phone: "",
        password: "",
      };
  }
};

const SignInForm: React.FC = ({}) => {
  const { values, handleChange, handleSubmit, setValues, setFieldValue } =
    useFormik({
      initialValues: { form: [getEmptyForm("phone") as unknown as ISignIn] },
      onSubmit: (values) => {
        console.log(values.form);
      },
    });

  return (
    <div className={styles.container}>
      <title className={styles.form__title}>Вход</title>
      <form className={styles.form} action="">
        {values.form.map((block, index) => (
          <BlockSignIn
            block={block}
            index={index}
            key={block.id}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        ))}
      </form>
      <button className={styles.form__button} onClick={() => handleSubmit()}>Войти</button>
      <p className={styles.form__remember} onClick={() => {}}>Забыли пароль?</p>
      <p className={styles.form__registration} onClick={() => {}}>Зарегистрироваться</p>
    </div>
  );
};

export { SignInForm };
