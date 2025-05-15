import { UserPlus } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

interface HeaderProps {
  onAddFriend: () => void;
}

export const FriendRequestsHeader = React.memo<HeaderProps>(
  ({ onAddFriend }) => {
    return (
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Friend Requests</h2>
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
          onClick={onAddFriend}
        >
          <UserPlus className="size-4" />
          <span>Add Friend</span>
        </Button>
      </div>
    );
  }
);

FriendRequestsHeader.displayName = "FriendRequestsHeader";
