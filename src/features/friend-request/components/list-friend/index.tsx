import { observer } from "mobx-react-lite";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { IActionFriend } from "../hook";
import { ActionFriend } from "./ActionFriend";

type Props = Pick<IActionFriend, "listSearchFriend">;

/**
 * Trả về 2 ký tự viết tắt từ fullName:
 * - Nếu chỉ có 1 từ, lấy 2 ký tự đầu của từ đó (uppercase).
 * - Nếu có 2 từ, lấy ký tự đầu mỗi từ.
 * - Nếu có >=3 từ, lấy ký tự đầu của 2 từ cuối.
 */
function getInitials(fullName: string): string {
  // 1. Tách theo khoảng trắng, loại bỏ chuỗi rỗng
  const parts = fullName.trim().split(/\s+/);
  const len = parts.length;

  if (len === 0) {
    return "";
  }

  if (len === 1) {
    // 2. Chỉ một từ: lấy 2 ký tự đầu (hoặc toàn bộ nếu word.length<2)
    return parts[0].slice(0, 2).toUpperCase();
  }

  // 3. Hai từ trở lên: lấy 2 phần tử cuối, rồi lấy chữ cái đầu mỗi từ
  const lastTwo = parts.slice(-2);
  return lastTwo.map((w) => w.charAt(0).toUpperCase()).join("");
}

const ListUserComponent: React.FC<Props> = ({ listSearchFriend }) => {
  // // Render danh sách người dùng với trạng thái kết bạn
  // if (listUsersWithStatus?.length) {
  //   return (
  //     <div className="max-h-[300px] overflow-y-auto">
  //       {listUsersWithStatus.map((item) => {
  //         const user = item.user;
  //         const friendStatus = item.friendStatus;

  //         return (
  //           <div
  //             key={user?._id}
  //             className="flex items-center justify-between px-4 py-2 hover:bg-muted cursor-pointer"
  //           >
  //             <div className="flex items-center gap-3">
  //               <Avatar className="size-8">
  //                 {user.avatar && (
  //                   <AvatarImage
  //                     src={user.avatar || "/placeholder.svg"}
  //                     alt={user.fullName}
  //                   />
  //                 )}
  //                 <AvatarFallback className="bg-primary/10 text-primary">
  //                   {getInitials(user.fullName)}
  //                 </AvatarFallback>
  //               </Avatar>

  //               <div className="flex flex-col">
  //                 <span className="font-medium">{user.fullName}</span>
  //                 <span className="text-sm text-muted-foreground">
  //                   {user.email}
  //                 </span>
  //               </div>
  //             </div>

  //             <Button size="sm" variant="outline" className="gap-1">
  //               {friendStatus ? (
  //                 friendStatus.status === StatusFriendRequest.PENDING ? (
  //                   friendStatus.isSender ? (
  //                     <span>Pending</span>
  //                   ) : (
  //                     <span>Accept</span>
  //                   )
  //                 ) : (
  //                   <span>Friends</span>
  //                 )
  //               ) : (
  //                 <>
  //                   <UserPlus className="size-4" />
  //                   <span>Add Friend</span>
  //                 </>
  //               )}
  //             </Button>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  if (!listSearchFriend.length)
    return <span className="text-muted-foreground">No Result</span>;

  return (
    <div className="max-h-[300px] overflow-y-auto">
      {listSearchFriend.map((item) => (
        <div
          key={item?.user?._id}
          className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-3 ">
            <Avatar className="size-8">
              {item?.user?.avatar && (
                <AvatarImage
                  src={item?.user.avatar || "/placeholder.svg"}
                  alt={item?.user.fullName}
                />
              )}

              <AvatarFallback className="bg-primary/10 text-primary">
                {getInitials(item?.user?.fullName || "")}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="font-medium">{item?.user?.fullName}</span>
              <span className="text-sm text-muted-foreground">
                {item?.user?.email}
              </span>
            </div>
          </div>

          <ActionFriend friendStatus={item?.friendStatus} />
        </div>
      ))}
    </div>
  );
};

export const ListUser = observer(ListUserComponent);
