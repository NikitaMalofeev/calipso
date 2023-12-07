import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import successIcon from "../../icons/notificationSuccess.svg"

interface CustomStepperProps {
  steps: number;
  stepsItem: string[];
  activeStep: number;
  updateSteps: (step: number) => void;
}

const MyStepper: React.FC<CustomStepperProps> = ({
  steps,
  stepsItem,
  activeStep,
  updateSteps,
}) => {
  const [flashingStep, setFlashingStep] = useState<number | null>(null);

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlashingStep((prevFlashingStep) =>
        prevFlashingStep === null ? activeStep : null
      );
    }, 500);

    return () => clearInterval(flashInterval);
  }, [activeStep]);

  return (
    <div className={styles.stepper}>
      <ul
        style={{ listStyleType: "none", padding: 0, margin: 0 }}
        className={styles.stepper__list}
      >
        {stepsItem.map((label, index) => (
          <div className={styles.stepper__item} key={label}>
            <div
              className={`${styles.stepper__circle} ${
                index === activeStep
                  ? styles.stepper__circle_current
                  : index > activeStep
                  ? styles.stepper__circle_disabled
                  : styles.stepper__circle_finish
              }`}
            >
              {index < stepsItem.length - 1 ? (
                <div
                  className={styles.stepper__line}
                  style={{
                    border:
                      index === flashingStep
                        ? "2px solid white"
                        : "2px dashed grey" && steps < index ? "2px dashed grey" : "2px dashed green",
                  }}
                ></div>
              ) : null}
              {index > activeStep ? "" : (
                <img src={successIcon} alt="" className={styles.stepper__icon}/>
              )}
              <p className={styles.stepper__label}>
                {index === activeStep ? label : ""}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { MyStepper };
