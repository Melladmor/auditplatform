import { getTranslations } from "next-intl/server";
import { HeaderLinks } from "./type";
import Navbar from "./Navbar";

export default async function HeaderWithSidebar() {
  const t = await getTranslations("navbarlinks");

  const links: HeaderLinks[] = [
    {
      id: 2,
      title: t("home"),
      href: "/",
    },
    // {
    //   id: 3,
    //   title: t("aboutus"),
    //   href: "/about",
    // },
    {
      id: 4,
      title: t("terms_conditions"),
      href: "/terms-and-conditions",
    },
    {
      id: 5,
      title: t("privacy_policy"),
      href: "/privacy-policy",
    },
    {
      id: 6,
      title: t("contactus"),
      href: "/contact",
    },
  ];

  return <Navbar links={links} />;
}
