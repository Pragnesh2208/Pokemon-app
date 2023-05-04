import { useState } from "react";
import { Field, Form } from "react-final-form";
import InputComponent from "../../../../stories/components/Input/components/Input/Input.component";

function LoginComponent() {
  const [userName, setUserName] = useState("");
  const userNameProps = {
    name: "User Name",
    placeholder: "Enter User Name",
    defaultValue: "",
    error: true,
    helperText: "User Name is required",
    variant: "standard",
    type: "string",
    autoFocus: true,
    label: "User Name",
    value: "",
    onChange: (userValue: string) => {
      updateUserName(userValue);
    },
  };

  function updateUserName(val: string) {
    setUserName(val);
  }

  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: any) => {
    await sleep(300);
    window.alert(JSON.stringify(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name={"userName"}
              component={InputComponent}
              props={userNameProps}
            ></Field>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    ></Form>
  );
}
export default LoginComponent;
