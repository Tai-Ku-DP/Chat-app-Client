import { types } from "mobx-state-tree";
import { extendEnv } from "../extendEnv";

export const CommonStore = types
  .model("CommonStore", {
    // Sidebar
    isCollapseSidebar: types.optional(types.boolean, false),
  })
  .extend(extendEnv)
  .actions((self) => ({
    setIsCollapseSidebar(value: boolean) {
      self.isCollapseSidebar = value;
    },

    toggleCollapseSidebar() {
      self.isCollapseSidebar = !self.isCollapseSidebar;
    },
  }));
