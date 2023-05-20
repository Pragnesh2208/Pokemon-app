import { TextField, styled } from "@mui/material";

export const InputComponentStyled = styled(TextField)`
  &.MuiTextField-root {
    max-width: 100rem;
    width: 50rem;
    .MuiFormLabel-root {
      font-size: 2rem;
    }
    .MuiInput-root {
      margin-top: 2rem;
      font-size: 2rem;

      input {
        padding: 0.4rem 0 0.5rem;
      }
    }
    .MuiFormHelperText-root {
      font-size: 1.5rem;
      margin-top: 0.3rem;
    }
  }
`;

export const CustomInputComponentStyled = styled("input")``;
