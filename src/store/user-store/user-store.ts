import { types } from "mobx-state-tree";
import { UserModel } from ".";
import { IUser } from "./types";

export const UserStore = types
  .model("User Store", {
    user: types.optional(UserModel, {}),
  })
  .actions((self) => ({
    setUser(user: IUser) {
      self.user = user;
    },
  }));
