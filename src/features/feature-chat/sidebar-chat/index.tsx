import { observer } from "mobx-react-lite";
import { SidebarChatHeader } from "./sidebar-chat-header";

const SidebarChatComponent = () => {
  return (
    <div className="border rounded-md p-4 w-[30%]">
      <SidebarChatHeader />
    </div>
  );
};

export const SidebarChat = observer(SidebarChatComponent);
