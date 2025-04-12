import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

export const ButtonQuickCreate = () => {
  return (
    <Button
      size="default"
      variant="outline"
      className="rounded-full p-2 has-[>svg]:p-[9px]"
    >
      <Plus />
    </Button>
  );
};
