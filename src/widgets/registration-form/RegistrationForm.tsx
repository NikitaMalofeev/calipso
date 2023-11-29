import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { Formik, useFormik } from "formik";
import { BlockRegistration } from "../../features/block-registration";
import { MyToggle } from "../../shared/ui/my-toggle";
import { IRegistration } from "../../shared/types";
import { setRegistrationIndividualData } from "../../features/user-slice/registrationSlice";

const getEmptyForm = (type: string) => {
  switch (type) {
    case "физ.лицо":
      return {
        id: Date.now(),
        type,
        dataIndividual: {
          type: "",
          method: "",
          main: {
            email: "",
            password: "",
            repeatPassword: "",
          },
          contact: {
            contactPerson: "",
            phone: "",
          }
        }
      };
    case "юр.лицо":
      return {
        id: Date.now(),
        type,
        dataLegal: {
          main: {
            email: "",
            password: "",
            repeatPassword: "",
          },
          contact: {
            contactPerson: "",
            phone: "",
          }
        }
      };
    default:
      return {
        id: Date.now(),
        type,
        password: "",
      };
  }
};

const RegistrationForm: React.FC = () => {
  const { values, handleChange, handleSubmit, setValues, setFieldValue } =
    useFormik({
      initialValues: {
        form: [getEmptyForm("физ.лицо") as unknown as IRegistration],
      },
      onSubmit: (values) => {
        console.log(values.form);
      },
    });

  const CustomhandleSubmit = () => {
    dispatch(setRegistrationIndividualData(values.form[0].dataIndividual))
    console.log(values.form);
  }

  const handleTypeChange = (type: string) => {
    setValues({
      form: [getEmptyForm(type) as unknown as IRegistration],
    });
    console.log(type);
    console.log("test");
  };

  const dispatch = useDispatch();

  return (
    <>
      <form className={styles.form} action="">
        {values.form.map((block, index) => (
          <>
            <BlockRegistration
              block={block}
              index={index}
              key={block.id}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              handleSubmit={CustomhandleSubmit}
            />
          </>
        ))}
      </form>
    </>
  );
};

export { RegistrationForm };
