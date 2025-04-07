import { NextPageContext } from "next";
import { SignUp } from "~/features";

import Nookies from "nookies";
import { CHAT_APP_CONSTANTS, directionServerSide } from "~/lib";

export default function LoginPage() {
  return <SignUp />;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = Nookies.get(ctx)[CHAT_APP_CONSTANTS.Auth];
  if (cookies) {
    directionServerSide("/", ctx);
  }

  return {
    props: {
      title: "Page SignUp",
    },
  };
}
