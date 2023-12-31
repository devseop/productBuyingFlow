import { BasicInfoProps } from "../../types/types";

export const storeTokenInCache = async (
  userInfo: BasicInfoProps,
  token: string,
) => {
  const { username } = userInfo;
  const cache = await caches.open("TOKEN");
  const res = new Response(token);
  cache.put(`${username}_TOKEN`, res);
};

export const getTokenFromCache = async (userInfo: BasicInfoProps) => {
  const { username } = userInfo;
  const cache = await caches.open("TOKEN");
  const res = await cache.match(`${username}_TOKEN`);
  if (res) {
    return res.text();
  }
  return null;
};

export const removeTokenFromCache = async (userInfo: BasicInfoProps) => {
  const { username } = userInfo;
  const cache = await caches.open("TOKEN");
  cache.delete(`${username}_TOKEN`);
};
