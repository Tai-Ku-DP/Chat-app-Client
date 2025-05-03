import { types } from "mobx-state-tree";
import { STATUS_FRIEND, StatusFriend } from "./types";

export const FriendSearchStatus = types.model("FriendSearchStatus").props({
  requestId: types.optional(types.string, ""),
  status: types.optional(
    types.enumeration([...STATUS_FRIEND]),
    StatusFriend.PENDING
  ),
  isSender: types.optional(types.boolean, false),
});

export const UserFriendSearchStatus = types
  .model("UserFriendSearchStatus")
  .props({
    _id: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    fullName: types.optional(types.string, ""),
    avatar: types.optional(types.string, ""),
  });

export const FriendSearchModel = types.model("FriendSearchModel").props({
  _id: types.optional(types.string, ""),
  user: types.maybeNull(UserFriendSearchStatus),
  friendStatus: types.maybeNull(FriendSearchStatus),
});
