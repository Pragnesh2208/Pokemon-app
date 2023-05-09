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
    case "updateConfirmPasswordValue": {
      return {
        ...state,
        confirmPassword: action.newValue,
      };
    }
  }
}

function RegisterComponent() {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    emailIsNotvalid: false,
    password: "",
    confirmPassword: "",
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

  const userConfirmPasswordProps = { ...userPasswordProps };
  userConfirmPasswordProps.value = state.confirmPassword;
  userConfirmPasswordProps.name = "confirmPassword";
  userConfirmPasswordProps.placeholder = "Enter Confirm Password";
  userConfirmPasswordProps.label = "Confrim Password";

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
              inputComponentProps={emailProps}
              updateField={(newValue: string) => {
                dispatch({ type: "updateEmailValue", newValue: newValue });
              }}
            ></Field>
          </div>

          <div>
            <Field
              name={"password"}
              component={CustomInputComponent}
              inputComponentProps={userPasswordProps}
              updateField={(newValue: string) => {
                dispatch({ type: "updatePasswordValue", newValue: newValue });
              }}
            ></Field>
          </div>

          <div>
            <Field
              name={"confirmPassword"}
              component={CustomInputComponent}
              inputComponentProps={userConfirmPasswordProps}
              updateField={(newValue: string) => {
                dispatch({
                  type: "updateConfirmPasswordValue",
                  newValue: newValue,
                });
              }}
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

export default RegisterComponent;
