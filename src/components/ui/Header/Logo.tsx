"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const t = useTranslations();
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          width={100}
          height={100}
          src="/logos/logo.svg"
          alt="Audit Station Logo"
          className="h-10 w-auto"
        />
        {/* <h1 className="text-l font-bold">{t("auditstation")}</h1> */}
      </div>
    </Link>
  );
};

export default Logo;
