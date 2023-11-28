import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { IRegistration } from "../../../shared/types";
import { MyInput } from "../../../shared/ui/my-input";
import { useSelector } from "react-redux";

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
  const [steps, setSteps] = useState(0);

  const handleNext = () => {
    setSteps((prev) => prev + 1);
  };

  const handleBack = () => {
    setSteps((prev) => prev - 1);
  };

  const stepLabels = ["Step 1", "Step 2", "Step 3"];

  const dataIndividual = (useSelector((state: any) => state.registration.dataIndividual));
  console.log(dataIndividual)

  return (
    <>
      <Button
        title="Back"
        type="button"
        onClick={handleBack}
        disabled={steps === 0}
      >
        Back
      </Button>

      <Stepper activeStep={steps} alternativeLabel>
        {stepLabels.map((label, stepIndex) => (
          <Step key={stepIndex}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* рендер инпутов в зависимости от текущего шага*/}
      {steps === 0 && (
        <>
          <MyInput
            placeholder={"Почта"}
            value={block.dataIndividual?.email}
            name={`form[${index}].dataIndividual.email`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.dataIndividual?.password}
            name={`form[${index}].dataIndividual.password`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Повтор пароля"}
            value={block.dataIndividual?.repeatPassword}
            name={`form[${index}].dataIndividual.repeatPassword`}
            onChange={handleChange}
          />
        </>
      )}
      {steps === 1 && (
        <>
        <MyInput
          placeholder={"Контактное лицо(ФИО)"}
          value={block.dataIndividual?.contactPerson}
          name={`form[${index}].dataIndividual.contactPerson`}
          onChange={handleChange}
        />
        <MyInput
          placeholder={"Рабочий номер телефона"}
          value={block.dataIndividual?.phone}
          name={`form[${index}].dataIndividual.phone`}
          onChange={handleChange}
        /></>
      )}
      {steps === 2 && (
        <>
        {dataIndividual.map((item: string) => (
          <p>{item}</p>
        ))}
        </>
      )}

      <Button title="Next" type="button" onClick={handleNext}>
        Next
      </Button>
    </>
  );
};

export { BlockRegistration };
