import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "~/lib";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

type IProps = {
  src: string;
  fullName: string;
  className?: string;
};
const AvatarCustom: React.FC<IProps> = ({ src, fullName, className }) => {
  return (
    <Avatar className={cn("size-8", className)}>
      {src && <AvatarImage src={src || "/placeholder.svg"} alt={fullName} />}

      <AvatarFallback className="bg-primary/10 text-primary">
        {fullName.slice(0, 1) || ""}
      </AvatarFallback>
    </Avatar>
  );
};

export { AvatarCustom, Avatar, AvatarImage, AvatarFallback };
