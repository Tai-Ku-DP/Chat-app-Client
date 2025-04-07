import * as yup from "yup";

export type IFormSignup = {
  password: string;
  passwordConfirm: string;
  email: string;
  fullName: string;
};

export const schema = yup
  .object({
    fullName: yup.string().required().label("Full NAme"),
    email: yup.string().required().email().label("Email"),
    password: yup
      .string()
      .required()
      .label("Password")
      .min(6, "Password must be at least 6 characters"),
    passwordConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
