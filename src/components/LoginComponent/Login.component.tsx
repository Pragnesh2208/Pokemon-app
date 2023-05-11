import { useContext, useEffect, useReducer, useState } from "react";
import { Field, Form } from "react-final-form";
import { verifyUserDetails } from "../../APIs/Storage.api";
import { userInfoContext } from "../../Context/UserInfoContext";
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

  const onSubmit = async (values: UserInfo, form) => {
    const userInfo: UserInfo = {
      email: state.email,
      password: state.password,
    };
    console.log(values);
    setIsUserValid(verifyUserDetails(userInfo));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};

        return errors;
      }}
      render={({ handleSubmit }) => {
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
                validate={(values) => {
                  console.log(values);
                  let errors = " ";
                  const emailRegex =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if (values?.trim()?.length === 0) errors = "required";
                  else if (!emailRegex.test(values)) {
                    errors = "invalidEmail";
                  }
                  return errors;
                }}
              >
                {({ input, meta }) => {
                  console.log("meta : ", meta);

                  return (
                    <CustomInputComponent
                      id="email"
                      label="email"
                      placeholder="Email"
                      type="email"
                      variant="standard"
                      {...input}
                      error={() => {
                        if (meta.pristine && meta.touched) return true;
                        else if (meta.touched && meta.error) return true;
                        else return false;
                      }}
                      helperText={() => {
                        if (meta.pristine && meta.touched)
                          return "Email is required";
                        else if (meta.touched && meta.error)
                          return "Please enter valid email";
                        else return " ";
                      }}
                    />
                  );
                }}
              </Field>
            </div>

            <div>
              <Field name="password">
                {({ input, meta }) => {
                  return (
                    <CustomInputComponent
                      id="password"
                      label="password"
                      placeholder="Enter Password"
                      variant="standard"
                      {...input}
                      type="email"
                      error={meta.touched && meta.error}
                      helperText={
                        meta.touched && meta.error
                          ? meta.error === "minimumLength"
                          : ""
                      }
                    />
                  );
                }}
              </Field>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        );
      }}
    />
  );
}
export default LoginComponent;
