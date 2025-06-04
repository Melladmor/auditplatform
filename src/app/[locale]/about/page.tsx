import Breadcrumb from "@/components/ui/BreadCrump/BreadCrump";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";

const page = async () => {
  const data = await fetchPublicData({ url: "about_us" });
  const t = await getTranslations();
  return (
    <div>
      <Breadcrumb
        title={t("navbarlinks.aboutus")}
        items={[
          { label: t("navbarlinks.home"), href: "/" },
          { label: t("navbarlinks.aboutus"), href: "/about" },
        ]}
      />
    </div>
  );
};

export default page;
