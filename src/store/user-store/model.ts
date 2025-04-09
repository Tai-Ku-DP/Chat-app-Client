import { types } from "mobx-state-tree";

export const UserModel = types.model("User Model", {
  _id: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  fullName: types.optional(types.string, ""),
});
