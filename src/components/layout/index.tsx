import React from "react";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";

type IProps = {
  children: React.ReactNode;
};

const Header = dynamic(() => import("./header").then((mo) => mo.Header), {
  ssr: false,
});

const Sidebar = dynamic(() => import("./sidebar").then((mo) => mo.Sidebar), {
  ssr: false,
});

export const Layout: React.FC<IProps> = observer(({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 pl-[calc(var(--sidebar-width)+1rem)] pr-4">
        <Header />

        <main className="relative flex w-full flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
});
