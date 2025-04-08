export const envConfig = () => {
  return {
    NEXT_PUBLIC_BASE_URL_API_USER: process.env.NEXT_PUBLIC_BASE_URL_API_USER,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_BASE_URL_API_AUTH: process.env.NEXT_PUBLIC_BASE_URL_API_AUTH,
  };
};
