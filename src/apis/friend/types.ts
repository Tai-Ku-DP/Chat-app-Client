import { IFriendSearchStatus } from "~/store/friend-store/types";
import { GeneralApiProblem } from "../config";

export type ResponseBooleanCommon =
  | {
      kind: "ok";
      result: boolean;
    }
  | GeneralApiProblem;

export type IPramsAcceptFriendRequest = {
  requestId: string;
};

export type IPramsSendFriendRequest = {
  receiverId: string;
};

export type IPramsDeleteFriendRequest = {
  requestId: string;
};

export type ResponseCommonFriendRequest =
  | {
      kind: "ok";
      result: IFriendSearchStatus;
    }
  | GeneralApiProblem;
