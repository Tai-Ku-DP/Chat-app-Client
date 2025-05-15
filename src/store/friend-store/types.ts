import { Instance } from "mobx-state-tree";
import { FriendSearchModel, FriendSearchStatus } from "./model";

export type IFriendSearch = Instance<typeof FriendSearchModel>;
export type IFriendSearchStatus = Instance<typeof FriendSearchStatus>;

export enum StatusFriend {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  EMPTY_STRING = "",
}
export const STATUS_FRIEND = [
  StatusFriend.ACCEPTED,
  StatusFriend.PENDING,
  StatusFriend.REJECTED,
  StatusFriend.EMPTY_STRING,
] as const;

export type IStatusFriend = (typeof STATUS_FRIEND)[number];
