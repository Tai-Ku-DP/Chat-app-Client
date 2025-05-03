import { flow, types } from "mobx-state-tree";
import { FriendSearchModel } from ".";
import {
  IParamsSearchUser,
  ResponseSearchUserWithStatus,
} from "~/apis/user/types";
import { extendEnv } from "../extendEnv";
import { IFriendSearch } from "./types";

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
  }));
