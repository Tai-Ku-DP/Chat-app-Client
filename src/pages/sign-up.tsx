import { NextPageContext } from "next";
import { getCookiesUser, SignUp } from "~/features";

import { directionServerSide } from "~/lib";

export default function LoginPage() {
  return <SignUp />;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = getCookiesUser(ctx);
  if (cookies) {
    directionServerSide("/", ctx);
  }

  return {
    props: {
      title: "Page SignUp",
    },
  };
}
