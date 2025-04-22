import { Check, Plus, Search, UserPlus, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Friend() {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Friend Requests</h2>
          <Button variant="outline" size="sm" className="gap-1">
            <UserPlus className="size-4" />
            <span>Add Friend</span>
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search friends..." className="pl-10" />
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground">
            PENDING REQUESTS (3)
          </div>

          {/* Friend Request Items */}
          <div className="bg-card rounded-lg border shadow-sm">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Jacquenetta Slowgrave"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jacquenetta Slowgrave</div>
                  <div className="text-sm text-muted-foreground">
                    2 mutual friends
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full size-9 p-0"
                >
                  <X className="size-4" />
                  <span className="sr-only">Reject</span>
                </Button>
                <Button size="sm" className="rounded-full size-9 p-0">
                  <Check className="size-4" />
                  <span className="sr-only">Accept</span>
                </Button>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Nickola Peever"
                  />
                  <AvatarFallback>NP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Nickola Peever</div>
                  <div className="text-sm text-muted-foreground">
                    5 mutual friends
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full size-9 p-0"
                >
                  <X className="size-4" />
                  <span className="sr-only">Reject</span>
                </Button>
                <Button size="sm" className="rounded-full size-9 p-0">
                  <Check className="size-4" />
                  <span className="sr-only">Accept</span>
                </Button>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Farand Hume"
                  />
                  <AvatarFallback>FH</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Farand Hume</div>
                  <div className="text-sm text-muted-foreground">
                    1 mutual friend
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full size-9 p-0"
                >
                  <X className="size-4" />
                  <span className="sr-only">Reject</span>
                </Button>
                <Button size="sm" className="rounded-full size-9 p-0">
                  <Check className="size-4" />
                  <span className="sr-only">Accept</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm font-medium text-muted-foreground mt-6">
            SUGGESTED FRIENDS (2)
          </div>

          <div className="bg-card rounded-lg border shadow-sm">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Ossie Peasey"
                  />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Ossie Peasey</div>
                  <div className="text-sm text-muted-foreground">
                    8 mutual friends
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="size-4" />
                <span>Add Friend</span>
              </Button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Hall Negri"
                  />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Hall Negri</div>
                  <div className="text-sm text-muted-foreground">
                    3 mutual friends
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="size-4" />
                <span>Add Friend</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
