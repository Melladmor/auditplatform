import fetchPublicData from "@/lib/api/fetchPublicData";
import React from "react";

const page = async () => {
  const data = await fetchPublicData({ url: "about_us" });
  console.log(data);
  return <div>page</div>;
};

export default page;
