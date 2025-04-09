import "~/styles/globals.css";
import { Toaster } from "~/components/ui/sonner";
import { ThemeProvider } from "~/components/theme-provider";
import { getCookiesUser } from "~/features";
import { initializeStore } from "~/store/root-store";
import { directionServerSide } from "~/lib";
import { Api, ApiUser } from "~/apis";
import { getSnapshot } from "mobx-state-tree";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { useMemo } from "react";
import { RootStoreProvider } from "~/store/root-store/root-store-context";

type IProps = {
  initialState?: unknown;
};
function MyApp({ Component, pageProps, initialState }: AppProps & IProps) {
  //   Tóm tắt luồng:
  // Server: Tạo store mới → Lấy dữ liệu → Truyền vào trang → Render.
  // Client: Tạo store một lần → Đồng bộ dữ liệu từ server (nếu có) → Dùng lại mãi mãi.
  const rootStore = useMemo(
    () => initializeStore(initialState),
    [initialState]
  );

  return (
    <>
      <RootStoreProvider value={rootStore}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </RootStoreProvider>
    </>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<IProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  const cookies = getCookiesUser(context.ctx);
  const store = initializeStore(null);

  if (!cookies && context.ctx.pathname !== "/login") {
    directionServerSide("/login", context.ctx);
    return {
      pageProps: "",
    };
  }

  Api.setToken(cookies);

  const user = await ApiUser.getProfile();

  if (user.kind === "ok") {
    store.userStore.setUser(user.result);
  }

  if (!user && context.ctx.pathname !== "/login") {
    directionServerSide("/login", context.ctx);
    return {
      pageProps: "",
    };
  }

  return {
    pageProps: {
      ...ctx.pageProps,
    },
    initialState: getSnapshot(store),
  };
};

export default MyApp;
