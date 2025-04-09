import { applySnapshot } from "mobx-state-tree";
import { IRootStore, IRootStoreSnapshotIn, RootStore } from "./root-store";

let store: IRootStore | undefined;

export function initializeStore(
  snapshot: IRootStoreSnapshotIn | null | unknown
) {
  const _store = store ?? RootStore.create({});

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}
