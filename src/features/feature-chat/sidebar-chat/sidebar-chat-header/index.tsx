import { observer } from "mobx-react-lite";
import React from "react";
import { ButtonQuickCreate, InputSearch } from "./components";

const SidebarChatHeaderComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <h2>Chats</h2>
      <ButtonQuickCreate />
      <InputSearch />
    </div>
  );
};

export const SidebarChatHeader = observer(SidebarChatHeaderComponent);
