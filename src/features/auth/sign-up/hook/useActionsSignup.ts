import { useCallback, useState } from "react";
import { IFormSignup } from "../schema";
import { sleep } from "~/lib";
import { toast } from "sonner";

import { useRouter } from "next/router";
import { ApiAuth } from "~/apis";
import { setCookiesUser } from "../../lib";

export const useActionsSignup = () => {
  const [loadingSignup, setLoadingSignup] = useState(false);

  const router = useRouter();

  const submitSignup = useCallback(async (values: IFormSignup) => {
    try {
      setLoadingSignup(true);
      const res = await ApiAuth.signUp(values);

      if (res.kind === "conflict") {
        toast.error("Email existed", {
          position: "top-center",
        });
        return;
      }

      if (res.kind !== "ok") {
        toast.error("Something went wrong !!", {
          position: "top-center",
        });
        return;
      }

      await sleep();

      toast.success("Register Success", {
        position: "top-center",
      });

      setCookiesUser({
        value: res.result.token,
      });
      router.replace("/");
    } finally {
      setLoadingSignup(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadingSignup,
    submitSignup,
  };
};
