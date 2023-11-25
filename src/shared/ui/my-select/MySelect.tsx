import { Box, TextField, MenuItem, styled } from "@mui/material";

interface SelectItemProps {
  id: number;
  name: string;
}
interface SelectProps {
  itemList: SelectItemProps[];
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
}

// Кастомизация select
const CustomizeTextField = styled(TextField)`
  width: 100%;

  & .MuiInputLabel-root {
    color: #979797;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: black;  // меняю цвет label при focus 
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset,
    &.Mui-focused fieldset {
      border-color: black;  // 
    }

    & .MuiOutlinedInput-notchedOutline {
      border-radius: 20px;
    }

    & fieldset {
      border: 2px solid #F5F4F2;
    }
  }
`;

const CustomizeMenuItem = styled(MenuItem)`
  background: #f5f7fa;
  color: #6F7A8B;
`;


const MySelect: React.FC<SelectProps> = ({itemList, name, value, placeholder, onChange}) => {
  return (
    <Box>
      <CustomizeTextField
        name={name}
        label={placeholder}
        select
        value={value}
        onChange={onChange}
      >
        {itemList.map((item, index) => (
          <CustomizeMenuItem value={item.name} key={index}>{item.name}</CustomizeMenuItem>
        ))}
      </CustomizeTextField>
    </Box>
  );
}

export { MySelect };
