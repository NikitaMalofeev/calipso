import React, { useState } from "react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import { IRegistration } from "../../../shared/types";
import { MyInput } from "../../../shared/ui/my-input";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import backIcon from "../../../shared/icons/backIcons.svg";
import styles from "./styles.module.scss";
import { MyButton } from "../../../shared/ui/my-button";

interface BlockRegistrationProps {
  block: IRegistration;
  index: number;
  setFieldValue: (field: string, value: any) => void;
  handleChange: React.ChangeEventHandler;
}

const BlockRegistration: React.FC<BlockRegistrationProps> = ({
  block,
  index,
  handleChange,
}) => {

  // стилизация mui 
  const StyledStepLabel = styled(StepLabel)({
    '& .MuiStepLabel-iconContainer': {
      backgroundColor: 'white', // изменение цвета фона 
      borderRadius: '16px',
      color: "white"
    },
    '& .MuiStepLabel-label': {
      color: '#D9D9D9',
      fontSize: '12px',
    },
  });

  const [steps, setSteps] = useState(0);

  const handleNext = () => {
    setSteps((prev) => prev + 1);
  };

  const handleBack = () => {
    setSteps((prev) => prev - 1);
  };

  const stepLabels = [
    "Основная информация",
    "Контактное лицо",
    "подтверждение",
  ];

  // достаю значения введенные на первых stepах чтобы вывести их в последнем
  const dataIndividualMain = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.main)
  );
  const dataIndividualContact = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.contact)
  );

  return (
    <div className={styles.block}>
      {steps > 0 && (
        <button
          className={styles.block__back}
          title="Back"
          type="button"
          onClick={handleBack}
          disabled={steps === 0}
        >
          <img src={backIcon} alt="" />
        </button>
      )}

      <Stepper activeStep={steps} alternativeLabel>
        {stepLabels.map((label, stepIndex) => (
          <Step key={stepIndex}>
            <StyledStepLabel>{steps >= stepIndex ? label : ""}</StyledStepLabel>
          </Step>
        ))}
      </Stepper>

      {/* рендер инпутов в зависимости от текущего шага*/}
      {steps === 0 && (
        <div className={styles.block__container}>
          <MyInput
            placeholder={"Почта"}
            value={block.dataIndividual?.main.email}
            name={`form[${index}].dataIndividual.main.email`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.dataIndividual?.main.password}
            name={`form[${index}].dataIndividual.main.password`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Повтор пароля"}
            value={block.dataIndividual?.main.repeatPassword}
            name={`form[${index}].dataIndividual.main.repeatPassword`}
            onChange={handleChange}
          />
        </div>
      )}
      {steps === 1 && (
        <div className={styles.block__container}>
          <MyInput
            placeholder={"Контактное лицо(ФИО)"}
            value={block.dataIndividual?.contact.contactPerson}
            name={`form[${index}].dataIndividual.contact.contactPerson`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Рабочий номер телефона"}
            value={block.dataIndividual?.contact.phone}
            name={`form[${index}].dataIndividual.contact.phone`}
            onChange={handleChange}
          />
        </div>
      )}
      {/* FIXME достать нормально значение из state, возможно изменить сам стейт, что делать с плейсхолдерами, правильный ли подход вообще так использовать инпуты, в общем жесть */}
      {steps === 2 && (
        <div className={styles.block__container}>
          <p className={styles.block__title}>Основная информация</p>
          {(dataIndividualMain as string[]).map(
            (item: string, index: number) => (
              <>
                {index === 2 ? (
                  ""
                ) : (
                  <>
                    <MyInput
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={["Почта", "Пароль"][index]}
                      key={index}
                    />
                  </>
                )}
              </>
            )
          )}
          <p className={styles.block__title}>Контактная информация</p>
          {(dataIndividualContact as string[]).map(
            (item: string, index: number) => (
              <>
                <MyInput
                  value={item}
                  name=""
                  onChange={() => {}}
                  placeholder={
                    ["Контактное лицо(ФИО)", "Рабочий номер телефона"][index]
                  }
                  key={index}
                />
              </>
            )
          )}
        </div>
      )}

      <MyButton title="Далее" type="button" handleClick={handleNext} />
    </div>
  );
};

export { BlockRegistration };
