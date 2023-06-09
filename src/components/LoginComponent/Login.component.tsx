import { FORM_ERROR } from "final-form";
import { useContext, useEffect, useReducer, useState } from "react";
import { Field, Form } from "react-final-form";
import { verifyUserDetails } from "../../APIs/Storage.api";
import { userInfoContext } from "../../Context/UserInfoContext";
import { UserInfo } from "../../models/UserInfo.model";
import CustomInputComponent from "../../stories/components/CustomInput/Input.component";
import {
  compositeValidator,
  minLength,
  required,
  validEmail,
} from "../../util/validations";
import { Link } from "react-router-dom";
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
  }
}

function LoginComponent({ updateLogin }) {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    emailIsNotvalid: false,
    password: "",
  });
  const userInfo = useContext(userInfoContext);

  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    if (isUserValid) {
      userInfo?.disPatch(isUserValid);
      updateLogin(isUserValid);
    }
  }, [isUserValid]);

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

  const onSubmit = async (values: UserInfo) => {
    setIsUserValid(verifyUserDetails(values));
    if (!isUserValid) return { [FORM_ERROR]: "Login cred not valid" };
  };

  return (
    <>
       <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitError }) => {
        return (
          <form
            className="form"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
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
                    />
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
                  return (
                    <CustomInputComponent
                      id="password"
                      label="password"
                      placeholder="Enter Password"
                      variant="standard"
                      {...input}
                      type="password"
                      error={
                        (!meta.active && submitError) ||
                        (meta.touched && meta.error)
                          ? true
                          : false
                      }
                      helperText={
                        !meta.active && submitError
                          ? "Login cred not valid"
                          : (meta.touched && meta.error) || " "
                      }
                    />
                  );
                }}
              </Field>
            </div>

            <div>
              <button type="submit">Login</button>
              <Link to="/register" > 
              <p style={{margin : '20px' , fontSize : '20px'}}>Want to register Click on SignUp</p>
    <button type="button">SignUp</button>
    </Link>
            </div>
          </form>
        );
      }}
    />
    
    </>
 
  );
}
export default LoginComponent;
