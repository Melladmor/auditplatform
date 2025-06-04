"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({
  title,
  items,
}: {
  title: string;
  items: BreadcrumbItem[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mb-8 relative overflow-hidden">
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-20 bg-gradient-to-b from-primary to-purple-500 rounded-r-md opacity-80"></div>
      <div className="absolute -right-2 bottom-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-xl"></div>

      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl -z-10"></div>

      <div className="relative z-10 py-6">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-in-out ${
            mounted ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          }`}>
          {title}
        </h2>

        <nav
          className={`text-sm transition-all duration-700 delay-300 ease-in-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-center transition-all duration-500`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors relative group px-2 py-1">
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <span className="font-medium text-dark bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full shadow-sm border border-gray-200">
                    {item.label}
                  </span>
                )}
                {index < items.length - 1 && (
                  <div className="mx-3 text-gray-400 flex items-center rtl:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Decorative dots */}
      <div className="absolute -bottom-4 right-4 flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full bg-primary opacity-70 animate-pulse`}
            style={{ animationDelay: `${i * 0.2}s` }}></div>
        ))}
      </div>
    </div>
  );
}
