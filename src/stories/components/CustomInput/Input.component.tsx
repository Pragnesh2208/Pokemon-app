import { oneOf, string } from "prop-types";
import { InputComponentStyled } from "./Input.styled";

function CustomInputComponent({ ...props }) {
  return (
    <InputComponentStyled
      {...props.inputComponentProps}
      onChange={(event) => props.updateField(event.target.value)}
    ></InputComponentStyled>
  );
}
export default CustomInputComponent;

CustomInputComponent.prototype = {
  id: string,
  label: string,
  variant: oneOf(["outlined", "filled", "standard"]),
  autofocus: Boolean,
  color: string,
  defaultValue: string,
  name: string,
  placeholder: string,
  type: oneOf(["text", "number", "password"]),
  error: Boolean,
  helperText: string,
  size: oneOf(["small", "medium"]),
};
