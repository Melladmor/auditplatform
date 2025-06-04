import Breadcrumb from "@/components/ui/BreadCrump/BreadCrump";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";

type terms_conditions = {
  content: string;
};

const page = async () => {
  const data: terms_conditions = await fetchPublicData({
    url: "term_and_conditions",
  });
  const t = await getTranslations();
  return (
    <div>
      <Breadcrumb
        title={t("navbarlinks.terms_conditions")}
        items={[
          { label: t("navbarlinks.home"), href: "/" },
          {
            label: t("navbarlinks.terms_conditions"),
            href: "/terms-and-conditions",
          },
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
