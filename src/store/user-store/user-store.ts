import { flow, types } from "mobx-state-tree";
import { UserModel } from ".";
import { ResponseUser } from "~/apis/user/types";
import { extendEnv } from "../extendEnv";

export const UserStore = types
  .model("User Store", {
    user: types.optional(UserModel, {}),
  })
  .extend(extendEnv)
  .actions((self) => ({
    getUSer: flow(function* () {
      const res: ResponseUser = yield self.apiUser.getProfile();

      if (res.kind !== "ok") return undefined;
      self.user = res.result;

      return res.result;
    }),
  }));
