import { IconButton, Input, styled } from "@mui/material";

export const CustomInputComponentStyled = styled(Input)`
  outline: none;
  padding: 10px;
  border: 1px solid #d0d3d9;
  border-radius: 6px;
  background: 0px 0px / 7% no-repeat content-box padding-box rgb(255, 255, 255);
  width: 180px;
  margin: 15px 0;
  color: rgb(26, 26, 26);

  .MuiInputBase-input {
    padding: 0;
    font-size: 14px;
    line-height: 1;
    height: 15px;
  }
`;

export const SearchButtonStyled = styled(IconButton)`
  background-color: #3ab09e;
  padding-inline: 10px;
  border-radius: 5px;
  .MuiSvgIcon-root {
    font-size: 20px;
    padding: 0;
    fill: #fff;
  }
`;
