import { observer } from "mobx-react-lite";
import React from "react";
import { AvatarCustom } from "~/components/ui/avatar";
import { ActionFriend } from "./ActionFriend";
import { StatusFriend } from "~/store/friend-store/types";
import { Search } from "lucide-react";
import { PropsDialogAddFriendParent } from "../dialog-add-friend";

type Props = Pick<
  PropsDialogAddFriendParent,
  | "listSearchFriend"
  | "sendFriendRequest"
  | "acceptFriendRequest"
  | "cancelFriendRequest"
>;

const ListUserComponent: React.FC<Props> = ({
  listSearchFriend,
  //
  acceptFriendRequest,
  sendFriendRequest,
  cancelFriendRequest,
}) => {
  if (!listSearchFriend.length)
    return (
      <div className="h-1/2 flex  items-center justify-center gap-2">
        <Search size={20} className="text-muted-foreground" />
        <span className="text-muted-foreground text-xl">No Result</span>
      </div>
    );

  return (
    <div className="max-h-[300px] overflow-y-auto">
      {listSearchFriend.map((item) => (
        <div
          key={item?.user?._id}
          className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-3 ">
            <AvatarCustom
              src={item?.user?.avatar || ""}
              fullName={item?.user?.fullName || ""}
            />

            <div className="flex flex-col">
              <span className="font-medium">{item?.user?.fullName}</span>
              <span className="text-sm text-muted-foreground">
                {item?.user?.email}
              </span>
            </div>

            {item.friendStatus?.status === StatusFriend.ACCEPTED && (
              <span className="px-1.5 rounded-full border-green-200 border text-green-400 text-xs">
                Friend
              </span>
            )}
          </div>

          <ActionFriend
            item={item}
            sendFriendRequest={sendFriendRequest}
            acceptFriendRequest={acceptFriendRequest}
            cancelFriendRequest={cancelFriendRequest}
          />
        </div>
      ))}
    </div>
  );
};

export const ListUser = observer(ListUserComponent);
