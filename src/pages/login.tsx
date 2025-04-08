import { NextPageContext } from "next";
import { getCookiesUser, Login } from "~/features";

import { directionServerSide } from "~/lib";

export default function LoginPage() {
  return <Login />;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = getCookiesUser(ctx);

  if (cookies) directionServerSide("/", ctx);

  return { props: {} };
}
