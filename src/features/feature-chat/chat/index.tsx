import { observer } from "mobx-react-lite";

const ChatComponent = () => {
  return <div className="h-full flex-1">ChatComponent</div>;
};

export const Chat = observer(ChatComponent);
