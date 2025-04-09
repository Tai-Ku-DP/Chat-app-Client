import { applySnapshot } from "mobx-state-tree";
import { IRootStore, IRootStoreSnapshotIn, RootStore } from "./root-store";

let store: IRootStore | undefined;

// Hàm initializeStore là nơi bạn "xây dựng" kho hàng thực sự từ bản thiết kế.
// Nếu có dữ liệu ban đầu (snapshot), nó sẽ "đổ" dữ liệu đó vào store. Nếu không, store bắt đầu trống rỗng.
// Trên server (SSR/SSG), mỗi lần request sẽ tạo một store mới. Trên client (trình duyệt), store chỉ tạo một lần và được tái sử dụng.
export function initializeStore(
  snapshot: IRootStoreSnapshotIn | null | unknown
) {
  // Nếu store chưa được tạo thì tạo mới, nếu đã có thì sử dụng cái đã tồn tại

  const _store = store ?? RootStore.create({});

  // Nếu có snapshot từ phía server hoặc khi rehydrate, áp dụng vào store
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  // Trường hợp server-side (SSG hoặc SSR): tạo luôn một store mới
  if (typeof window === "undefined") return _store;

  // Trường hợp client: chỉ tạo store một lần duy nhất và lưu trữ vào biến toàn cục
  if (!store) store = _store;

  return store;
}
