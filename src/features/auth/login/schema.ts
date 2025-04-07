import * as yup from "yup";

export type IFormLogin = {
  email: string;
  password: string;
};

export const schema = yup
  .object({
    email: yup.string().required().label("Email"),
    password: yup.string().required().label("Password"),
  })
  .required();
