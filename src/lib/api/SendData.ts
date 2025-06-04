import { Data } from "./type";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

export default async function sendData({ data, url }: Data) {
  const response = await fetch(`${API_BASE_URL}/api/public/${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.status}`);
  }

  const jsonData = await response.json();
  return jsonData.data;
}
