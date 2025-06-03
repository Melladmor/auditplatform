import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageDropdown from "./Lang";
import { HeaderLinks } from "./type";
import Logo from "./Logo";
type Props = {
  links: HeaderLinks[];
  isOpen: boolean;
  onClose: () => void;
};
const Sidebar = ({ links, isOpen, onClose }: Props) => {
  const t = useTranslations("navbarlinks");
  const title = useTranslations();

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen && event.target.classList.contains("sidebar-overlay")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 sidebar-overlay ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed -top-10 right-0 h-auto w-full bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-10" : "-translate-y-full"
        }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {links?.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
              {link.title}
            </a>
          ))}
        </div>

        <div className="px-4 py-3">
          <a
            href="#"
            className="w-full inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium app-button shine bg-gradient-to-r from-green-500 to-primary text-white rounded-lg shadow-lg justify-center">
            {title("downloadapp")}
          </a>
        </div>

        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="mt-3 px-4">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
