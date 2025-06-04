import Breadcrumb from "@/components/ui/BreadCrump/BreadCrump";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
type privac_policy = {
  content: string;
};
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
