import { useReducer } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { storeUserDetails, verifyUserDetails } from "../../APIs/Storage.api";
import { UserInfo } from "../../models/UserInfo.model";
import CustomInputComponent from "../../stories/components/CustomInput/Input.component";
import {
  compositeValidator,
  minLength,
  required,
  validEmail,
} from "../../util/validations";

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

  const naviagate = useNavigate();

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
    if (!isUserValid) {
      // navigate("/pokemon-listing");
      storeUserDetails(userInfo);
    }
    naviagate("/login");
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const error = {};
        console.log(values);
        if (values.password !== values.confirmPassword) {
          error.confirmPassword = "Confirm password and password are different";
        }
        return error;
      }}
      render={({ handleSubmit, error }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <Field
              name="email"
              validate={compositeValidator(required, validEmail)}
            >
              {({ input, meta }) => {
                return (
                  <CustomInputComponent
                    id="email"
                    label="email"
                    placeholder="Enter Email"
                    type="email"
                    variant="standard"
                    {...input}
                    error={meta.touched && meta.error ? true : false}
                    helperText={(meta.touched && meta.error) || " "}
                  ></CustomInputComponent>
                );
              }}
            </Field>
          </div>

          <div>
            <Field
              name="password"
              validate={compositeValidator(required, minLength(4))}
            >
              {({ input, meta }) => {
                console.log(meta);
                return (
                  <CustomInputComponent
                    id="password"
                    label="Password"
                    placeholder="Enter Password"
                    variant="standard"
                    {...input}
                    type="password"
                    error={meta.touched && meta.error ? true : false}
                    helperText={(meta.touched && meta.error) || error || " "}
                  />
                );
              }}
            </Field>
          </div>

          <div>
            <Field name="confirmPassword">
              {({ input, meta }) => {
                return (
                  <CustomInputComponent
                    id="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter confirm password"
                    variant="standard"
                    {...input}
                    type="password"
                    error={meta.touched && meta.error ? true : false}
                    helperText={meta.touched ? meta.error : " "}
                  ></CustomInputComponent>
                );
              }}
            </Field>
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      )}
    ></Form>
  );
}

export default RegisterComponent;
