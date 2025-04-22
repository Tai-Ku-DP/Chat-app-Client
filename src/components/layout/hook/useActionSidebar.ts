import { useCallback } from "react";
import { useStores } from "~/store/root-store/root-store-context";

type GetReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

export type IActionSidebar = GetReturnType<typeof useActionSidebar>;

export const useActionSidebar = () => {
  const { commonStore } = useStores();

  const isCollapseSidebar = commonStore.isCollapseSidebar;

  const calcWidthSidebar = useCallback(() => {
    if (isCollapseSidebar) return "w-sidebar-collapse-width";

    return "w-sidebar-default-width";
  }, [isCollapseSidebar]);

  const calcPaddingLeftSidebar = useCallback(() => {
    if (isCollapseSidebar)
      return "pl-4 md:pl-[calc(var(--sidebar-collapse-width))]";

    return "pl-4 md:pl-[calc(var(--sidebar-default-width))]";
  }, [isCollapseSidebar]);

  return {
    isCollapseSidebar,

    widthSidebar: calcWidthSidebar(),
    paddingLeftSidebar: calcPaddingLeftSidebar(),

    toggleCollapseSidebar: commonStore.toggleCollapseSidebar,
    setIsCollapseSidebar: commonStore.setIsCollapseSidebar,

    calcWidthSidebar,
    calcPaddingLeftSidebar,
  };
};
