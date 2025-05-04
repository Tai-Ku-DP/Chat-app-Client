import { UserCheck, UserPlus, UserX } from "lucide-react";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button } from "~/components/ui/button";
import { TooltipCustom } from "~/components/ui/tooltip";
import { IFriendSearch, StatusFriend } from "~/store/friend-store/types";
import { PropsDialogAddFriendParent } from "../dialog-add-friend";

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

const ButtonSend: React.FC<IPropsButton> = ({ onClick }) => {
  return (
    <TooltipCustom content="Add Friend">
      <Button onClick={onClick} size="sm" variant="outline" className="gap-1">
        <UserPlus className="size-4" />
        <span>Add</span>
      </Button>
    </TooltipCustom>
  );
};

type IProps = {
  item: IFriendSearch | null;
} & Pick<
  PropsDialogAddFriendParent,
  "sendFriendRequest" | "acceptFriendRequest" | "cancelFriendRequest"
>;
const ActionFriendComponent: React.FC<IProps> = ({
  item,
  sendFriendRequest,
  acceptFriendRequest,
  cancelFriendRequest,
}) => {
  const { PENDING } = StatusFriend;

  const friendStatus = item?.friendStatus;

  if (!friendStatus?.status && !friendStatus?.requestId)
    return (
      <div className="flex items-center gap-2">
        <ButtonSend
          onClick={() =>
            sendFriendRequest(item?._id || "", {
              receiverId: item?.user?._id || "",
            })
          }
        />
      </div>
    );

  if (!friendStatus?.isSender && friendStatus?.status === PENDING)
    return (
      <div className="flex items-center gap-2">
        <ButtonCancel
          onClick={() =>
            cancelFriendRequest(item?._id || "", {
              requestId: friendStatus.requestId,
            })
          }
        />

        <ButtonAccept
          onClick={() =>
            acceptFriendRequest(item?._id || "", {
              requestId: friendStatus.requestId,
            })
          }
        />
      </div>
    );

  if (friendStatus?.isSender && friendStatus?.status === PENDING)
    return (
      <div className="flex items-center gap-2">
        <ButtonCancel
          onClick={() =>
            cancelFriendRequest(item?._id || "", {
              requestId: friendStatus.requestId,
            })
          }
        />
      </div>
    );
};

export const ActionFriend = observer(ActionFriendComponent);
