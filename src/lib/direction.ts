import { NextPageContext } from "next";

export const directionServerSide = (
  location: string,
  ctx?: NextPageContext
) => {
  if (typeof window === "undefined") {
    ctx?.res?.writeHead(301, {
      Location: location,
      "Cache-Control": "no-store", // Disable cache
    });
    ctx?.res?.end();

    return {
      pageProps: "",
    };
  }
};
