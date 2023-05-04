import { oneOf, string } from "prop-types";
import { InputComponentStyled } from "./Input.styled";

function InputComponent({ ...props }) {
  console.log(props);

  return (
    <InputComponentStyled
      {...props.props}
      onChange={() => {
        props.props.onChange();
      }}
    />
  );
}
export default InputComponent;

InputComponent.prototype = {
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
};
