import { IUser } from "~/store/user-store/types";
import { GeneralApiProblem } from "../config";

export type ResponseUser =
  | {
      kind: "ok";
      result: IUser;
    }
  | GeneralApiProblem;
