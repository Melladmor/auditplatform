import Breadcrumb from "@/components/ui/BreadCrump/BreadCrump";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
type privac_policy = {
  content: string;
};
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.pages.privacy");
  return {
    title: t("title"),
  };
}
const page = async () => {
  const data: privac_policy = await fetchPublicData({ url: "privacy_policy" });
  const t = await getTranslations();
  return (
    <div>
      <Breadcrumb
        title={t("navbarlinks.privacy_policy")}
        items={[
          { label: t("navbarlinks.home"), href: "/" },
          { label: t("navbarlinks.privacy_policy"), href: "/privacy-policy" },
        ]}
      />
      <div className="custom_section">
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}></div>
      </div>
    </div>
  );
};

export default page;
