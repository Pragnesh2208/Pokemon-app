import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { CustomMenuStyled, CustomSelectStyled } from "./CustomSelect.styled";

function CustomSelectComponent({ ...props }) {
  const [age, setAge] = React.useState(props.defaultValue);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event?.target?.value as string);
    props.updateValue(event?.target?.value as number);
  };
  const menu = props.menuInfo;

  return (
    <CustomSelectStyled
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={(event: SelectChangeEvent<unknown>) => {
        handleChange(event);
      }}
    >
      {" "}
      {menu.map((x) => {
        return <CustomMenuStyled value={x.value}>{x.key}</CustomMenuStyled>;
      })}
    </CustomSelectStyled>
  );
}

export default CustomSelectComponent;
