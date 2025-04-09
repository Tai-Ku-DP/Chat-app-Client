import React, { useContext } from "react";
import { IRootStore } from "./root-store";

export const RootStoreContext = React.createContext<IRootStore>(
  {} as IRootStore
);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = (): IRootStore => useContext(RootStoreContext);
