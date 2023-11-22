import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

// Добавить handleChange для всех инпутов после того как api будет готово и добавить в инпут value

interface MyInputProps {
  value?: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomizeMyInput = styled(TextField)`
  max-width: 390px;
  width: 100%;

  & .MuiInputLabel-root {
    &.Mui-focused {
      color: black; /* Убираем изменение цвета при фокусе */
      margin-left: 10px;
    }
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border: 2px solid #F5F4F2;
      border-radius: 20px;
    }

    &:hover fieldset {
      border: 2px solid #your_hover_color; /* Замените your_hover_color на желаемый цвет при наведении */
    }

    &.Mui-focused fieldset {
      border: 2px solid #F5F4F2; /* Убираем подсветку при фокусе */
    }
  }
`;

const MyInput: React.FC<MyInputProps> = ({
  value,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <CustomizeMyInput
      type="text"
      label={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export { MyInput };
