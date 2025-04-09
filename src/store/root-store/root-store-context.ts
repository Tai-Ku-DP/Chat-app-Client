import React, { useContext } from "react";
import { IRootStore } from "./root-store";

//React.createContext tạo ra một Context object, giống như một kênh phát thanh.
export const RootStoreContext = React.createContext<IRootStore>(
  {} as IRootStore
);

export const RootStoreProvider = RootStoreContext.Provider;
// RootStoreContext.Provider là một component đặc biệt của React Context, dùng để "phát sóng" dữ liệu thực sự (giá trị của RootStore) tới các component con.
// Trong _app.tsx, bạn đã bọc toàn bộ ứng dụng trong <RootStoreProvider value={rootStore}>. Điều này có nghĩa là rootStore (store chính của bạn) được phát sóng từ đỉnh ứng dụng xuống tất cả các component con.

export const useStores = (): IRootStore => useContext(RootStoreContext);

// useContext(RootStoreContext) là cách React cho phép một component "bắt sóng" dữ liệu từ Context đã được cung cấp bởi RootStoreProvider.
// và bất kỳ component nào gọi hàm này sẽ nhận được cùng một instance của rootStore mà bạn đã truyền vào RootStoreProvider
