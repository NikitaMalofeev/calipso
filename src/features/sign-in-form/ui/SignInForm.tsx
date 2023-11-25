import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { RadioButtonsGroup } from "../../../shared/ui/my-radio-buttons";
import { initialSignInType } from "../../../shared/config/initialSignIn";
import { MyInput } from "../../../shared/ui/my-input";
import { ISignIn } from "../../../shared/types";


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

const SignInForm: React.FC = () => {
  const { values, handleChange, handleSubmit, setValues, setFieldValue } =
    useFormik({
      initialValues: { form: [getEmptyForm("phone") as unknown as ISignIn] },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const addBlock = (type: string) => {
    setValues({ ...values, form: [...values.form, getEmptyForm(type)] });
  };

  return (
    <div className={styles.form}>
      <title className={styles.form__title}>Вход</title>
      <form action="">
        <RadioButtonsGroup name="" itemList={initialSignInType} />
        <MyInput placeholder="" name="" onChange={() => {}} />
        <MyInput placeholder="" name="" onChange={() => {}} />
      </form>
    </div>
  );
};

export { SignInForm };
