import { types } from "mobx-state-tree";

export const UserModel = types.model("UserModel").props({
  _id: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  fullName: types.optional(types.string, ""),
  avatar: types.optional(types.string, ""),
});
