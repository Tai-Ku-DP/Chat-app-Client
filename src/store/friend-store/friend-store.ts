import { flow, types } from "mobx-state-tree";
import { FriendSearchModel } from ".";
import {
  IParamsSearchUser,
  ResponseSearchUserWithStatus,
} from "~/apis/user/types";
import { extendEnv } from "../extendEnv";
import { IFriendSearch, StatusFriend } from "./types";
import {
  IPramsAcceptFriendRequest,
  IPramsDeleteFriendRequest,
  IPramsSendFriendRequest,
  ResponseBooleanCommon,
  ResponseCommonFriendRequest,
} from "~/apis/friend/types";

export const FriendStore = types
  .model("Friend Store", {
    isFetchingFriendSearch: types.optional(types.boolean, false),
    friendSearch: types.optional(types.map(FriendSearchModel), {}),
  })
  .extend(extendEnv)
  .views((self) => ({
    get listFriendSearch(): IFriendSearch[] {
      return Array.from(self.friendSearch.values());
    },
  }))
  .actions((self) => ({
    searchFriend: flow(function* (params: IParamsSearchUser) {
      self.friendSearch.clear();

      if (!params.email) return;

      const res: ResponseSearchUserWithStatus =
        yield self.apiUser.searchUserWithStatus({
          ...params,
        });

      if (res.kind === "ok") {
        res.result.forEach((item) => self.friendSearch.set(item._id, item));
      }
    }),

    setIsFetchingFriendSearch(value: boolean) {
      self.isFetchingFriendSearch = value;
    },

    acceptFriend: flow(function* (
      friendSearchId: string,
      params: IPramsAcceptFriendRequest
    ) {
      const res: ResponseBooleanCommon =
        yield self.apiFriend.acceptFriendRequest({
          ...params,
        });

      if (res.kind === "ok") {
        const friendStatus =
          self.friendSearch.get(friendSearchId)?.friendStatus;

        if (friendStatus) {
          friendStatus?.setFriendSearchStatus({
            ...friendStatus,
            status: StatusFriend.ACCEPTED,
          });
        }
      }

      return res.kind === "ok";
    }),

    sendFriendRequest: flow(function* (
      friendSearchId: string,
      params: IPramsSendFriendRequest
    ) {
      const res: ResponseCommonFriendRequest =
        yield self.apiFriend.sendFriendRequest({
          ...params,
        });

      if (res.kind === "ok") {
        const friendStatus =
          self.friendSearch.get(friendSearchId)?.friendStatus;

        friendStatus?.setFriendSearchStatus({
          ...res.result,
        });
      }

      return res.kind === "ok";
    }),

    cancelFriendRequest: flow(function* (
      friendSearchId: string,
      params: IPramsDeleteFriendRequest
    ) {
      const res: ResponseCommonFriendRequest =
        yield self.apiFriend.cancelFriendRequest({
          ...params,
        });

      if (res.kind === "ok") {
        const friendStatus =
          self.friendSearch.get(friendSearchId)?.friendStatus;

        console.log(res.result);

        friendStatus?.setFriendSearchStatus({
          ...res.result,
        });
      }

      return res.kind === "ok";
    }),
  }));
