import axios from "axios";

const isInCache = async (
  req: RequestInfo,
  cacheName: string,
): Promise<boolean> => {
  const cache = await caches.open(cacheName);
  const response = await cache.match(req);
  return !!response;
};

const storeInCache = async (
  req: RequestInfo,
  res: Response,
  cacheNmae: string,
): Promise<void> => {
  const cache = await caches.open(cacheNmae);
  cache.put(req, res);
};

const fetchFromCache = async (
  req: RequestInfo,
  cacheName: string,
): Promise<Response | undefined> => {
  const cache = await caches.open(cacheName);
  return cache.match(req);
};

export const fetchWithCache = async (
  url: string,
  id?: number,
): Promise<Response> => {
  const req = new Request(url);
  const cacheName = id ? `${id}_CACHE` : "PRODUCT_LIST";

  if (await isInCache(req, cacheName)) {
    const cachedResponse = await fetchFromCache(req, cacheName);
    if (!cachedResponse) {
      throw new Error("Failed to retrieve cached data.");
    }
    return cachedResponse;
  }

  const axiosResponse = await axios.get(url);
  const headersArray: [string, string][] = Object.entries(
    axiosResponse.headers,
  );
  const res = new Response(JSON.stringify(axiosResponse.data), {
    status: axiosResponse.status,
    statusText: axiosResponse.statusText,
    headers: headersArray,
  });

  await storeInCache(req, res.clone(), cacheName);
  return res;
};
