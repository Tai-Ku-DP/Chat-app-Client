export const envConfig = () => {
  return {
    NEXT_PUBLIC_BASE_URL_API_USER: process.env.NEXT_PUBLIC_BASE_URL_API_USER,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_BASE_URL_API_AUTH: process.env.NEXT_PUBLIC_BASE_URL_API_AUTH,
    NEXT_PUBLIC_BASE_URL_API_FIEND_REQUEST:
      process.env.NEXT_PUBLIC_BASE_URL_API_FIEND_REQUEST,
    NEXT_PUBLIC_BASE_URL_API_FIEND_SHIP:
      process.env.NEXT_PUBLIC_BASE_URL_API_FIEND_SHIP,
  };
};
