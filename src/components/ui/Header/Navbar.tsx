"use client";
import { useState } from "react";
import Logo from "./Logo";
import { HeaderLinks } from "./type";
import HeaderLink from "./HeaderLink";
import LanguageDropdown from "./Lang";
import Sidebar from "./SideBar";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  links: HeaderLinks[];
};

export default function Navbar({ links }: Props) {
  const t = useTranslations();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm padding">
      <div className="container mx-auto custom_header_p">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {links?.map((link) => (
              <HeaderLink key={link?.id} {...link} />
            ))}
          </nav>

          <div className="flex items-center space-x-4 gap-3 space-x-reverse">
            <div className="hidden lg:block">
              <LanguageDropdown />
            </div>

            <Link
              href="#"
              className="hidden sm:inline-flex md:hidden lg:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium app-button shine bg-gradient-to-r from-green-500 to-primary text-white rounded-lg shadow-lg justify-center">
              {t("downloadapp")}
            </Link>

            <button
              type="button"
              onClick={toggleSidebar}
              className="block lg:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={sidebarOpen}
              aria-controls="mobile-sidebar">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Sidebar links={links} isOpen={sidebarOpen} onClose={closeSidebar} />
    </header>
  );
}
