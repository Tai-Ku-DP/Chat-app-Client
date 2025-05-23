import { getEnv, IAnyStateTreeNode } from "mobx-state-tree";
import { ApiAuth, ApiFriend, ApiUser } from "~/apis";

export const extendEnv = (self: IAnyStateTreeNode) => {
  return {
    views: {
      get environment() {
        return getEnv(self);
      },
    },

    state: {
      apiUser: ApiUser,
      apiAuth: ApiAuth,
      apiFriend: ApiFriend,
    },
  };
};
