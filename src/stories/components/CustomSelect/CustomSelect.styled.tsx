import { MenuItem, Select, styled } from "@mui/material";
type SelectComponentProps = {
  background: string;
};
export const CustomSelectStyled = styled(Select)<SelectComponentProps>`
  &.MuiInputBase-root {
    padding: 20px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }

  legend {
    display: none;
  }

  .MuiSelect-select {
    background: ${({ background }) => {
      const backgroundColor: string = background;
      return backgroundColor;
    }};
    padding: 5px 22px 5px 5px !important;
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    &::after {
      position: absolute;
      content: " ";
      right: 5px;
      height: 4px;
      width: 4px;
      border: 2px solid black;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
    }
  }

  svg {
    display: none;
  }
`;

export const CustomMenuStyled = styled(MenuItem)`
  &.MuiMenuItem-gutters {
    font-size: 14px !important;
  }
`;
