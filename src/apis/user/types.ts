import { IUser } from "~/store/user-store/types";
import { GeneralApiProblem } from "../config";
import { IFriendSearch } from "~/store/friend-store/types";

export type ResponseUser =
  | {
      kind: "ok";
      result: IUser;
    }
  | GeneralApiProblem;

export type ResponseSearchUser =
  | {
      kind: "ok";
      result: IUser[];
    }
  | GeneralApiProblem;

export type IParamsSearchUser = {
  email: string;
  limit?: number;
};

export type ResponseSearchUserWithStatus =
  | {
      kind: "ok";
      result: IFriendSearch[];
    }
  | GeneralApiProblem;
