import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { IFormLogin } from "../schema";
import { ApiAuth } from "~/apis";
import { setCookiesUser } from "../../lib";

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

        setCookiesUser({
          value: res.result.token,
        });
        router.replace("/");
      } finally {
        setLoadingLogin(false);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router]
  );

  return {
    submitLogin,
    loadingLogin,
  };
};
