import { NextPageContext } from "next";
import Nookies from "nookies";
import { CHAT_APP_CONSTANTS } from "~/lib";

const getCookiesUser = (ctx?: NextPageContext) => {
  return Nookies.get(ctx || null)[CHAT_APP_CONSTANTS.AUTH];
};

const setCookiesUser = ({
  ctx,
  value,
}: {
  ctx?: NextPageContext;
  value: string;
}) => {
  return Nookies.set(ctx || null, CHAT_APP_CONSTANTS.AUTH, value);
};

export { getCookiesUser, setCookiesUser };
