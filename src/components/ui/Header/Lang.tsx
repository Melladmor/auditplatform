"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageDropdown() {
  const langs = [
    { name: "English", id: "en" },
    { name: "العربية", id: "ar" },
    { name: "Français", id: "fr" },
  ];

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(locale);

  const onSelectChange = (nextLocale: string) => {
    setSelectedLang(nextLocale);
    setIsOpen(false);
    // @ts-expect-error -- params is validated at runtime
    router.replace({ pathname, params }, { locale: nextLocale as Locale });
  };

  const selected = langs.find((l) => l.id === selectedLang);

  return (
    <div className="relative inline-block text-right">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200">
        {selected && (
          <>
            <span>{selected.name}</span>
          </>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute ltr:left-0 rtl:right-0  mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50">
          {langs.map((lang) => (
            <button
              key={lang.id}
              onClick={() => onSelectChange(lang.id)}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
