import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { UserStore } from "../user-store";
import { CommonStore } from "../common-store";

export const RootStore = types.model("Root Store", {
  userStore: types.optional(UserStore, {}),
  commonStore: types.optional(CommonStore, {}),
});

export type IRootStore = Instance<typeof RootStore>;
export type IRootStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type IRootStoreSnapshotOut = SnapshotOut<typeof RootStore>;
