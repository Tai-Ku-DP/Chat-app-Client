import { NextPageContext } from "next";
import { directionServerSide } from "~/lib";
import { ApiUser } from "~/apis/user";
import { Api } from "~/apis/config/api-config";
import { getCookiesUser } from "~/features";

import { Layout } from "~/components/layout";
export default function Home() {
  return (
    <Layout>
      <div>content</div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = getCookiesUser(ctx);

  if (!cookies) {
    directionServerSide("/login", ctx);
    return;
  }

  Api.setToken(cookies);

  const user = await ApiUser.getProfile();

  if (!user) {
    directionServerSide("/login", ctx);
    return;
  }

  return {
    props: {
      title: "",
    },
  };
};
