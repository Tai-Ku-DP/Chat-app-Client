import { UserCheck, UserPlus, UserX } from "lucide-react";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button } from "~/components/ui/button";
import { TooltipCustom } from "~/components/ui/tooltip";
import { IFriendSearchStatus, StatusFriend } from "~/store/friend-store/types";

type IPropsButton = {
  onClick: () => void;
};
const ButtonCancel: React.FC<IPropsButton> = ({ onClick }) => {
  return (
    <TooltipCustom content="Cancel friend request">
      <Button
        onClick={onClick}
        size="sm"
        variant="outline"
        className="gap-2 border-red-400"
      >
        <UserX className="size-4 text-red-400" />
        <span className="text-red-400">Cancel</span>
      </Button>
    </TooltipCustom>
  );
};

const ButtonAccept: React.FC<IPropsButton> = ({ onClick }) => {
  return (
    <TooltipCustom content="Accept friend request">
      <Button onClick={onClick} size="sm" variant="outline" className="gap-1">
        <UserCheck className="size-4" />
        <span>Accept</span>
      </Button>
    </TooltipCustom>
  );
};

const ButtonAdd: React.FC<IPropsButton> = ({ onClick }) => {
  return (
    <TooltipCustom content="Send friend request">
      <Button onClick={onClick} size="sm" variant="outline" className="gap-1">
        <UserPlus className="size-4" />
      </Button>
    </TooltipCustom>
  );
};

type IProps = {
  friendStatus: IFriendSearchStatus | null;
};
const ActionFriendComponent: React.FC<IProps> = ({ friendStatus }) => {
  const { PENDING } = StatusFriend;

  if (!friendStatus?.status)
    return (
      <div className="flex items-center gap-2">
        <ButtonAdd onClick={() => console.log("Click ButtonAdd")} />
      </div>
    );

  if (!friendStatus?.isSender && friendStatus?.status === PENDING)
    return (
      <div className="flex items-center gap-2">
        <ButtonCancel onClick={() => console.log("Click ButtonCancel")} />
        <ButtonAccept onClick={() => console.log("Click ButtonAccept")} />
      </div>
    );

  if (friendStatus?.isSender && friendStatus?.status === PENDING)
    return (
      <div className="flex items-center gap-2">
        <ButtonCancel onClick={() => console.log("Click ButtonCancel")} />
      </div>
    );
};

export const ActionFriend = observer(ActionFriendComponent);
