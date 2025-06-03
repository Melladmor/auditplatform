import React from "react";
import NextLink from "next/link";
import { HeaderLinks } from "./type";
type Props = Omit<HeaderLinks, "id">;

const HeaderLink = ({ title, href }: Props) => {
  return (
    <NextLink
      href={href}
      className="px-3 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200">
      {title}
    </NextLink>
  );
};

export default HeaderLink;
