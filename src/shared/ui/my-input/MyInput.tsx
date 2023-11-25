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
  width: 100%;
  
  & .MuiInputLabel-root {
    color: #979797;
    &.Mui-focused {
      color: black; /* Убираем изменение цвета при фокусе */
    }
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border: 2px solid #F5F4F2;
      border-radius: 20px;
    }

    &:hover fieldset {
      border: 2px solid black;
    }

    &.Mui-focused fieldset {
      border: 2px solid black; /* Убираем подсветку при фокусе */
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
