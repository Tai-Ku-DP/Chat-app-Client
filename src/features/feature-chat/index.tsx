import { observer } from "mobx-react-lite";
import { WrapContainer } from "./wrap-container";
import { Chat } from "./chat";
import { SidebarChat } from "./sidebar-chat";

const ChatFeatureComponent = () => {
  return (
    <WrapContainer>
      <SidebarChat />
      <Chat />
    </WrapContainer>
  );
};

export const ChatFeature = observer(ChatFeatureComponent);
