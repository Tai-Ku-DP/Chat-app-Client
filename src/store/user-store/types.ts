import { Instance } from "mobx-state-tree";
import { UserModel } from "./model";

export type IUser = Instance<typeof UserModel>;
