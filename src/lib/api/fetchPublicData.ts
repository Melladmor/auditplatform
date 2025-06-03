import { getLocale } from "next-intl/server";
import { FetchPublicDataParams } from "./type";

const API_BASE_URL = process.env.API_BASE_URL;

export default async function fetchPublicData({ url }: FetchPublicDataParams) {
  const locale = await getLocale();
  // await new Promise((r) => setTimeout(r, 10000));
  const res = await fetch(`${API_BASE_URL}/api/public/${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${res.status}`);
  }

  const jsonData = await res.json();
  return jsonData.data;
}
