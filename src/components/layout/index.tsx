import React from "react";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import { useActionSidebar } from "./hook";

type IProps = {
  children: React.ReactNode;
};

const Header = dynamic(() => import("./header").then((mo) => mo.Header), {
  ssr: false,
});

const Sidebar = dynamic(() => import("./sidebar").then((mo) => mo.Sidebar), {
  ssr: false,
});

const Main = dynamic(() => import("./main").then((mo) => mo.Main), {
  ssr: false,
});

const WrapContainer = dynamic(
  () => import("./wrap-container").then((mo) => mo.WrapContainer),
  {
    ssr: false,
  }
);

const LayoutComponent: React.FC<IProps> = ({ children }) => {
  const {
    isCollapseSidebar,
    paddingLeftSidebar,
    widthSidebar,

    toggleCollapseSidebar,
  } = useActionSidebar();

  return (
    <div className="flex h-screen overflow-y-auto">
      <Sidebar
        isCollapseSidebar={isCollapseSidebar}
        widthSidebar={widthSidebar}
      />

      <WrapContainer paddingLeftSidebar={paddingLeftSidebar}>
        <Header
          toggleCollapseSidebar={toggleCollapseSidebar}
          isCollapseSidebar={isCollapseSidebar}
        />

        <Main>{children}</Main>
      </WrapContainer>
    </div>
  );
};

export const Layout = observer(LayoutComponent);
