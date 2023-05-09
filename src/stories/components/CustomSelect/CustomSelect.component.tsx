import React from "react";
import { CustomMenuStyled, CustomSelectStyled } from "./CustomSelect.styled";

function CustomSelectComponent({ ...props }) {
  console.log(props);
  const [age, setAge] = React.useState("10");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <CustomSelectStyled
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={(event) => {
        handleChange(event);
      }}
      defaultValue="hh"
    >
      <CustomMenuStyled value={10}>10</CustomMenuStyled>
      <CustomMenuStyled value={20}>20</CustomMenuStyled>
      <CustomMenuStyled value={30}>50</CustomMenuStyled>
    </CustomSelectStyled>
  );
}

export default CustomSelectComponent;
