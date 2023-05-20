const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = (value) => (value ? undefined : "Required");

export const validEmail = (value) => {
  if (!value) return undefined;
  else if (value?.trim()?.length === 0) return "Email is required";
  else if (!emailRegex.test(value)) return "Email is not valid";
  else return undefined;
};

export const minLength = (minLength: number) => (value: string) => {
  if (value.length < minLength)
    return "Minimum Length " + minLength + "  " + "is Required";
  return undefined;
};

export const compositeValidator =
  (...validators: Array<CallableFunction>) =>
  (value: string) => {
    return validators.reduce(
      (error, validate) => error || validate(value),
      undefined
    );
  };
