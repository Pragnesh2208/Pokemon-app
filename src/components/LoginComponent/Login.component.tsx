import { useReducer } from "react";
import { Field, Form } from "react-final-form";
import { verifyUserDetails } from "../../APIs/Storage.api";
import { UserInfo } from "../../models/UserInfo.model";
import CustomInputComponent from "../../stories/components/CustomInput/Input.component";

type Actions = {
  type: string;
  newValue: string;
};

function reducer(state: any, action: Actions) {
  console.log(window.history.state);
  switch (action.type) {
    case "updateEmailValue": {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case "updatePasswordValue": {
      return {
        ...state,
        password: action.newValue,
      };
    }
  }
}

function LoginComponent() {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    emailIsNotvalid: false,
    password: "",
  });

  const emailProps = {
    name: "Email",
    placeholder: "Enter Email",
    error: state.emailIsNotvalid,
    helperText: "Email is required",
    variant: "standard",
    type: "email",
    autoFocus: true,
    label: "Email",
    value: state.email,
  };

  const userPasswordProps = {
    name: "Password",
    placeholder: "Enter Password",
    error: false,
    helperText: "Password is required",
    variant: "standard",
    type: "password",
    autoFocus: true,
    label: "Password",
    value: state.password,
  };

  const onSubmit = async () => {
    const userInfo: UserInfo = {
      email: state.email,
      password: state.password,
    };
    const isUserValid = verifyUserDetails(userInfo);
    if (isUserValid) {
      // navigate("/pokemon-listing");
      console.log("Validated");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <Field
              name={"email"}
              component={CustomInputComponent}
              input={emailProps}
              updateField={(newValue: string) => {
                dispatch({ type: "updateEmailValue", newValue: newValue });
              }}
            ></Field>
          </div>

          <div>
            <Field
              name={"password"}
              component={CustomInputComponent}
              input={userPasswordProps}
              updateField={(newValue: string) => {
                dispatch({ type: "updatePasswordValue", newValue: newValue });
              }}
            ></Field>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    />
  );
}
export default LoginComponent;
