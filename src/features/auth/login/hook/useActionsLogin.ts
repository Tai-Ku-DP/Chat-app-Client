import { useCallback, useState } from "react";
import { ApiAuth } from "~/apis/api-auth";
import { CHAT_APP_CONSTANTS } from "~/lib";
import nookies from "nookies";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { IFormLogin } from "../schema";

export const useActionsLogin = () => {
  const [loadingLogin, setLoadingLogin] = useState(false);

  const router = useRouter();

  const submitLogin = useCallback(
    async (values: IFormLogin) => {
      try {
        setLoadingLogin(true);
        const res = await ApiAuth.login(values);

        if (res.kind !== "ok") {
          toast.error("Email or Password some wrong", {
            position: "top-center",
          });
          return;
        }

        toast.success("Login Success", {
          position: "top-center",
        });

        nookies.set(null, CHAT_APP_CONSTANTS.Auth, res.result.token);
        router.replace("/");
      } finally {
        setLoadingLogin(false);
      }
    },
    [router]
  );

  return {
    submitLogin,
    loadingLogin,
  };
};
